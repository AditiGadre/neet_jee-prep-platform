import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    transaction
  } = req.body || {};

  if (!razorpay_payment_id) {
    return res.status(400).json({ success: false, error: 'Payment ID is required' });
  }

  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  // Signature verification if secret is configured and signature was passed
  if (keySecret && razorpay_order_id && razorpay_signature) {
    const generated_signature = crypto
      .createHmac('sha256', keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generated_signature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        verified: false,
        error: 'Invalid payment signature. Verification failed.'
      });
    }
  }

  // Persist record to Supabase questions table if full transaction data is included
  if (transaction) {
    try {
      const rowId = `__TXN__${razorpay_payment_id}`;
      const payloadJson = JSON.stringify(transaction);

      await serverSupabase.from('questions').upsert({
        id: rowId,
        subject: '__SYSTEM_SYNC__',
        chapter: 'PAYMENT_TRANSACTIONS',
        topic: transaction.studentPhone || '',
        difficulty: 'Transaction',
        question_text: payloadJson,
        options: [
          transaction.studentName || '',
          transaction.rollNumber || '',
          transaction.packageName || '',
          String(transaction.amountPaid || 0)
        ],
        correct_answer: transaction.amountPaid || 0,
        explanation: `Payment: ${razorpay_payment_id} | ${transaction.studentName} (₹${transaction.amountPaid})`
      }, { onConflict: 'id' });
    } catch (dbErr: any) {
      console.warn('Server Supabase payment logging notice:', dbErr.message);
    }
  }

  return res.status(200).json({
    success: true,
    verified: true,
    paymentId: razorpay_payment_id
  });
}
