with open('src/services/authoritativeCloudService.ts', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('async function insertSupabaseSystemRow')
if idx != -1:
    print(text[idx:idx+1500])
