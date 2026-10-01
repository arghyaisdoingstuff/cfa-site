import re

with open("app.js", "r", encoding="utf-8") as f:
    app = f.read()

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

app = app.replace("    renderQuizSetup: async function (c) {", mocks_methods + "\n    renderQuizSetup: async function (c) {")

with open("app.js", "w", encoding="utf-8") as f:
    f.write(app)

print("Injected methods")