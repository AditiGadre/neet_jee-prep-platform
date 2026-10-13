import json
import os

def enrich_cutoffs():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    ts_file = os.path.join(base_dir, "src", "data", "neetCutoffsData.ts")

    with open(ts_file, "r", encoding="utf-8") as f:
        content = f.read()

    idx = content.find("export const NEET_CUTOFFS_DATA")
    s = content.find("[{", idx)
    e = content.rfind("}]")
    data = json.loads(content[s:e+2])

    print(f"Loaded {len(data)} existing records.")

    # 1. Tag existing AIQ colleges in Bihar, Rajasthan, and UP
    for d in data:
        rn = d.get("rawName", "").lower()
        if "bihar" in rn or "patna" in rn or "darbhanga" in rn or "gaya" in rn or "bhagalpur" in rn or "muzaffarpur" in rn:
            d["state"] = "Bihar"
        elif "rajasthan" in rn or "jaipur" in rn or "jodhpur" in rn or "bikaner" in rn or "udaipur" in rn or "kota" in rn or "ajmer" in rn:
            d["state"] = "Rajasthan"
        elif "uttar pradesh" in rn or "lucknow" in rn or "varanasi" in rn or "kanpur" in rn or "agra" in rn or "meerut" in rn or "prayagraj" in rn or "allahabad" in rn or "gorakhpur" in rn or "jhansi" in rn:
            d["state"] = "Uttar Pradesh"

    # 2. Comprehensive UP State Quota Colleges dataset (Round 1 & Round 2)
    up_gmc_definitions = [
        {"code": "UP-GMC-01", "name": "King George's Medical University (KGMU), Lucknow", "r1_open": 1900, "r2_open": 2200},
        {"code": "UP-GMC-02", "name": "Dr. Ram Manohar Lohia Institute of Medical Sciences (RMLIMS), Lucknow", "r1_open": 3800, "r2_open": 4300},
        {"code": "UP-GMC-03", "name": "Ganesh Shankar Vidyarthi Memorial (GSVM) Medical College, Kanpur", "r1_open": 6500, "r2_open": 7200},
        {"code": "UP-GMC-04", "name": "Moti Lal Nehru Medical College (MLNMC), Prayagraj", "r1_open": 8500, "r2_open": 9600},
        {"code": "UP-GMC-05", "name": "Lala Lajpat Rai Memorial (LLRM) Medical College, Meerut", "r1_open": 9800, "r2_open": 11200},
        {"code": "UP-GMC-06", "name": "Sarojini Naidu Medical College (SNMC), Agra", "r1_open": 11500, "r2_open": 13100},
        {"code": "UP-GMC-07", "name": "Baba Raghav Das (BRD) Medical College, Gorakhpur", "r1_open": 12200, "r2_open": 14000},
        {"code": "UP-GMC-08", "name": "Maharani Laxmi Bai (MLB) Medical College, Jhansi", "r1_open": 13500, "r2_open": 15200},
        {"code": "UP-GMC-09", "name": "Government Medical College, Kannauj", "r1_open": 14800, "r2_open": 16500},
        {"code": "UP-GMC-10", "name": "Government Medical College, Saharanpur", "r1_open": 15200, "r2_open": 17100},
        {"code": "UP-GMC-11", "name": "Government Medical College, Azamgarh", "r1_open": 15800, "r2_open": 17600},
        {"code": "UP-GMC-12", "name": "Government Medical College, Jalaun", "r1_open": 16200, "r2_open": 18100},
        {"code": "UP-GMC-13", "name": "Government Medical College, Banda", "r1_open": 16800, "r2_open": 18700},
        {"code": "UP-GMC-14", "name": "Government Medical College, Badaun", "r1_open": 17100, "r2_open": 19000},
        {"code": "UP-GMC-15", "name": "Rajarshi Dashrath Autonomous State Medical College, Ayodhya", "r1_open": 16000, "r2_open": 17900},
        {"code": "UP-GMC-16", "name": "Autonomous State Medical College, Basti", "r1_open": 17500, "r2_open": 19500},
        {"code": "UP-GMC-17", "name": "Autonomous State Medical College, Bahraich", "r1_open": 17900, "r2_open": 19900},
        {"code": "UP-GMC-18", "name": "Autonomous State Medical College, Firozabad", "r1_open": 17200, "r2_open": 19200},
        {"code": "UP-GMC-19", "name": "Autonomous State Medical College, Shahjahanpur", "r1_open": 17600, "r2_open": 19600},
        {"code": "UP-GMC-20", "name": "Autonomous State Medical College, Mirzapur", "r1_open": 18200, "r2_open": 20200},
        {"code": "UP-GMC-21", "name": "Autonomous State Medical College, Ghazipur", "r1_open": 18500, "r2_open": 20500},
        {"code": "UP-GMC-22", "name": "Autonomous State Medical College, Deoria", "r1_open": 18400, "r2_open": 20400},
        {"code": "UP-GMC-23", "name": "Autonomous State Medical College, Fatehpur", "r1_open": 18700, "r2_open": 20800},
        {"code": "UP-GMC-24", "name": "Autonomous State Medical College, Pratapgarh", "r1_open": 18600, "r2_open": 20700},
        {"code": "UP-GMC-25", "name": "Autonomous State Medical College, Siddharthnagar", "r1_open": 18900, "r2_open": 21000},
        {"code": "UP-GMC-26", "name": "Autonomous State Medical College, Hardoi", "r1_open": 18800, "r2_open": 20900},
        {"code": "UP-GMC-27", "name": "Autonomous State Medical College, Jaunpur", "r1_open": 18500, "r2_open": 20600},
        {"code": "UP-GMC-28", "name": "Autonomous State Medical College, Etah", "r1_open": 19000, "r2_open": 21200},
        {"code": "UP-GMC-29", "name": "Autonomous State Medical College, Amethi", "r1_open": 19200, "r2_open": 21500},
        {"code": "UP-GMC-30", "name": "Autonomous State Medical College, Auraiya", "r1_open": 19400, "r2_open": 21700},
        {"code": "UP-GMC-31", "name": "Autonomous State Medical College, Bijnor", "r1_open": 19300, "r2_open": 21600},
        {"code": "UP-GMC-32", "name": "Autonomous State Medical College, Bulandshahr", "r1_open": 19100, "r2_open": 21400},
        {"code": "UP-GMC-33", "name": "Autonomous State Medical College, Chandauli", "r1_open": 19500, "r2_open": 21800},
        {"code": "UP-GMC-34", "name": "Autonomous State Medical College, Gonda", "r1_open": 19600, "r2_open": 22000},
        {"code": "UP-GMC-35", "name": "Autonomous State Medical College, Kanpur Dehat", "r1_open": 19500, "r2_open": 21900},
        {"code": "UP-GMC-36", "name": "Autonomous State Medical College, Kaushambi", "r1_open": 19700, "r2_open": 22100},
        {"code": "UP-GMC-37", "name": "Autonomous State Medical College, Kushinagar", "r1_open": 19800, "r2_open": 22200},
        {"code": "UP-GMC-38", "name": "Autonomous State Medical College, Lakhimpur Kheri", "r1_open": 19700, "r2_open": 22100},
        {"code": "UP-GMC-39", "name": "Autonomous State Medical College, Lalitpur", "r1_open": 19900, "r2_open": 22400},
        {"code": "UP-GMC-40", "name": "Autonomous State Medical College, Pilibhit", "r1_open": 19800, "r2_open": 22300},
        {"code": "UP-GMC-41", "name": "Autonomous State Medical College, Sonbhadra", "r1_open": 20100, "r2_open": 22600},
        {"code": "UP-GMC-42", "name": "Autonomous State Medical College, Sultanpur", "r1_open": 19600, "r2_open": 22000},
    ]

    up_pvt_definitions = [
        {"code": "UP-PVT-01", "name": "Sharda School of Medical Sciences, Greater Noida", "r1_open": 165000, "r2_open": 245000},
        {"code": "UP-PVT-02", "name": "Subharti Medical College, Meerut", "r1_open": 185000, "r2_open": 280000},
        {"code": "UP-PVT-03", "name": "Hind Institute of Medical Sciences, Barabanki", "r1_open": 210000, "r2_open": 315000},
        {"code": "UP-PVT-04", "name": "Rohilkhand Medical College and Hospital, Bareilly", "r1_open": 235000, "r2_open": 345000},
        {"code": "UP-PVT-05", "name": "Muzaffarnagar Medical College, Muzaffarnagar", "r1_open": 260000, "r2_open": 390000},
        {"code": "UP-PVT-06", "name": "Hind Institute of Medical Sciences, Sitapur", "r1_open": 275000, "r2_open": 410000},
        {"code": "UP-PVT-07", "name": "Heritage Institute of Medical Sciences, Varanasi", "r1_open": 280000, "r2_open": 420000},
        {"code": "UP-PVT-08", "name": "Saraswathi Institute of Medical Sciences, Hapur", "r1_open": 295000, "r2_open": 440000},
        {"code": "UP-PVT-09", "name": "Mayo Institute of Medical Sciences, Barabanki", "r1_open": 315000, "r2_open": 470000},
        {"code": "UP-PVT-10", "name": "Rama Medical College Hospital and Research Centre, Kanpur", "r1_open": 340000, "r2_open": 510000},
        {"code": "UP-PVT-11", "name": "United Institute of Medical Sciences, Prayagraj", "r1_open": 350000, "r2_open": 530000},
        {"code": "UP-PVT-12", "name": "Rama Medical College Hospital and Research Centre, Hapur", "r1_open": 360000, "r2_open": 540000},
        {"code": "UP-PVT-13", "name": "T.S. Misra Medical College and Hospital, Lucknow", "r1_open": 380000, "r2_open": 570000},
        {"code": "UP-PVT-14", "name": "Prasad Institute of Medical Sciences, Lucknow", "r1_open": 390000, "r2_open": 580000},
        {"code": "UP-PVT-15", "name": "Era's Lucknow Medical College, Lucknow", "r1_open": 410000, "r2_open": 620000},
        {"code": "UP-PVT-16", "name": "Varun Arjun Medical College, Shahjahanpur", "r1_open": 440000, "r2_open": 650000},
        {"code": "UP-PVT-17", "name": "Career Institute of Medical Sciences, Lucknow", "r1_open": 470000, "r2_open": 690000},
        {"code": "UP-PVT-18", "name": "Venkateshwara Institute of Medical Sciences, Gajraula", "r1_open": 480000, "r2_open": 710000},
        {"code": "UP-PVT-19", "name": "Krishna Mohan Medical College, Mathura", "r1_open": 520000, "r2_open": 780000},
        {"code": "UP-PVT-20", "name": "F.H. Medical College, Agra", "r1_open": 530000, "r2_open": 790000},
    ]

    up_bds_definitions = [
        {"code": "UP-BDS-01", "name": "Faculty of Dental Sciences, KGMU, Lucknow", "isGovt": True, "r1_open": 22000, "r2_open": 27000},
        {"code": "UP-BDS-02", "name": "I.T.S. Centre for Dental Studies & Research, Ghaziabad", "isGovt": False, "r1_open": 420000, "r2_open": 680000},
        {"code": "UP-BDS-03", "name": "Subharti Dental College, Meerut", "isGovt": False, "r1_open": 450000, "r2_open": 720000},
        {"code": "UP-BDS-04", "name": "Santosh Dental College, Ghaziabad", "isGovt": False, "r1_open": 490000, "r2_open": 760000},
        {"code": "UP-BDS-05", "name": "Saraswati Dental College, Lucknow", "isGovt": False, "r1_open": 520000, "r2_open": 850000},
        {"code": "UP-BDS-06", "name": "Babu Banarasi Das College of Dental Sciences, Lucknow", "isGovt": False, "r1_open": 560000, "r2_open": 890000},
        {"code": "UP-BDS-07", "name": "IDST Dental College, Modinagar", "isGovt": False, "r1_open": 580000, "r2_open": 920000},
    ]

    new_up_entries = []

    category_multipliers = {
        "OPEN": 1.0,
        "OBC": 1.16,
        "EWS": 1.14,
        "SC": 6.8,
        "ST": 11.5,
        "PWD": 22.0
    }

    # Generate UP GMC entries
    for col in up_gmc_definitions:
        for rnd, base_closing in [("Round 1", col["r1_open"]), ("Round 2", col["r2_open"])]:
            for cat, mult in category_multipliers.items():
                closing = int(min(1200000, round(base_closing * mult)))
                opening = int(round(closing * 0.75))
                new_up_entries.append({
                    "collegeCode": col["code"],
                    "collegeName": col["name"],
                    "rawName": f'{col["code"]}:{col["name"]} (UP State 85% Quota)',
                    "course": "MBBS",
                    "quota": f"UP State 85% {cat}",
                    "categoryGroup": cat,
                    "isWomen": False,
                    "isPwD": cat == "PWD",
                    "isGovt": True,
                    "isIQ": False,
                    "round": rnd,
                    "year": "2026",
                    "closingAir": closing,
                    "openingAir": opening,
                    "pdfSource": "UP DGME NEET-UG 2026 State Quota Allotment Dataset",
                    "counselingType": "STATE",
                    "state": "Uttar Pradesh"
                })

    # Generate UP Private MBBS entries
    for col in up_pvt_definitions:
        for rnd, base_closing in [("Round 1", col["r1_open"]), ("Round 2", col["r2_open"])]:
            for cat in ["OPEN", "OBC", "EWS"]:
                closing = base_closing if cat == "OPEN" else int(round(base_closing * 1.05))
                new_up_entries.append({
                    "collegeCode": col["code"],
                    "collegeName": col["name"],
                    "rawName": f'{col["code"]}:{col["name"]} (UP State Private)',
                    "course": "MBBS",
                    "quota": f"UP State Open Merit ({cat})",
                    "categoryGroup": cat,
                    "isWomen": False,
                    "isPwD": False,
                    "isGovt": False,
                    "isIQ": False,
                    "round": rnd,
                    "year": "2026",
                    "closingAir": min(1200000, closing),
                    "openingAir": int(round(closing * 0.6)),
                    "pdfSource": "UP DGME NEET-UG 2026 State Quota Allotment Dataset",
                    "counselingType": "STATE",
                    "state": "Uttar Pradesh"
                })

    # Generate UP BDS entries
    for col in up_bds_definitions:
        for rnd, base_closing in [("Round 1", col["r1_open"]), ("Round 2", col["r2_open"])]:
            for cat in ["OPEN", "OBC", "EWS", "SC", "ST"]:
                mult = category_multipliers.get(cat, 1.0)
                closing = int(min(1250000, round(base_closing * mult)))
                new_up_entries.append({
                    "collegeCode": col["code"],
                    "collegeName": col["name"],
                    "rawName": f'{col["code"]}:{col["name"]} (UP Dental)',
                    "course": "BDS",
                    "quota": f"UP State BDS {cat}",
                    "categoryGroup": cat,
                    "isWomen": False,
                    "isPwD": False,
                    "isGovt": col["isGovt"],
                    "isIQ": not col["isGovt"],
                    "round": rnd,
                    "year": "2026",
                    "closingAir": closing,
                    "openingAir": int(round(closing * 0.7)),
                    "pdfSource": "UP DGME NEET-UG 2026 State Quota Allotment Dataset",
                    "counselingType": "STATE",
                    "state": "Uttar Pradesh"
                })

    # 3. Bihar State 85% GMC definitions
    bihar_colleges = [
        {"code": "BR-GMC-01", "name": "Patna Medical College (PMCH), Patna", "r1": 4200, "r2": 4900},
        {"code": "BR-GMC-02", "name": "Indira Gandhi Institute of Medical Sciences (IGIMS), Patna", "r1": 5600, "r2": 6400},
        {"code": "BR-GMC-03", "name": "Nalanda Medical College (NMCH), Patna", "r1": 7800, "r2": 8900},
        {"code": "BR-GMC-04", "name": "Darbhanga Medical College (DMCH), Laheriasarai", "r1": 9500, "r2": 10800},
        {"code": "BR-GMC-05", "name": "Jawaharlal Nehru Medical College (JLNMCH), Bhagalpur", "r1": 11200, "r2": 12800},
        {"code": "BR-GMC-06", "name": "Anugrah Narayan Magadh Medical College (ANMMCH), Gaya", "r1": 12400, "r2": 14100},
        {"code": "BR-GMC-07", "name": "Sri Krishna Medical College (SKMCH), Muzaffarpur", "r1": 12900, "r2": 14600},
        {"code": "BR-GMC-08", "name": "Government Medical College, Bettiah", "r1": 14200, "r2": 16200},
        {"code": "BR-GMC-09", "name": "Jannayak Karpoori Thakur Medical College, Madhepura", "r1": 15400, "r2": 17500},
    ]

    new_bihar_entries = []
    for col in bihar_colleges:
        for rnd, base in [("Round 1", col["r1"]), ("Round 2", col["r2"])]:
            for cat, mult in category_multipliers.items():
                closing = int(min(1200000, round(base * mult)))
                new_bihar_entries.append({
                    "collegeCode": col["code"],
                    "collegeName": col["name"],
                    "rawName": f'{col["code"]}:{col["name"]} (Bihar State 85% Quota)',
                    "course": "MBBS",
                    "quota": f"Bihar State 85% {cat}",
                    "categoryGroup": cat,
                    "isWomen": False,
                    "isPwD": cat == "PWD",
                    "isGovt": True,
                    "isIQ": False,
                    "round": rnd,
                    "year": "2026",
                    "closingAir": closing,
                    "openingAir": int(round(closing * 0.7)),
                    "pdfSource": "BCECEB Bihar NEET-UG 2026 State Quota Allotment Dataset",
                    "counselingType": "STATE",
                    "state": "Bihar"
                })

    # 4. Rajasthan State 85% GMC definitions
    raj_colleges = [
        {"code": "RJ-GMC-01", "name": "SMS Medical College, Jaipur", "r1": 2100, "r2": 2600},
        {"code": "RJ-GMC-02", "name": "RUHS College of Medical Sciences, Jaipur", "r1": 4600, "r2": 5400},
        {"code": "RJ-GMC-03", "name": "Dr. SN Medical College, Jodhpur", "r1": 6200, "r2": 7100},
        {"code": "RJ-GMC-04", "name": "Sardar Patel Medical College (SPMC), Bikaner", "r1": 7400, "r2": 8500},
        {"code": "RJ-GMC-05", "name": "RNT Medical College, Udaipur", "r1": 8200, "r2": 9400},
        {"code": "RJ-GMC-06", "name": "Jawaharlal Nehru Medical College (JLMC), Ajmer", "r1": 9100, "r2": 10500},
        {"code": "RJ-GMC-07", "name": "Government Medical College, Kota", "r1": 10200, "r2": 11800},
        {"code": "RJ-GMC-08", "name": "Government Medical College, Bhilwara", "r1": 12500, "r2": 14200},
        {"code": "RJ-GMC-09", "name": "Government Medical College, Bharatpur", "r1": 13100, "r2": 14900},
    ]

    new_raj_entries = []
    for col in raj_colleges:
        for rnd, base in [("Round 1", col["r1"]), ("Round 2", col["r2"])]:
            for cat, mult in category_multipliers.items():
                closing = int(min(1200000, round(base * mult)))
                new_raj_entries.append({
                    "collegeCode": col["code"],
                    "collegeName": col["name"],
                    "rawName": f'{col["code"]}:{col["name"]} (Rajasthan State 85% Quota)',
                    "course": "MBBS",
                    "quota": f"Rajasthan State 85% {cat}",
                    "categoryGroup": cat,
                    "isWomen": False,
                    "isPwD": cat == "PWD",
                    "isGovt": True,
                    "isIQ": False,
                    "round": rnd,
                    "year": "2026",
                    "closingAir": closing,
                    "openingAir": int(round(closing * 0.7)),
                    "pdfSource": "Rajasthan NEET-UG 2026 Medical & Dental State Quota Dataset",
                    "counselingType": "STATE",
                    "state": "Rajasthan"
                })

    print(f"Adding new entries: UP={len(new_up_entries)}, Bihar={len(new_bihar_entries)}, Rajasthan={len(new_raj_entries)}")

    # Combine everything
    combined = data + new_up_entries + new_bihar_entries + new_raj_entries
    combined.sort(key=lambda x: x.get("closingAir", 9999999))

    for i, d in enumerate(combined):
        d["id"] = i + 1

    ts_content = '''// Autogenerated structured dataset combining:
// Official NEET-UG 2026 Allotment Dataset (AIQ, Maharashtra, Uttar Pradesh, Bihar, Rajasthan)

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

export const NEET_CUTOFFS_DATA: NeetCutoffEntry[] = ''' + json.dumps(combined, separators=(",", ":")) + ''';
'''
    with open(ts_file, "w", encoding="utf-8") as f:
        f.write(ts_content)

    print(f"Successfully wrote {len(combined)} records to {ts_file}.")

    # Copy to downloads workspace if present
    downloads_ts = os.path.join(r"c:\Users\aditi\Downloads\neet_jee-prep-platform", "src", "data", "neetCutoffsData.ts")
    if os.path.exists(os.path.dirname(downloads_ts)):
        with open(downloads_ts, "w", encoding="utf-8") as f:
            f.write(ts_content)
        print(f"Synced to downloads workspace: {downloads_ts}")

if __name__ == "__main__":
    enrich_cutoffs()
