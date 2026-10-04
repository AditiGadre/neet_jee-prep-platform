import csv
import json
import os

def normalize_category(cat, quota):
    c = cat.upper()
    if quota == 'Non-Resident Indian':
        return 'IQ'
    if 'PWD' in c: return 'PWD'
    if 'OPEN' in c or 'UR' in c: return 'OPEN'
    if 'OBC' in c: return 'OBC'
    if 'EWS' in c: return 'EWS'
    if 'SC' in c: return 'SC'
    if 'ST' in c: return 'ST'
    return c

def generate():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    input_csv = os.path.join(base_dir, 'seed_allotment.csv')
    round2_csv = os.path.join(base_dir, 'round2_allotment.csv')
    output_ts = os.path.join(base_dir, 'src', 'data', 'neetCutoffsData.ts')
    
    closing_ranks = {}
    
    # Process Round 1 (seed_allotment)
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
                            'collegeCode': f'AIQ-R1-{len(closing_ranks)}',
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

    # Process Round 2
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
                            'collegeCode': f'AIQ-R2-{len(closing_ranks)}',
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

    result = list(closing_ranks.values())
    result.sort(key=lambda x: x['closingAir'])
    
    for i, res in enumerate(result):
        res['id'] = i + 1
        
    ts_content = '''// Autogenerated structured dataset combining:
// Official NEET-UG AIQ 2026 Allotment Dataset (Round 1 & 2)

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

export const NEET_CUTOFFS_DATA: NeetCutoffEntry[] = ''' + json.dumps(result, indent=2) + ''';
'''
    with open(output_ts, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print(f'Done. Wrote {len(result)} records.')

if __name__ == "__main__":
    generate()
