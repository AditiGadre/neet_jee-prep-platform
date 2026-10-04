import os

filepath = 'src/services/authoritativeCloudService.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

new_functions = '''
// Add generic helper for student unlock requests
export async function syncUnlockRequestsToCloud(requests: any[]): Promise<boolean> {
  if (!supabase) return false;
  try {
    const payloadJson = JSON.stringify(requests);
    const now = Date.now();
    const { error } = await supabase.from('questions').insert([{
      id: '__UNLOCK_REQUESTS__' + now + '_' + Math.random().toString(36).slice(2, 6),
      subject: '__SYSTEM_SYNC__',
      chapter: 'UNLOCK_REQUESTS',
      topic: 'GLOBAL',
      difficulty: 'System',
      question_text: payloadJson,
      options: ['UNLOCK_REQUESTS_V1'],
      correct_answer: 0,
      explanation: 'Authoritative Unlock Requests'
    }]);
    return !error;
  } catch (e) {
    return false;
  }
}

export async function fetchUnlockRequestsFromCloud(): Promise<any[] | null> {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from('questions')
      .select('question_text')
      .eq('subject', '__SYSTEM_SYNC__')
      .eq('chapter', 'UNLOCK_REQUESTS')
      .eq('topic', 'GLOBAL')
      .order('created_at', { ascending: false })
      .limit(1);

    if (error || !data || data.length === 0) return null;
    return JSON.parse(data[0].question_text);
  } catch {
    return null;
  }
}
'''

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content + '\n' + new_functions)
