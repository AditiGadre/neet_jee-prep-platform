import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 
  process.env.VITE_SUPABASE_URL || 
  process.env.SUPABASE_URL || 
  'https://emfnqqxsyidicqxnxxxj.supabase.co';

const SUPABASE_SERVICE_ROLE_OR_ANON_KEY = 
  process.env.SUPABASE_SERVICE_ROLE_KEY || 
  process.env.VITE_SUPABASE_ANON_KEY || 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtZm5xcXhzeWlkaWNxeG54eHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODczMjk3OTcsImV4cCI6MjEwMjkwNTc5N30.L-yNwKM4F3hOHnjiYjrMm9H9r4xWRTNHPxTjf8yfObg';

const serverSupabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_OR_ANON_KEY, {
  auth: { persistSession: false }
});

function cleanPhoneNumber(raw: string): string {
  if (!raw) return '';
  const digits = raw.replace(/\D/g, '');
  if (digits.length > 10 && digits.startsWith('91')) {
    return digits.slice(2);
  }
  return digits.slice(-10);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 1. GET: Fetch student profile by phone or email across all systems
  if (req.method === 'GET') {
    const rawPhone = (req.query.phone as string) || '';
    const rawEmail = ((req.query.email as string) || '').toLowerCase().trim();
    const phone = cleanPhoneNumber(rawPhone);

    if (!phone && !rawEmail) {
      return res.status(400).json({ success: false, error: 'Phone or email parameter required' });
    }

    try {
      let matchedStudent: any = null;

      // 1a. Query by primary phone in STUDENT_ENROLLMENTS
      if (phone && phone.length === 10) {
        const { data, error } = await serverSupabase
          .from('questions')
          .select('id, question_text, updated_at')
          .eq('subject', '__SYSTEM_SYNC__')
          .eq('chapter', 'STUDENT_ENROLLMENTS')
          .or(`topic.eq.${phone},id.eq.__STUDENT__${phone},id.like.__STUDENT__${phone}__%`)
          .order('updated_at', { ascending: false })
          .limit(5);

        if (!error && data && data.length > 0) {
          for (const row of data) {
            try {
              const parsed = JSON.parse(row.question_text);
              if (parsed && parsed.studentName && parsed.rollNumber) {
                matchedStudent = parsed;
                break;
              }
            } catch {}
          }
        }
      }

      // 1b. If not found by primary phone, search by email in STUDENT_ENROLLMENTS_EMAIL
      if (!matchedStudent && rawEmail && rawEmail.includes('@')) {
        const safeEmail = rawEmail.replace(/[^a-z0-9@._-]/gi, '');
        const { data, error } = await serverSupabase
          .from('questions')
          .select('id, question_text, updated_at')
          .eq('subject', '__SYSTEM_SYNC__')
          .eq('chapter', 'STUDENT_ENROLLMENTS_EMAIL')
          .eq('topic', safeEmail)
          .limit(1);

        if (!error && data && data.length > 0) {
          try {
            const parsed = JSON.parse(data[0].question_text);
            if (parsed && parsed.studentName && parsed.rollNumber) {
              matchedStudent = parsed;
            }
          } catch {}
        }
      }

      if (matchedStudent) {
        return res.status(200).json({ success: true, student: matchedStudent });
      }

      return res.status(200).json({ success: false, student: null });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err?.message || 'Server error' });
    }
  }

  // 2. POST: Upsert student profile with strict roll number lock
  if (req.method === 'POST') {
    try {
      const student = req.body?.student || req.body;
      if (!student || !student.studentName || !student.studentPhone) {
        return res.status(400).json({ success: false, error: 'studentName and studentPhone are required.' });
      }

      const phone = cleanPhoneNumber(student.studentPhone);
      if (!phone || phone.length !== 10) {
        return res.status(400).json({ success: false, error: 'A valid 10-digit mobile number is required.' });
      }

      // 2a. Check if a pre-existing student record exists for this phone
      // IMPORTANT: If an existing roll number was previously generated or confirmed, WE LOCK IT!
      let lockedRollNumber = student.rollNumber;
      try {
        const { data: existingRows } = await serverSupabase
          .from('questions')
          .select('question_text')
          .eq('subject', '__SYSTEM_SYNC__')
          .eq('chapter', 'STUDENT_ENROLLMENTS')
          .or(`topic.eq.${phone},id.eq.__STUDENT__${phone}`)
          .limit(3);

        if (existingRows && existingRows.length > 0) {
          for (const row of existingRows) {
            try {
              const existing = JSON.parse(row.question_text);
              if (existing && existing.rollNumber) {
                lockedRollNumber = existing.rollNumber;
                break;
              }
            } catch {}
          }
        }
      } catch {}

      // Fallback deterministic roll number if still missing
      if (!lockedRollNumber) {
        lockedRollNumber = `NCBT-${student.targetYear || '2027'}-${phone.slice(-6)}`;
      }

      const normalizedStudent = {
        ...student,
        studentPhone: phone,
        rollNumber: lockedRollNumber,
        updatedAt: new Date().toISOString()
      };

      const payloadJson = JSON.stringify(normalizedStudent);
      const rowId = `__STUDENT__${phone}`;

      // Upsert primary phone record
      const { error: upsertErr } = await serverSupabase.from('questions').upsert({
        id: rowId,
        subject: '__SYSTEM_SYNC__',
        chapter: 'STUDENT_ENROLLMENTS',
        topic: phone,
        difficulty: 'Student',
        question_text: payloadJson,
        options: [normalizedStudent.studentName, lockedRollNumber, normalizedStudent.email || ''],
        correct_answer: 0,
        explanation: `Student: ${normalizedStudent.studentName} | Phone: ${phone} | Roll: ${lockedRollNumber}`
      }, { onConflict: 'id' });

      if (upsertErr) {
        return res.status(500).json({ success: false, error: upsertErr.message });
      }

      // Index parent phone if provided
      if (normalizedStudent.parentPhone) {
        const parentPhone = cleanPhoneNumber(normalizedStudent.parentPhone);
        if (parentPhone && parentPhone.length === 10 && parentPhone !== phone) {
          await serverSupabase.from('questions').upsert({
            id: `__STUDENT_PARENT__${parentPhone}`,
            subject: '__SYSTEM_SYNC__',
            chapter: 'STUDENT_ENROLLMENTS',
            topic: parentPhone,
            difficulty: 'Student',
            question_text: payloadJson,
            options: [normalizedStudent.studentName, lockedRollNumber, phone],
            correct_answer: 0,
            explanation: `Parent Index: ${parentPhone} -> Student: ${phone}`
          }, { onConflict: 'id' }).catch(() => {});
        }
      }

      // Index email if provided
      if (normalizedStudent.email && normalizedStudent.email.includes('@')) {
        const safeEmail = normalizedStudent.email.toLowerCase().trim().replace(/[^a-z0-9@._-]/gi, '');
        await serverSupabase.from('questions').upsert({
          id: `__STUDENT_EMAIL__${safeEmail}`,
          subject: '__SYSTEM_SYNC__',
          chapter: 'STUDENT_ENROLLMENTS_EMAIL',
          topic: safeEmail,
          difficulty: 'Student',
          question_text: payloadJson,
          options: [normalizedStudent.studentName, lockedRollNumber, phone],
          correct_answer: 0,
          explanation: `Student Email Index: ${safeEmail}`
        }, { onConflict: 'id' }).catch(() => {});
      }

      return res.status(200).json({
        success: true,
        student: normalizedStudent,
        rollNumber: lockedRollNumber
      });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err?.message || 'Failed to sync student.' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
