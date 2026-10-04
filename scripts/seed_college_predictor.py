import csv
import json
import os

def generate_predictor_data(input_csv, output_json):
    closing_ranks = {}
    
    if not os.path.exists(input_csv):
        print(f"Error: {input_csv} not found.")
        return

    with open(input_csv, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            try:
                rank = int(row['Rank'])
                institute = row['Allotted Institute']
                category = row['Alloted Category']
                course = row['Course']
                quota = row['Allotted Quota']
                
                key = f"{institute}|{course}|{category}|{quota}"
                
                if key not in closing_ranks:
                    closing_ranks[key] = {
                        "institute": institute,
                        "course": course,
                        "category": category,
                        "quota": quota,
                        "closing_rank": rank,
                        "opening_rank": rank
                    }
                else:
                    if rank > closing_ranks[key]["closing_rank"]:
                        closing_ranks[key]["closing_rank"] = rank
                    if rank < closing_ranks[key]["opening_rank"]:
                        closing_ranks[key]["opening_rank"] = rank
            except Exception as e:
                pass
                
    result = list(closing_ranks.values())
    
    # Sort by closing rank (hardest to get into first)
    result.sort(key=lambda x: x['closing_rank'])
    
    with open(output_json, 'w', encoding='utf-8') as f:
        json.dump(result, f, indent=4)
        
    print(f"Successfully generated {output_json} with {len(result)} college quotas.")

if __name__ == "__main__":
    # Adjust paths if running from root
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    input_file = os.path.join(base_dir, 'seed_allotment.csv')
    output_file = os.path.join(base_dir, 'public', 'data', 'closing_ranks.json')
    
    generate_predictor_data(input_file, output_file)
