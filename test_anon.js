import fetch from 'node-fetch';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://emfnqqxsyidicqxnxxxj.supabase.co';
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtZm5xcXhzeWlkaWNxeG54eHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODczMjk3OTcsImV4cCI6MjEwMjkwNTc5N30.L-yNwKM4F3hOHnjiYjrMm9H9r4xWRTNHPxTjf8yfObg';

const supabase = createClient(SUPABASE_URL, ANON_KEY);

async function test() {
  const { error } = await supabase.from('questions').upsert({
    id: '__TEST_ANON_INSERT__',
    subject: '__SYSTEM_SYNC__',
    chapter: 'TEST',
    topic: 'TEST',
    difficulty: 'TEST',
    question_text: 'TEST',
    options: ['TEST'],
    correct_answer: 0,
    explanation: 'TEST'
  });
  console.log('Anon Insert Error:', error ? error.message : 'SUCCESS');
}
test();
