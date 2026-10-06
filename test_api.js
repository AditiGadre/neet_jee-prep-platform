import fetch from 'node-fetch';
async function test() {
  const payload = {
    paper: {
      paperCode: 'SUNDAY_11',
      revision: 999,
      questions: [{id: '1', questionText: 'test', options: ['a','b','c','d'], correctAnswer: 0, explanation: 'test'}]
    },
    expectedRevision: 999,
    adminUser: 'Institutional Master Admin'
  };
  const res = await fetch('https://neetcbtexam.com/api/sunday-paper', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  console.log('Status:', res.status);
  console.log('Body:', await res.text());
}
test();
