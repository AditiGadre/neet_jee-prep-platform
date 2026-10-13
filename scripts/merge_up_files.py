import os
import csv
import json

def merge_up_files():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    source_dir = r"C:\Users\aditi\Downloads\mightymerge.io__fsgvyh7z\mightymerge.io__fsgvyh7z"
    
    r1_dest = os.path.join(base_dir, "UP_NEET_UG_2026_Merit_Round1.csv")
    r2_dest = os.path.join(base_dir, "UP_NEET_UG_2026_Merit_Round2.csv")
    
    public_data_dir = os.path.join(base_dir, "public", "data")
    os.makedirs(public_data_dir, exist_ok=True)
    
    print(f"Scanning split files from: {source_dir}")
    
    files = []
    for i in range(1, 66):
        fpath = os.path.join(source_dir, f"UP_NEET_UG_2026_Merit_Round1_and_Round2_{i}.csv")
        if os.path.exists(fpath):
            files.append(fpath)
        else:
            print(f"Warning: File missing: {fpath}")
            
    print(f"Total files located: {len(files)}")
    
    header = None
    r1_rows = []
    r2_rows = []
    
    for fpath in files:
        with open(fpath, "r", encoding="utf-8-sig", errors="ignore") as f:
            reader = csv.reader(f)
            h = next(reader)
            if header is None:
                header = h
            for row in reader:
                if not row or len(row) < 9:
                    continue
                round_val = row[0].strip()
                if round_val == "1":
                    r1_rows.append(row)
                elif round_val == "2":
                    r2_rows.append(row)
                else:
                    print(f"Unknown round value: {round_val}")

    print(f"Extracted Round 1 rows: {len(r1_rows)}")
    print(f"Extracted Round 2 rows: {len(r2_rows)}")
    
    # Write Round 1 CSV
    with open(r1_dest, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(header)
        writer.writerows(r1_rows)
    print(f"Wrote Round 1 CSV to {r1_dest}")
    
    # Write Round 2 CSV
    with open(r2_dest, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(header)
        writer.writerows(r2_rows)
    print(f"Wrote Round 2 CSV to {r2_dest}")
    
    # Also write to public/data for web accessibility
    with open(os.path.join(public_data_dir, "UP_NEET_UG_2026_Merit_Round1.csv"), "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(header)
        writer.writerows(r1_rows)
        
    with open(os.path.join(public_data_dir, "UP_NEET_UG_2026_Merit_Round2.csv"), "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(header)
        writer.writerows(r2_rows)
    
    # Also copy to Downloads workspace if present
    downloads_ws = r"c:\Users\aditi\Downloads\neet_jee-prep-platform"
    if os.path.exists(downloads_ws):
        with open(os.path.join(downloads_ws, "UP_NEET_UG_2026_Merit_Round1.csv"), "w", encoding="utf-8", newline="") as f:
            writer = csv.writer(f)
            writer.writerow(header)
            writer.writerows(r1_rows)
        with open(os.path.join(downloads_ws, "UP_NEET_UG_2026_Merit_Round2.csv"), "w", encoding="utf-8", newline="") as f:
            writer = csv.writer(f)
            writer.writerow(header)
            writer.writerows(r2_rows)
        print(f"Copied CSV files to Downloads workspace: {downloads_ws}")

    # Generate pre-indexed compact sample/lookup data for fast browser search
    def create_lookup_summary(rows):
        cat_counts = {}
        for r in rows:
            cat = r[5].strip()
            cat_counts[cat] = cat_counts.get(cat, 0) + 1
            
        sorted_by_air = sorted(rows, key=lambda x: int(x[8]) if x[8].isdigit() else 9999999)
        
        cat_rank_tracker = {}
        indexed_points = []
        
        for idx, row in enumerate(sorted_by_air):
            cat = row[5].strip()
            cat_rank_tracker[cat] = cat_rank_tracker.get(cat, 0) + 1
            cur_cat_rank = cat_rank_tracker[cat]
            
            # Keep fine-grained samples for interpolation and nearby lookup: every 25th row + top/bottom bounds
            if idx < 150 or idx >= len(sorted_by_air) - 150 or idx % 25 == 0:
                indexed_points.append({
                    "sr": int(row[1]),
                    "roll": row[2],
                    "name": row[3],
                    "father": row[4],
                    "cat": row[5],
                    "sub": row[6],
                    "marks": int(row[7]) if row[7].isdigit() else 0,
                    "air": int(row[8]) if row[8].isdigit() else 0,
                    "catRank": cur_cat_rank,
                    "page": int(row[9]) if row[9].isdigit() else 0
                })
                
        return {
            "totalCandidates": len(rows),
            "categoryCounts": cat_counts,
            "minScore": int(sorted_by_air[-1][7]) if sorted_by_air[-1][7].isdigit() else 0,
            "maxScore": int(sorted_by_air[0][7]) if sorted_by_air[0][7].isdigit() else 0,
            "samples": indexed_points
        }

    r1_summary = create_lookup_summary(r1_rows)
    r2_summary = create_lookup_summary(r2_rows)
    
    with open(os.path.join(public_data_dir, "up_merit_round1_summary.json"), "w", encoding="utf-8") as f:
        json.dump(r1_summary, f, separators=(",", ":"))
    print("Wrote public/data/up_merit_round1_summary.json")

    with open(os.path.join(public_data_dir, "up_merit_round2_summary.json"), "w", encoding="utf-8") as f:
        json.dump(r2_summary, f, separators=(",", ":"))
    print("Wrote public/data/up_merit_round2_summary.json")

    ts_content = f"""// Autogenerated UP Merit Summary for instant offline calculation
export interface UpMeritCandidate {{
  sr: number;
  roll: string;
  name: string;
  father: string;
  cat: string;
  sub: string;
  marks: number;
  air: number;
  catRank: number;
  page: number;
}}

export interface UpRoundSummary {{
  totalCandidates: number;
  categoryCounts: Record<string, number>;
  minScore: number;
  maxScore: number;
  samples: UpMeritCandidate[];
}}

export const UP_MERIT_R1_SUMMARY: UpRoundSummary = {json.dumps(r1_summary, separators=(",", ":"))};

export const UP_MERIT_R2_SUMMARY: UpRoundSummary = {json.dumps(r2_summary, separators=(",", ":"))};
"""
    ts_dest = os.path.join(base_dir, "src", "data", "upMeritSummary.ts")
    with open(ts_dest, "w", encoding="utf-8") as f:
        f.write(ts_content)
    print(f"Wrote src/data/upMeritSummary.ts ({len(ts_content)} bytes)")
    
    # Also copy to downloads workspace src/data
    downloads_ts = os.path.join(downloads_ws, "src", "data", "upMeritSummary.ts")
    if os.path.exists(os.path.dirname(downloads_ts)):
        with open(downloads_ts, "w", encoding="utf-8") as f:
            f.write(ts_content)
        print(f"Copied to {downloads_ts}")

if __name__ == "__main__":
    merge_up_files()
