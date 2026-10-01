import re

with open("app.js", "r", encoding="utf-8") as f:
    app = f.read()

old_seed = r"""seedSampleQuestions:\s*async\s*function\s*\(\)\s*\{\s*// Version key — bump this whenever SAMPLE_QUESTIONS changes to force a reseed\s*const SEED_VERSION = '.*?';\s*const seeded = localStorage\.getItem\('cfaSeedVersion'\);\s*if \(seeded !== SEED_VERSION\) \{\s*// Clear ALL existing questions and attempts so we start fresh with the new set\s*await db\.questions\.clear\(\);\s*await db\.attempts\.clear\(\);\s*localStorage\.removeItem\('flaggedQuestions'\);\s*await db\.questions\.bulkAdd\(SAMPLE_QUESTIONS\);\s*localStorage\.setItem\('cfaSeedVersion', SEED_VERSION\);\s*\}\s*else\s*if\s*\(\(await db\.questions\.count\(\)\)\s*===\s*0\)\s*\{\s*// DB was cleared manually - re-seed without wiping attempts\s*await db\.questions\.bulkAdd\(SAMPLE_QUESTIONS\);\s*\}\s*\}"""

new_seed = """seedSampleQuestions: async function () {
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
    }"""

if not re.search(old_seed, app):
    print("Could not find seedSampleQuestions")
else:
    app = re.sub(old_seed, new_seed, app)
    with open("app.js", "w", encoding="utf-8") as f:
        f.write(app)
    
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()
    html = re.sub(r'\?v=\d+', '?v=32', html)
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(html)
        
    print("Updated seedSampleQuestions and index.html")