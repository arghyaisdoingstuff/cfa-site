import re

with open("app.js", "r", encoding="utf-8") as f:
    app = f.read()

start_str = "    seedSampleQuestions: async function () {"
end_str = "    },"

start_idx = app.find(start_str)
end_idx = app.find(end_str, start_idx) + len(end_str)

new_seed = """    seedSampleQuestions: async function () {
        const SEED_VERSION = 'v32-smart-sync';
        const seeded = localStorage.getItem('cfaSeedVersion');
        
        if (seeded !== SEED_VERSION) {
            const existingQ = await db.questions.toArray();
            
            if (existingQ.length === 0) {
                await db.questions.bulkAdd(SAMPLE_QUESTIONS);
            } else {
                const existingMap = new Map();
                for (const q of existingQ) existingMap.set(q.text, q);
                
                const toAdd = [];
                const toUpdate = [];
                
                for (const sq of SAMPLE_QUESTIONS) {
                    const eq = existingMap.get(sq.text);
                    if (!eq) {
                        toAdd.push(sq);
                    } else {
                        let needsUpdate = false;
                        if (eq.explanation !== sq.explanation || 
                            eq.correctAnswer !== sq.correctAnswer ||
                            eq.lm !== sq.lm ||
                            eq.subject !== sq.subject ||
                            JSON.stringify(eq.options) !== JSON.stringify(sq.options)) {
                            needsUpdate = true;
                        }
                        if (needsUpdate) {
                            toUpdate.push({
                                ...eq,
                                explanation: sq.explanation,
                                correctAnswer: sq.correctAnswer,
                                lm: sq.lm,
                                subject: sq.subject,
                                options: sq.options,
                                source: sq.source
                            });
                        }
                    }
                }
                
                if (toAdd.length > 0) await db.questions.bulkAdd(toAdd);
                if (toUpdate.length > 0) await db.questions.bulkPut(toUpdate);
            }
            
            localStorage.setItem('cfaSeedVersion', SEED_VERSION);
        } else if ((await db.questions.count()) === 0) {
            await db.questions.bulkAdd(SAMPLE_QUESTIONS);
        }
    },"""

if start_idx != -1:
    app = app[:start_idx] + new_seed + app[end_idx:]
    with open("app.js", "w", encoding="utf-8") as f:
        f.write(app)
    
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()
    html = re.sub(r'\?v=\d+', '?v=32', html)
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(html)
    print("Replaced!")
else:
    print("Not found")