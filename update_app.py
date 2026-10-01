import re

with open("app.js", "r", encoding="utf-8") as f:
    app = f.read()

# 1. Update routing metadata
app = app.replace(
    "dashboard: ['Dashboard',        'Track your performance across all subjects and sources'],",
    "dashboard: ['Dashboard',        'Track your performance across all subjects and sources'],\n            mocks:     ['Mock Exams',       'Simulate full exam conditions'],"
)

# 2. Update render() routing
app = app.replace(
    "if      (this.currentView === 'dashboard') await this.renderDashboard(c);",
    "if      (this.currentView === 'dashboard') await this.renderDashboard(c);\n        else if (this.currentView === 'mocks')     await this.renderMocks(c);"
)

# 3. Add renderMocks and startMock
mocks_methods = """
    renderMocks: async function(c) {
        const allQ = window._quizAllQ || await db.questions.toArray();
        const mockQs = allQ.filter(q => q.mockName);
        const mocks = [...new Set(mockQs.map(q => q.mockName))];
        
        let html = `<div class="max-w-4xl mx-auto space-y-4">`;
        if (mocks.length === 0) {
            html += `<div class="stat-card text-center py-10 text-slate-500">No mock exams found. Upload a CSV with a "Mock Name" column and a "Session" column (1 or 2).</div>`;
        }
        
        for (const mock of mocks) {
            const s1Count = mockQs.filter(q => q.mockName === mock && q.session === 1).length;
            const s2Count = mockQs.filter(q => q.mockName === mock && q.session === 2).length;
            
            html += `
            <div class="stat-card flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <h3 class="font-bold text-lg text-slate-800">${mock}</h3>
                    <p class="text-sm text-slate-500 mt-1">${s1Count+s2Count} Questions total</p>
                </div>
                <div class="flex flex-wrap gap-2">
                    ${s1Count > 0 ? `<button onclick="app.startMock('${mock.replace(/'/g, "\\'")}', 1)" class="px-4 py-2 bg-slate-800 text-white text-sm font-semibold rounded-xl hover:bg-slate-900 shadow-sm transition-all active:scale-95 whitespace-nowrap">Start Session 1 (${s1Count} Qs)</button>` : ''}
                    ${s2Count > 0 ? `<button onclick="app.startMock('${mock.replace(/'/g, "\\'")}', 2)" class="px-4 py-2 bg-slate-800 text-white text-sm font-semibold rounded-xl hover:bg-slate-900 shadow-sm transition-all active:scale-95 whitespace-nowrap">Start Session 2 (${s2Count} Qs)</button>` : ''}
                </div>
            </div>`;
        }
        c.innerHTML = html + `</div>`;
    },
    
    startMock: async function(mockName, session) {
        const allQ = window._quizAllQ || await db.questions.toArray();
        let q = allQ.filter(q => q.mockName === mockName && q.session === session);
        
        // Sort authentically by CFA Official Subject Order
        q.sort((a, b) => SUBJECT_LIST.indexOf(a.subject) - SUBJECT_LIST.indexOf(b.subject));
        
        this.quizMode = 'exam';
        this.isMock = true;
        this.quizQueue = q;
        this.quizIndex = 0;
        this.sessionCorrect = 0;
        this.sessionTotal = 0;
        this.examAnswers = new Array(this.quizQueue.length).fill(null);
        this.examConfidence = new Array(this.quizQueue.length).fill(null);
        
        // Hide sidebar on mobile if open
        if(window.innerWidth < 768) { const s = document.getElementById("sidebar"); const o = document.getElementById("mobile-overlay"); if(s && o) { s.classList.add("-translate-x-full"); o.classList.add("hidden"); } }
        
        await this.renderExamQuestion(document.getElementById('app-container'));
    },
"""
app = app.replace("    renderQuizSetup: async function(c) {", mocks_methods + "\n    renderQuizSetup: async function(c) {")

# 4. Hide Subject and LM during Mock
old_exam_header = """<div class="flex items-center gap-2 flex-wrap">
                                ${subjectPill(q.subject)}
                                ${q.lm?`<span class="text-xs text-slate-400">${q.lm}</span>`:''}
                            </div>
                            <div class="flex items-center gap-2">
                                ${sourcePill(q.source||'Unknown')}
                                <button id="flag-btn" onclick="app.toggleFlagCurrent()" class="flag-btn ${flagged?'flagged':''}">
                                    ?? ${flagged?'Flagged':'Flag'}
                                </button>
                            </div>"""
                            
new_exam_header = """<div class="flex items-center gap-2 flex-wrap">
                                ${this.isMock ? '<span class="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Mock Exam</span>' : subjectPill(q.subject)}
                                ${this.isMock ? '' : (q.lm?`<span class="text-xs text-slate-400">${q.lm}</span>`:'')}
                            </div>
                            <div class="flex items-center gap-2">
                                ${this.isMock ? '' : sourcePill(q.source||'Unknown')}
                                <button id="flag-btn" onclick="app.toggleFlagCurrent()" class="flag-btn ${flagged?'flagged':''}">
                                    ?? ${flagged?'Flagged':'Flag'}
                                </button>
                            </div>"""

app = app.replace(old_exam_header, new_exam_header)

# 5. Clear isMock in renderExamReview
app = app.replace(
    "    renderExamReview: async function(c) {",
    "    renderExamReview: async function(c) {\n        this.isMock = false;"
)

# 6. Update CSV parsing in handleCSVUpload
old_csv_push = """                        qs.push({
                            source: source || 'Imported CSV',
                            subject: subject || 'General',
                            lm: lm || 'Imported',
                            text: text,
                            options: [optA, optB, optC],
                            correctAnswer: correctIdx,
                            explanation: explanation
                        });"""

new_csv_push = """                        let mockName = getVal(['mock', 'mock name', 'mock_name']);
                        let sessionStr = getVal(['session']).toString();
                        let session = sessionStr.includes('2') ? 2 : (sessionStr.includes('1') ? 1 : null);
                        
                        qs.push({
                            source: source || 'Imported CSV',
                            subject: subject || 'General',
                            lm: lm || 'Imported',
                            text: text,
                            options: [optA, optB, optC],
                            correctAnswer: correctIdx,
                            explanation: explanation,
                            mockName: mockName || null,
                            session: session
                        });"""

app = app.replace(old_csv_push, new_csv_push)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(app)

print("Updated app.js")