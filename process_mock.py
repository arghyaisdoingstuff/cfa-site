import csv
import json
import re

csv_file = r"content\mocks\premium pack\Mock_Exam_1_CFA_Level_1.csv"
js_file = r"content\questions_generated.js"

# Read the CSV
questions = []
with open(csv_file, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        # Standardize keys
        mock_name = row.get('\ufeffMock Name', row.get('Mock Name', '')).strip()
        session = row.get('Session', '').strip()
        subject = row.get('Subject', '').strip()
        text = row.get('Question', '').strip()
        optA = row.get('Option A', '').strip()
        optB = row.get('Option B', '').strip()
        optC = row.get('Option C', '').strip()
        correct_ans = row.get('Correct Answer', '').strip().upper()
        explanation = row.get('Explanation', '').strip()

        if not text:
            continue

        c_idx = 0
        if correct_ans in ['B', '2']: c_idx = 1
        if correct_ans in ['C', '3']: c_idx = 2

        q_obj = {
            "source": f"Mock: {mock_name}" if mock_name and not mock_name.startswith("Mock:") else mock_name,
            "subject": subject,
            "text": text,
            "options": [optA, optB, optC],
            "correctAnswer": c_idx
        }
        
        # In the new Mocks implementation, the app expects q.mockName and q.session
        # to correctly categorize it. Wait, the CSV ingestion adds them dynamically.
        # But for questions_generated.js (the static seed), we should just add mockName and session.
        if mock_name:
            q_obj['mockName'] = mock_name
        if session:
            try:
                q_obj['session'] = int(session)
            except:
                pass
                
        if explanation:
            q_obj['explanation'] = explanation
            
        questions.append(q_obj)

print(f"Parsed {len(questions)} questions from the mock CSV.")

# Read the existing JS file
with open(js_file, 'r', encoding='utf-8') as f:
    js_content = f.read()

# We need to parse the JSON array out of: const SAMPLE_QUESTIONS = [ ... ];
# Let's find the array content.
match = re.search(r'const SAMPLE_QUESTIONS = (\[.*?\]);', js_content, re.DOTALL)
if match:
    existing_json = match.group(1)
    existing_questions = json.loads(existing_json)
    
    # Append the new questions
    existing_questions.extend(questions)
    
    # Write it back
    new_json = json.dumps(existing_questions, indent=4)
    new_js_content = js_content[:match.start()] + f"const SAMPLE_QUESTIONS = {new_json};" + js_content[match.end():]
    
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(new_js_content)
    print(f"Successfully added them to {js_file}. Total questions now: {len(existing_questions)}")
else:
    print("Could not find SAMPLE_QUESTIONS array in JS file.")