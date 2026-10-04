import json
import os
import csv

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ts_file = os.path.join(base_dir, 'src', 'data', 'neetCutoffsData.ts')

with open(ts_file, 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('export const NEET_CUTOFFS_DATA')
arr_start = content.find('[{', start_idx)
arr_end = content.rfind('}]')

try:
    original_data = json.loads(content[arr_start:arr_end+2])
except Exception as e:
    print("Error parsing JSON:", e)
    exit(1)

print(f"Loaded {len(original_data)} original records.")

# Keep everything EXCEPT AIQ Round 1 and Round 2
filtered_data = [d for d in original_data if not (d.get('counselingType') == 'AIQ' and d.get('round') in ('Round 1', 'Round 2', 'Round 3'))]
print(f"Filtered to {len(filtered_data)} State CAP records.")

def normalize_category(cat, quota):
    c = cat.upper()
    if quota == 'Non-Resident Indian': return 'IQ'
    if 'PWD' in c: return 'PWD'
    if 'OPEN' in c or 'UR' in c: return 'OPEN'
    if 'OBC' in c: return 'OBC'
    if 'EWS' in c: return 'EWS'
    if 'SC' in c: return 'SC'
    if 'ST' in c: return 'ST'
    return c

input_csv = os.path.join(base_dir, 'seed_allotment.csv')
round2_csv = os.path.join(base_dir, 'round2_allotment.csv')

closing_ranks = {}
    
if os.path.exists(input_csv):
    with open(input_csv, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            try:
                rank = int(row['Rank'])
                institute = row['Allotted Institute']
                category = row['Alloted Category']
                course = row['Course']
                quota = row['Allotted Quota']
                
                if institute == '-' or not institute:
                    continue
                    
                norm_cat = normalize_category(category, quota)
                key = f'R1|{institute}|{course}|{norm_cat}|{quota}'
                
                if key not in closing_ranks:
                    closing_ranks[key] = {
                        'collegeName': institute.split(',')[0].strip(),
                        'rawName': institute,
                        'course': course,
                        'quota': quota,
                        'categoryGroup': norm_cat,
                        'isWomen': False,
                        'isPwD': 'PWD' in norm_cat or 'PwD' in row.get('Candidate Category', ''),
                        'isGovt': 'Government' in institute or 'Govt' in institute or 'AIIMS' in institute or 'JIPMER' in institute or 'All India' in quota,
                        'isIQ': quota == 'Non-Resident Indian',
                        'round': 'Round 1',
                        'year': '2026',
                        'closingAir': rank,
                        'openingAir': rank,
                        'counselingType': 'AIQ',
                        'state': 'All India',
                        'pdfSource': 'NEET-UG 2026 Allotment Dataset'
                    }
                else:
                    if rank > closing_ranks[key]['closingAir']: closing_ranks[key]['closingAir'] = rank
                    if rank < closing_ranks[key]['openingAir']: closing_ranks[key]['openingAir'] = rank
            except Exception:
                pass

if os.path.exists(round2_csv):
    with open(round2_csv, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            try:
                rank = int(row['Rank'])
                institute = row['R2 Allotted Institute']
                category = row['R2 Alloted Category']
                course = row['R2 Course']
                quota = row['R2 Allotted Quota']
                
                if institute == '-' or not institute:
                    continue
                    
                norm_cat = normalize_category(category, quota)
                key = f'R2|{institute}|{course}|{norm_cat}|{quota}'
                
                if key not in closing_ranks:
                    closing_ranks[key] = {
                        'collegeName': institute.split(',')[0].strip(),
                        'rawName': institute,
                        'course': course,
                        'quota': quota,
                        'categoryGroup': norm_cat,
                        'isWomen': False,
                        'isPwD': 'PWD' in norm_cat or 'PwD' in row.get('R2 Candidate Category', ''),
                        'isGovt': 'Government' in institute or 'Govt' in institute or 'AIIMS' in institute or 'JIPMER' in institute or 'All India' in quota,
                        'isIQ': quota == 'Non-Resident Indian',
                        'round': 'Round 2',
                        'year': '2026',
                        'closingAir': rank,
                        'openingAir': rank,
                        'counselingType': 'AIQ',
                        'state': 'All India',
                        'pdfSource': 'NEET-UG 2026 Allotment Dataset'
                    }
                else:
                    if rank > closing_ranks[key]['closingAir']: closing_ranks[key]['closingAir'] = rank
                    if rank < closing_ranks[key]['openingAir']: closing_ranks[key]['openingAir'] = rank
            except Exception:
                pass

new_aiq_data = list(closing_ranks.values())
for i, d in enumerate(new_aiq_data):
    d['collegeCode'] = f"AIQ-R12-{i}"
    
print(f"Generated {len(new_aiq_data)} new AIQ R1 & R2 records.")

combined = filtered_data + new_aiq_data

combined.sort(key=lambda x: x.get('closingAir', 9999999))

for i, d in enumerate(combined):
    d['id'] = i + 1

ts_content = '''// Autogenerated structured dataset combining:
// Official NEET-UG 2026 Allotment Dataset

export interface NeetCutoffEntry {
  id: number;
  collegeCode: string;
  collegeName: string;
  rawName: string;
  course: 'MBBS' | 'BDS' | 'B.Sc. Nursing';
  quota: string;
  categoryGroup: string;
  isWomen: boolean;
  isPwD: boolean;
  isGovt: boolean;
  isIQ: boolean;
  round: string;
  year: string;
  closingAir: number;
  pageNumber?: number;
  pdfSource: string;
  counselingType?: 'AIQ' | 'STATE';
  state?: string;
  openingAir?: number;
}

export const NEET_CUTOFFS_DATA: NeetCutoffEntry[] = ''' + json.dumps(combined, separators=(',', ':')) + ''';
'''
with open(ts_file, 'w', encoding='utf-8') as f:
    f.write(ts_content)
    
print(f"Success! Wrote {len(combined)} total records.")
