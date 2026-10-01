// ─────────────────────────────────────────────────────────
// 2026 CFA Level I Curriculum
// ─────────────────────────────────────────────────────────

window.renderMarkdown = function(text) {
    if (!text) return '';
    let processed = text.replace(/(?:^[ \t]*\|.*\|[ \t]*\n?)+/gm, (match) => {
        const lines = match.trim().split('\n');
        const hasDelimiter = lines.some(line => /^[\s|:\-]+$/.test(line) && line.includes('-'));
        if (hasDelimiter) return match;
        
        let maxCols = 0;
        lines.forEach(line => {
            const cols = (line.match(/\|/g) || []).length - 1;
            if (cols > maxCols) maxCols = cols;
        });
        if (maxCols < 1) return match;
        
        const header = '|' + Array(maxCols).fill('   ').join('|') + '|';
        const delimiter = '|' + Array(maxCols).fill('---').join('|') + '|';
        
        return '\n' + header + '\n' + delimiter + '\n' + lines.join('\n') + '\n';
    });
    return typeof marked !== "undefined" ? marked.parse(processed) : processed;
};

const CFA_CURRICULUM = {
    'Ethical & Professional Standards': [
        'LM1 – Ethics and Trust in the Investment Profession',
        'LM2 – Code of Ethics and Standards of Professional Conduct',
        'LM3 – Guidance for Standards I–VII',
        'LM4 – Introduction to the Global Investment Performance Standards (GIPS)',
        'LM5 – Ethics Application',
    ],
    'Quantitative Methods': [
        'LM1 – Rates and Returns',
        'LM2 – Time Value of Money in Finance',
        'LM3 – Statistical Measures of Asset Returns',
        'LM4 – Probability Theory',
        'LM5 – Portfolio Mathematics',
        'LM6 – Simulation Methods',
        'LM7 – Estimation and Inference',
        'LM8 – Hypothesis Testing',
        'LM9 – Parametric and Non-Parametric Tests of Independence',
        'LM10 – Simple Linear Regression',
        'LM11 – Introduction to Big Data Techniques',
    ],
    'Economics': [
        'LM1 – The Firm and Market Structures',
        'LM2 – Understanding Business Cycles',
        'LM3 – Fiscal Policy',
        'LM4 – Monetary Policy',
        'LM5 – Introduction to Geopolitics',
        'LM6 – International Trade',
        'LM7 – Capital Flows and the FX Market',
        'LM8 – Exchange Rate Calculations',
    ],
    'Financial Statement Analysis': [
        'LM1 – Introduction to Financial Statement Analysis',
        'LM2 – Analyzing Income Statements',
        'LM3 – Analyzing Balance Sheets',
        'LM4 – Analyzing Statements of Cash Flows I',
        'LM5 – Analyzing Statements of Cash Flows II',
        'LM6 – Analysis of Inventories',
        'LM7 – Analysis of Long-Term Assets',
        'LM8 – Topics in Long-Term Liabilities and Equity',
        'LM9 – Analysis of Income Taxes',
        'LM10 – Financial Reporting Quality',
        'LM11 – Financial Analysis Techniques',
        'LM12 – Introduction to Financial Statement Modeling',
    ],
    'Corporate Issuers': [
        'LM1 – Organizational Forms, Corporate Issuer Features, and Ownership',
        'LM2 – Investors and Other Stakeholders',
        'LM3 – Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits',
        'LM4 – Working Capital and Liquidity',
        'LM5 – Capital Investments',
        'LM6 – Capital Structure',
        'LM7 – Business Models',
    ],
    'Equity Investments': [
        'LM1 – Market Organization and Structure',
        'LM2 – Security Market Indexes',
        'LM3 – Market Efficiency',
        'LM4 – Overview of Equity Securities',
        'LM5 – Introduction to Industry and Company Analysis',
        'LM6 – Equity Valuation: Concepts and Basic Tools',
    ],
    'Fixed Income': [
        'LM1 – Fixed-Income Instrument Features',
        'LM2 – Fixed-Income Cash Flows and Types',
        'LM3 – Fixed-Income Issuance and Trading',
        'LM4 – Fixed-Income Markets for Corporate Issuers',
        'LM5 – Fixed-Income Markets for Government Issuers',
        'LM6 – Fixed-Income Bond Valuation: Prices and Yields',
        'LM7 – Yield and Yield Spread Measures for Fixed-Rate Bonds',
        'LM8 – Yield and Yield Spread Measures for Floating-Rate Instruments',
        'LM9 – The Term Structure of Interest Rates: Spot, Par, and Forward Curves',
        'LM10 – Interest Rate Risk and Return',
        'LM11 – Credit Risk',
        'LM12 – Credit Analysis for Government Issuers',
        'LM13 – Credit Analysis for Corporate Issuers',
        'LM14 – Fixed-Income Securitization',
        'LM15 – Asset-Backed Security (ABS) Instrument and Market Features',
        'LM16 – Mortgage-Backed Security (MBS) Instrument and Market Features',
    ],
    'Derivatives': [
        'LM1 – Derivative Instrument and Derivative Market Features',
        'LM2 – Forward Commitment and Contingent Claim Features and Instruments',
        'LM3 – Derivative Benefits, Risks, and Issuer and Investor Uses',
        'LM4 – Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives',
        'LM5 – Pricing and Valuation of Forward Contracts',
        'LM6 – Pricing and Valuation of Futures Contracts',
        'LM7 – Pricing and Valuation of Interest Rates and Other Swaps',
        'LM8 – Pricing and Valuation of Options',
        'LM9 – Option Replication Using Put–Call Parity',
        'LM10 – Valuing a Derivative Using a One-Period Binomial Model',
        'LM11 – Black–Scholes–Merton Model',
        'LM12 – Greeks',
    ],
    'Alternative Investments': [
        'LM1 – Alternative Investment Features, Methods, and Structures',
        'LM2 – Alternative Investment Performance and Returns',
        'LM3 – Investments in Private Capital: Equity and Debt',
        'LM4 – Real Estate and Infrastructure',
        'LM5 – Natural Resources',
        'LM6 – Hedge Funds',
        'LM7 – Introduction to Digital Assets',
    ],
    'Portfolio Management': [
        'LM1 – Portfolio Risk and Return: Part I',
        'LM2 – Portfolio Risk and Return: Part II',
        'LM3 – Portfolio Management: An Overview',
        'LM4 – Basics of Portfolio Planning and Construction',
        'LM5 – The Behavioral Biases of Individuals',
        'LM6 – Introduction to Risk Management',
    ],
};
const SUBJECT_LIST = Object.keys(CFA_CURRICULUM);

// ─────────────────────────────────────────────────────────
// Database (v3 — adds confidence to attempts)
// ─────────────────────────────────────────────────────────
const db = new Dexie('CFAAppDB_v2');
db.version(1).stores({
    questions: '++id, subject, reading',
    attempts:  '++id, questionId, subject, reading, isCorrect, timeTaken, timestamp',
});
db.version(2).stores({
    questions: '++id, subject, lm, source',
    attempts:  '++id, questionId, subject, lm, source, isCorrect, timeTaken, timestamp',
}).upgrade(tx => tx.table('questions').toCollection().modify(q => {
    if (!q.source) q.source = 'Sample Questions';
    if (!q.lm)     q.lm    = q.reading || '';
}));
db.version(3).stores({
    questions: '++id, subject, lm, source',
    attempts:  '++id, questionId, subject, lm, source, isCorrect, timeTaken, confidence, timestamp',
});

// ─────────────────────────────────────────────────────────
// Sample Questions
// ─────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────
// Colours
// ─────────────────────────────────────────────────────────
const SUBJECT_COLORS = {
    'Ethical & Professional Standards': { bg:'#fffbeb', text:'#92400e', border:'#fde68a', chart:'#f59e0b' },
    'Quantitative Methods':             { bg:'#eff6ff', text:'#1e40af', border:'#bfdbfe', chart:'#3b82f6' },
    'Economics':                        { bg:'#f0fdf4', text:'#166534', border:'#bbf7d0', chart:'#22c55e' },
    'Financial Statement Analysis':     { bg:'#fdf4ff', text:'#6b21a8', border:'#e9d5ff', chart:'#a855f7' },
    'Corporate Issuers':                { bg:'#fff7ed', text:'#9a3412', border:'#fed7aa', chart:'#f97316' },
    'Equity Investments':               { bg:'#f0fdfa', text:'#134e4a', border:'#99f6e4', chart:'#14b8a6' },
    'Fixed Income':                     { bg:'#fef2f2', text:'#991b1b', border:'#fecaca', chart:'#ef4444' },
    'Derivatives':                      { bg:'#f5f3ff', text:'#4c1d95', border:'#ddd6fe', chart:'#8b5cf6' },
    'Alternative Investments':          { bg:'#fefce8', text:'#713f12', border:'#fef08a', chart:'#eab308' },
    'Portfolio Management':             { bg:'#f0f9ff', text:'#0c4a6e', border:'#bae6fd', chart:'#0ea5e9' },
};

function subjectPill(subject) {
    const c = SUBJECT_COLORS[subject] || { bg:'#f1f5f9', text:'#475569', border:'#cbd5e1' };
    return `<span class="subject-pill" style="background:${c.bg};color:${c.text};border:1px solid ${c.border};">${subject}</span>`;
}
function sourcePill(source) {
    return `<span class="subject-pill" style="background:#1e293b;color:#94a3b8;border:1px solid #334155;">${source}</span>`;
}
function subjectChartColor(s) { return (SUBJECT_COLORS[s] || {}).chart || '#64748b'; }

// ─────────────────────────────────────────────────────────
// Toast
// ─────────────────────────────────────────────────────────
let _toastTimer;
function showToast(msg, type = 'success') {
    let t = document.getElementById('toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; t.className = `show ${type}`;
    clearTimeout(_toastTimer);
    _toastTimer = setTimeout(() => { t.className = type; }, 3000);
}

// ─────────────────────────────────────────────────────────
// Flags — stored in localStorage (survive sessions)
// ─────────────────────────────────────────────────────────
function getFlaggedIds() {
    try { return new Set(JSON.parse(localStorage.getItem('flaggedQuestions') || '[]')); }
    catch { return new Set(); }
}
function saveFlaggedIds(set) {
    localStorage.setItem('flaggedQuestions', JSON.stringify([...set]));
}
function isQuestionFlagged(id) { return getFlaggedIds().has(id); }
function toggleFlag(id) {
    const s = getFlaggedIds();
    if (s.has(id)) s.delete(id); else s.add(id);
    saveFlaggedIds(s);
    return s.has(id);
}

// ─────────────────────────────────────────────────────────
// LM helpers
// ─────────────────────────────────────────────────────────
function lmOptionsForSubject(subject, sel = '') {
    const lms = CFA_CURRICULUM[subject] || [];
    if (!lms.length) return '<option value="">No LMs for this subject</option>';
    return `<option value="">— Unassigned —</option>` +
        lms.map(lm => `<option value="${lm}" ${lm === sel ? 'selected' : ''}>${lm}</option>`).join('');
}

// ─────────────────────────────────────────────────────────
// Main App
// ─────────────────────────────────────────────────────────
const app = {
    // ── View state ──
    currentView: null,

    // ── Quiz session state ──
    quizMode:       'practice',   // 'practice' | 'exam'
    quizQueue:      [],
    quizIndex:      0,
    sessionCorrect: 0,
    sessionTotal:   0,
    examAnswers:    [],   // exam mode: selected index per question (null = unanswered)
    examConfidence: [],   // exam mode: confidence per question
    currentQuestion: null,

    // ── Filter state ──
    filterSource:  'all',
    filterSubject: 'all',
    filterLm:      'all',
    filterStatus:  'all',   // 'all' | 'unattempted' | 'wrong' | 'flagged'

    // ── Timer state ──
    timerInterval:   null,
    isPaused:        false,
    elapsedSeconds:  0,       // total elapsed (excluding pauses)
    timerStartWall:  null,    // wall-clock when timer last started/resumed

    // ── Init ──
    init: async function () {
        pdfjsLib.GlobalWorkerOptions.workerSrc =
            'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        await this.seedSampleQuestions();
        await this.updateSidebarStats();
        this.setupKeyboardShortcuts();
        this.navigate('dashboard');
    },

    seedSampleQuestions: async function () {
        const SEED_VERSION = 'v51-fix-mock34';
        const seeded = localStorage.getItem('cfaSeedVersion');

        if (seeded !== SEED_VERSION) {
            // Collect sources shipped with the app (static sources).
            // We identify them by looking at ALL_QUESTIONS source values.
            const staticSources = new Set(window.ALL_QUESTIONS.map(q => q.source || 'Unknown'));
            const staticMockNames = new Set(window.ALL_QUESTIONS.filter(q => q.mockName).map(q => q.mockName));

            // Delete every question that came from a static source so we can re-add cleanly.
            // User-uploaded questions (not in staticSources and no mockName from static mocks) are preserved.
            const allExisting = await db.questions.toArray();
            const toDeleteIds = allExisting
                .filter(q => staticSources.has(q.source || 'Unknown') || staticMockNames.has(q.mockName) || q.source === 'Mock: ')
                .map(q => q.id);

            if (toDeleteIds.length > 0) await db.questions.bulkDelete(toDeleteIds);

            // Re-add all static questions fresh.
            await db.questions.bulkAdd(window.ALL_QUESTIONS);
            localStorage.setItem('cfaSeedVersion', SEED_VERSION);
            console.log(`Seeded ${window.ALL_QUESTIONS.length} questions (v49).`);
        } else if ((await db.questions.count()) === 0) {
            // DB was wiped manually — reseed.
            await db.questions.bulkAdd(window.ALL_QUESTIONS);
        }
    },

    updateSidebarStats: async function () {
        const qCount  = (await db.questions.toArray()).filter(q=>!q.mockName).length;
        const aCount  = await db.attempts.count();
        const correct = await db.attempts.where('isCorrect').equals(1).count();
        const acc     = aCount > 0 ? Math.round(correct / aCount * 100) : 0;
        const el      = document.getElementById('sidebar-stats');
        if (el) el.innerHTML = `
            <div class="flex justify-between"><span>Questions</span><span class="text-white font-semibold">${qCount}</span></div>
            <div class="flex justify-between"><span>Attempts</span><span class="text-white font-semibold">${aCount}</span></div>
            <div class="flex justify-between"><span>Accuracy</span><span class="font-semibold" style="color:#f5c842">${acc}%</span></div>`;
    },

    toggleTheme: function() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('cfa-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('cfa-theme', 'dark');
        }
    },
    
    toggleSidebar: function() { const s = document.getElementById("sidebar"); const o = document.getElementById("mobile-overlay"); if(!s || !o) return; if(s.classList.contains("-translate-x-full")) { s.classList.remove("-translate-x-full"); o.classList.remove("hidden"); } else { s.classList.add("-translate-x-full"); o.classList.add("hidden"); } },
    navigate: function (view) {
        this.currentView = view;
        // Clear quiz cache when leaving the quiz tab so counts are always fresh
        if (view !== 'quiz') window._quizAllQ = null;
        if(window.innerWidth < 768) { const s = document.getElementById("sidebar"); const o = document.getElementById("mobile-overlay"); if(s && o) { s.classList.add("-translate-x-full"); o.classList.add("hidden"); } }
        document.querySelectorAll('.nav-link').forEach(el =>
            el.classList.toggle('active', el.dataset.view === view));
        if (view !== 'quiz') this.stopTimer();
        this.render();
    },

    render: async function () {
        const c = document.getElementById('app-container');
        c.innerHTML = ''; c.classList.remove('fade-in'); void c.offsetWidth; c.classList.add('fade-in');
        const meta = {
            dashboard: ['Dashboard',        'Track your performance across all subjects and sources'],
            mocks:     ['Mock Exams',       'Simulate full exam conditions'],
            quiz:      ['Practice Quiz',    'Answer questions and build your confidence'],
            ingestion: ['Import Questions', 'Extract questions from PDFs or images using AI'],
            settings:  ['Settings & Data',  'Manage your question bank and backups'],
        };
        const [title, sub] = meta[this.currentView] || ['CFA Prep',''];
        document.getElementById('page-title').textContent    = title;
        document.getElementById('page-subtitle').textContent = sub;
        const td  = document.getElementById('timer-display');
        const pb  = document.getElementById('topbar-pause');
        if (this.currentView === 'quiz') {
            td.classList.remove('hidden'); td.classList.add('flex');
            if (pb) pb.style.display = 'inline-flex';
        } else {
            td.classList.add('hidden'); td.classList.remove('flex');
            if (pb) pb.style.display = 'none';
        }

        if      (this.currentView === 'dashboard') await this.renderDashboard(c);
        else if (this.currentView === 'mocks')     await this.renderMocks(c);
        else if (this.currentView === 'quiz')      await this.renderQuizSetup(c);
        else if (this.currentView === 'ingestion') await this.renderIngestion(c);
        else if (this.currentView === 'settings')  await this.renderSettings(c);

        await this.updateSidebarStats();
    },

    // ══════════════════════════════════════════
    // DASHBOARD
    // ══════════════════════════════════════════
    renderDashboard: async function (c) {
                const allQs = await db.questions.toArray();
        const mockIds = new Set(allQs.filter(q=>q.mockName).map(q=>q.id));
        const attempts = (await db.attempts.toArray()).filter(a => !mockIds.has(a.questionId));
        const qTotal   = allQs.length - mockIds.size;
        if (attempts.length === 0) {
            c.innerHTML = `<div class="empty-state">
                <svg class="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                <h3 class="text-xl font-bold text-slate-700 dark:text-zinc-200 mb-2">No data yet</h3>
                <p class="text-slate-400 dark:text-zinc-500 mb-6">Answer some practice questions to see your performance here.</p>
                <button onclick="app.navigate('quiz')" class="btn-primary">Start Practising →</button>
            </div>`;
            return;
        }
        const total   = attempts.length;
        const correct = attempts.filter(a => a.isCorrect).length;
        const acc     = Math.round(correct / total * 100);
        const avgTime = Math.round(attempts.reduce((s,a) => s + a.timeTaken, 0) / total);
        const streak  = this.calcStreak(attempts);

        const bySub = {}, bySource = {}, byLm = {}, byConf = { sure:0, unsure:0, guessing:0 };
        attempts.forEach(a => {
            if (!bySub[a.subject]) bySub[a.subject] = { t:0,c:0 };
            bySub[a.subject].t++; if (a.isCorrect) bySub[a.subject].c++;
            const src = a.source || 'Unknown';
            if (!bySource[src]) bySource[src] = { t:0,c:0 };
            bySource[src].t++; if (a.isCorrect) bySource[src].c++;
            const key = `${a.subject} › ${a.lm || 'Unassigned'}`;
            if (!byLm[key]) byLm[key] = { t:0,c:0,subject:a.subject };
            byLm[key].t++; if (a.isCorrect) byLm[key].c++;
            if (a.confidence) byConf[a.confidence] = (byConf[a.confidence]||0)+1;
        });
        const weak = Object.entries(bySub).filter(([,s])=>s.t>=2)
            .map(([n,s])=>({n,acc:Math.round(s.c/s.t*100)})).sort((a,b)=>a.acc-b.acc).slice(0,3);

        c.innerHTML = `
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                ${this.kpiCard('Questions Attempted',total,'','#3b82f6',`of ${qTotal} in bank`)}
                ${this.kpiCard('Overall Accuracy',acc,'%',acc>=70?'#16a34a':acc>=50?'#f59e0b':'#ef4444',this.accLabel(acc))}
                ${this.kpiCard('Avg Time / Question',avgTime,'s','#8b5cf6','per question')}
                ${this.kpiCard('Study Streak',streak,' days','#f59e0b','consecutive study days')}
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
                <div class="chart-container lg:col-span-2">
                    <h3 class="font-bold text-slate-800 dark:text-white mb-1">Accuracy by Topic Area</h3>
                    <p class="text-xs text-slate-400 dark:text-zinc-500 mb-4">% correct per 2026 CFA topic area</p>
                    <div style="height:260px;"><canvas id="subjectChart"></canvas></div>
                </div>
                <div class="chart-container flex flex-col">
                    <h3 class="font-bold text-slate-800 dark:text-white mb-1">Correct vs. Incorrect</h3>
                    <p class="text-xs text-slate-400 dark:text-zinc-500 mb-4">Overall split</p>
                    <div style="height:200px;" class="flex items-center justify-center">
                        <canvas id="donutChart"></canvas>
                    </div>
                    ${(byConf.sure||byConf.unsure||byConf.guessing) ? `
                    <div class="mt-4 pt-4 border-t border-slate-100 dark:border-zinc-800">
                        <p class="text-xs font-semibold text-slate-500 dark:text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-2">Confidence Split</p>
                        <div class="flex gap-2 text-xs">
                            <div class="flex-1 bg-green-50 rounded-lg p-2 text-center"><p class="font-bold text-green-700">${byConf.sure||0}</p><p class="text-slate-400 dark:text-zinc-500">Sure</p></div>
                            <div class="flex-1 bg-yellow-50 rounded-lg p-2 text-center"><p class="font-bold text-yellow-700">${byConf.unsure||0}</p><p class="text-slate-400 dark:text-zinc-500">Unsure</p></div>
                            <div class="flex-1 bg-red-50 rounded-lg p-2 text-center"><p class="font-bold text-red-700">${byConf.guessing||0}</p><p class="text-slate-400 dark:text-zinc-500">Guessing</p></div>
                        </div>
                    </div>` : ''}
                </div>
            </div>
            <div class="chart-container mb-8">
                <h3 class="font-bold text-slate-800 dark:text-white mb-1">Performance by Source</h3>
                <p class="text-xs text-slate-400 dark:text-zinc-500 mb-4">How you're doing across each question bank</p>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${Object.entries(bySource).map(([src,s])=>{
                        const a=Math.round(s.c/s.t*100), col=a>=70?'#22c55e':a>=50?'#f59e0b':'#ef4444';
                        return `<div class="border border-slate-100 dark:border-zinc-800 rounded-xl p-4">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-sm font-semibold text-slate-700 dark:text-zinc-200 truncate mr-2">${src}</span>
                                <span class="text-lg font-bold" style="color:${col}">${a}%</span>
                            </div>
                            <div class="progress-bar-track mb-2">
                                <div class="progress-bar-fill" style="width:${a}%;background:${col};"></div>
                            </div>
                            <p class="text-xs text-slate-400 dark:text-zinc-500">${s.c} correct of ${s.t} attempted</p>
                        </div>`;
                    }).join('')}
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
                <div class="stat-card">
                    <h3 class="font-bold text-slate-800 dark:text-white mb-1">Focus Areas</h3>
                    <p class="text-xs text-slate-400 dark:text-zinc-500 mb-4">Weakest topic areas (≥2 attempts)</p>
                    ${weak.length===0 ? '<p class="text-sm text-slate-400 dark:text-zinc-500">Not enough data yet.</p>'
                        : weak.map(s=>`<div class="mb-4">
                            <div class="flex justify-between text-sm mb-1">
                                <span class="font-medium text-slate-700 dark:text-zinc-200">${s.n}</span>
                                <span class="font-bold" style="color:${s.acc<50?'#ef4444':'#f59e0b'}">${s.acc}%</span>
                            </div>
                            <div class="progress-bar-track">
                                <div class="progress-bar-fill" style="width:${s.acc}%;background:${s.acc<50?'linear-gradient(90deg,#ef4444,#f97316)':'linear-gradient(90deg,#f59e0b,#eab308)'};"></div>
                            </div></div>`).join('')}
                </div>
                <div class="stat-card">
                    <h3 class="font-bold text-slate-800 dark:text-white mb-1">By Learning Module</h3>
                    <p class="text-xs text-slate-400 dark:text-zinc-500 mb-4">2026 CFA LM breakdown</p>
                    <div style="max-height:220px;overflow-y:auto;">
                        ${Object.entries(byLm).map(([key,s])=>{
                            const a=Math.round(s.c/s.t*100);
                            return `<div class="reading-row">
                                <span class="text-slate-600 dark:text-zinc-300 flex-1 truncate mr-3 text-xs">${key}</span>
                                <span class="text-xs text-slate-400 dark:text-zinc-500 mr-3">${s.t}q</span>
                                <span class="font-bold text-sm" style="color:${a>=70?'#16a34a':a>=50?'#f59e0b':'#ef4444'}">${a}%</span>
                            </div>`;
                        }).join('')}
                    </div>
                </div>
            </div>`;

        this.renderBarChart(bySub);
        this.renderDonutChart(correct, total - correct);
    },

    kpiCard: (l,v,u,color,sub) => `
        <div class="stat-card">
            <p class="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-zinc-500 mb-3">${l}</p>
            <p class="text-4xl font-bold mb-1" style="color:${color}">${v}<span class="text-2xl">${u}</span></p>
            <p class="text-xs text-slate-400 dark:text-zinc-500">${sub}</p>
        </div>`,
    accLabel: a => a>=70?'✓ On track for the exam':a>=50?'↗ Keep practising':'⚠ Needs improvement',
    calcStreak: function(attempts) {
        if (!attempts.length) return 0;
        const days = [...new Set(attempts.map(a=>new Date(a.timestamp).toDateString()))].sort((a,b)=>new Date(b)-new Date(a));
        let streak=1;
        for (let i=1;i<days.length;i++) {
            if (Math.round((new Date(days[i-1])-new Date(days[i]))/86400000)===1) streak++; else break;
        }
        return streak;
    },
    renderBarChart: function(bySub) {
        const ctx=document.getElementById('subjectChart')?.getContext('2d'); if(!ctx)return;
        if (this._barChart) this._barChart.destroy();
        const labels=Object.keys(bySub), data=labels.map(l=>Math.round(bySub[l].c/bySub[l].t*100)), colors=labels.map(l=>subjectChartColor(l));
        this._barChart = new Chart(ctx,{type:'bar',data:{labels,datasets:[{label:'Accuracy %',data,backgroundColor:colors.map(c=>c+'33'),borderColor:colors,borderWidth:2,borderRadius:8}]},
            options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},
                scales:{y:{beginAtZero:true,max:100,ticks:{callback:v=>v+'%',font:{size:11}},grid:{color:'#f1f5f9'}},x:{ticks:{font:{size:9},maxRotation:30},grid:{display:false}}}}});
    },
    renderDonutChart: function(correct,incorrect) {
        const ctx=document.getElementById('donutChart')?.getContext('2d'); if(!ctx)return;
        if (this._donutChart) this._donutChart.destroy();
        this._donutChart = new Chart(ctx,{type:'doughnut',data:{labels:['Correct','Incorrect'],datasets:[{data:[correct,incorrect],backgroundColor:['#22c55e','#f87171'],borderWidth:0}]},
            options:{responsive:true,maintainAspectRatio:false,cutout:'68%',plugins:{legend:{position:'bottom',labels:{font:{size:12},padding:12}}}}});
    },

    // ══════════════════════════════════════════
    // QUIZ SETUP
    // ══════════════════════════════════════════

    renderMocks: async function(c) {
        const allQ = await db.questions.toArray();
        const allAttempts = await db.attempts.toArray();
        const mockQs = allQ.filter(q => q.mockName);
        const mocks = [...new Set(mockQs.map(q => q.mockName))];

        let html = `<div class="max-w-4xl mx-auto space-y-6">`;
        if (mocks.length === 0) {
            html += `<div class="stat-card text-center py-10 text-slate-500 dark:text-zinc-400">No mock exams found.</div>`;
        }

        for (const mock of mocks) {
            const mockQ  = mockQs.filter(q => q.mockName === mock);
            const s1Qs   = mockQ.filter(q => q.session === 1);
            const s2Qs   = mockQ.filter(q => q.session === 2);
            const mockIds = new Set(mockQ.map(q => q.id));

            const mockAttempts = allAttempts.filter(a => mockIds.has(a.questionId));
            const totalAtt   = mockAttempts.length;
            const correctAtt = mockAttempts.filter(a => a.isCorrect).length;
            const acc = totalAtt > 0 ? Math.round(correctAtt / totalAtt * 100) : null;

            const bySub = {};
            for (const a of mockAttempts) {
                const sub = a.subject || 'Unknown';
                if (!bySub[sub]) bySub[sub] = { c: 0, t: 0 };
                bySub[sub].t++;
                if (a.isCorrect) bySub[sub].c++;
            }
            const subRows = Object.entries(bySub).map(([sub, d]) => {
                const pct = Math.round(d.c / d.t * 100);
                const col = pct >= 70 ? '#16a34a' : pct >= 50 ? '#ca8a04' : '#dc2626';
                return `<div class="flex items-center justify-between text-xs py-1 border-b border-slate-100 dark:border-zinc-800 last:border-0">
                    <span class="text-slate-600 dark:text-zinc-300">${sub}</span>
                    <span class="font-bold" style="color:${col}">${pct}% <span class="font-normal text-slate-400 dark:text-zinc-500">(${d.c}/${d.t})</span></span>
                </div>`;
            }).join('');

            const mockEsc = mock.replace(/'/g, "\\'");
            const attempted = totalAtt > 0;

            html += `
            <div class="stat-card">
                <div class="flex flex-col md:flex-row md:items-start gap-6">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-3 mb-1">
                            <h3 class="font-bold text-xl text-slate-800 dark:text-white">${mock}</h3>
                            ${attempted ? `<span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">Attempted</span>` : ''}
                        </div>
                        <p class="text-sm text-slate-500 dark:text-zinc-400 mb-5">${mockQ.length} Questions &middot; ${s1Qs.length ? s1Qs.length + ' in Session 1' : ''} ${s2Qs.length ? '&middot; ' + s2Qs.length + ' in Session 2' : ''}</p>

                        ${attempted && subRows ? `
                        <div class="mb-5">
                            <p class="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-zinc-500 mb-2">Subject Performance</p>
                            <div>${subRows}</div>
                        </div>` : ''}

                        <div class="flex flex-wrap gap-3 items-center">
                            ${(function(){
                                if (s1Qs.length === 0) return '';
                                const hasSave = !!localStorage.getItem('cfa_mock_' + mock + '_1');
                                const btnText = hasSave ? 'Resume Session 1' : (attempted ? 'Retry Session 1' : 'Start Session 1');
                                return `<button onclick="app.startMock('${mockEsc}', 1)" class="btn-primary text-sm py-2 px-5 ${hasSave?'bg-blue-600':''}">${btnText} (${s1Qs.length} Qs)</button>`;
                            })()}
                            ${(function(){
                                if (s2Qs.length === 0) return '';
                                const hasSave = !!localStorage.getItem('cfa_mock_' + mock + '_2');
                                const btnText = hasSave ? 'Resume Session 2' : (attempted ? 'Retry Session 2' : 'Start Session 2');
                                return `<button onclick="app.startMock('${mockEsc}', 2)" class="btn-primary text-sm py-2 px-5 ${hasSave?'bg-blue-600':''}">${btnText} (${s2Qs.length} Qs)</button>`;
                            })()}
                            ${attempted ? `<button onclick="app.resetMocks('${mockEsc}')" class="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"><svg class='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'/></svg>Reset</button>` : ''}
                        </div>
                    </div>

                    ${attempted ? `
                    <div class="flex flex-row md:flex-col gap-6 md:gap-4 items-center md:min-w-[110px] bg-slate-50 dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800 rounded-xl p-4 text-center">
                        <div>
                            <div class="text-3xl font-black" style="color:${acc>=70?'#16a34a':acc>=50?'#ca8a04':'#dc2626'}">${acc}%</div>
                            <div class="text-xs text-slate-400 dark:text-zinc-500 mt-0.5">Accuracy</div>
                        </div>
                        <div>
                            <div class="text-xl font-bold text-slate-700 dark:text-zinc-200">${correctAtt}/${totalAtt}</div>
                            <div class="text-xs text-slate-400 dark:text-zinc-500 mt-0.5">Correct</div>
                        </div>
                    </div>` : ''}
                </div>
            </div>`;
        }
        c.innerHTML = html + `</div>`;
    },

    startMock: async function(mockName, session) {
        this.quizMode = 'exam';
        const allQ = await db.questions.toArray();
        let q = allQ.filter(q => q.mockName === mockName && q.session === session);
        
        q.sort((a, b) => SUBJECT_LIST.indexOf(a.subject) - SUBJECT_LIST.indexOf(b.subject));
        
        this.quizMode = 'exam';
        this.isMock = true;
        this.currentMockName = mockName;
        this.currentMockSession = session;
        this.quizQueue = q;
        this.sessionCorrect = 0;
        this.sessionTotal = 0;
        this.examConfidence = new Array(this.quizQueue.length).fill(null);

        const stateKey = `cfa_mock_${mockName}_${session}`;
        const saved = localStorage.getItem(stateKey);
        
        if (saved && confirm(`You have a saved session for ${mockName} (Session ${session}). Resume where you left off? (Click Cancel to start fresh)`)) {
            try {
                const s = JSON.parse(saved);
                this.quizIndex = s.quizIndex || 0;
                this.examAnswers = s.examAnswers || new Array(this.quizQueue.length).fill(null);
                this.elapsedSeconds = s.elapsedSeconds || 0;
            } catch (e) {
                this.quizIndex = 0;
                this.examAnswers = new Array(this.quizQueue.length).fill(null);
                this.elapsedSeconds = 0;
            }
        } else {
            this.clearMockProgress(mockName, session);
            this.quizIndex = 0;
            this.examAnswers = new Array(this.quizQueue.length).fill(null);
            this.elapsedSeconds = 0;
        }
        
        if(window.innerWidth < 768) { const s = document.getElementById("sidebar"); const o = document.getElementById("mobile-overlay"); if(s && o) { s.classList.add("-translate-x-full"); o.classList.add("hidden"); } }
        
        await this.renderExamQuestion(document.getElementById('app-container'));
    },

    renderQuizSetup: async function (c) {
        const allQ = (await db.questions.toArray()).filter(q => !q.mockName);
        if (allQ.length === 0) {
            c.innerHTML = `<div class="empty-state"><p class="text-slate-400 dark:text-zinc-500 mb-6">No questions yet.</p></div>`;
            return;
        }
        window._quizAllQ = allQ;
        this.quizMode = 'practice';

        // Pre-compute attempt data for status filtering
        const attempts    = await db.attempts.toArray();
        const attemptedIds = new Set(attempts.map(a => a.questionId));
        const wrongIds     = new Set(attempts.filter(a => !a.isCorrect).map(a => a.questionId));
        const flaggedIds   = getFlaggedIds();
        window._attemptedIds = attemptedIds;
        window._wrongIds     = wrongIds;
        window._flaggedIds   = flaggedIds;

        const sources  = [...new Set(allQ.map(q=>q.source||'Unknown'))].sort();
        const subjects = SUBJECT_LIST.filter(s=>allQ.some(q=>q.subject===s));

        c.innerHTML = `
            <div class="max-w-2xl mx-auto space-y-5">
                <div class="stat-card">
                    <h3 class="font-bold text-slate-800 dark:text-white text-lg mb-1">Configure Your Session</h3>
                    <p class="text-slate-400 dark:text-zinc-500 text-sm mb-6">Choose a mode, filter by source/topic, then start.</p>

                    <!-- Status filter -->
                    <div class="mb-5">
                        <label class="block text-xs font-semibold text-slate-500 dark:text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-2">Question Status</label>
                        <div class="flex flex-wrap gap-2" id="status-filters">
                            ${this.filterChip('status','all','All Questions',allQ.length,this.filterStatus)}
                            ${this.filterChip('status','unattempted','Unattempted',allQ.filter(q=>!attemptedIds.has(q.id)).length,this.filterStatus)}
                            ${this.filterChip('status','wrong','Previously Wrong',allQ.filter(q=>wrongIds.has(q.id)).length,this.filterStatus)}
                            ${this.filterChip('status','flagged','🚩 Flagged',allQ.filter(q=>flaggedIds.has(q.id)).length,this.filterStatus)}
                        </div>
                    </div>

                    <!-- Source filter -->
                    <div class="mb-5">
                        <label class="block text-xs font-semibold text-slate-500 dark:text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-2">Source / Question Bank</label>
                        <div class="flex flex-wrap gap-2" id="source-filters">
                            ${this.filterChip('source','all','All Sources',allQ.length,this.filterSource)}
                            ${sources.map(s=>this.filterChip('source',s,s,allQ.filter(q=>(q.source||'Unknown')===s).length,this.filterSource)).join('')}
                        </div>
                    </div>

                    <!-- Subject filter -->
                    <div class="mb-5">
                        <label class="block text-xs font-semibold text-slate-500 dark:text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-2">Topic Area</label>
                        <div class="flex flex-wrap gap-2" id="subject-filters">
                            ${this.filterChip('subject','all','All Topics',allQ.length,this.filterSubject)}
                            ${subjects.map(s=>this.filterChip('subject',s,s,allQ.filter(q=>q.subject===s).length,this.filterSubject)).join('')}
                        </div>
                    </div>

                    <!-- LM filter -->
                    <div class="mb-5" id="lm-filter-section" style="${this.filterSubject==='all'?'display:none':''}">
                        <label class="block text-xs font-semibold text-slate-500 dark:text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-2">Learning Module</label>
                        <div class="flex flex-wrap gap-2" id="lm-filters"></div>
                    </div>

                    <!-- Count -->
                    <div class="mb-6 flex items-center gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-slate-500 dark:text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-2">Questions</label>
                            <select id="quiz-count" class="form-input w-36">
                                <option value="5">5</option>
                                <option value="10" selected>10</option>
                                <option value="20">20</option>
                                <option value="all">All available</option>
                            </select>
                        </div>
                        <div class="pt-6">
                            <span class="text-sm text-slate-400 dark:text-zinc-500" id="available-count">Loading…</span>
                        </div>
                    </div>

                    <button onclick="app.startQuizSession()" class="btn-primary w-full justify-center py-3 text-base">Start Practice →</button>

                    <!-- Keyboard hints -->
                    <div class="shortcut-bar mt-4 pt-4 border-t border-slate-100 dark:border-zinc-800">
                        <span class="text-slate-400 dark:text-zinc-500 font-semibold mr-1">Shortcuts:</span>
                        <span><kbd class="kbd">A</kbd><kbd class="kbd">B</kbd><kbd class="kbd">C</kbd> select</span>
                        <span><kbd class="kbd">F</kbd> flag</span>
                        <span><kbd class="kbd">P</kbd> pause</span>
                        <span><kbd class="kbd">→</kbd> next</span>
                    </div>
                </div>
                <div id="recent-session-stats"></div>
            </div>`;

        if (this.filterSubject !== 'all') this.updateLmFilters(allQ);
        this.updateAvailableCount(allQ);
        await this.loadRecentSessionStats();
    },

    setMode: function(mode) {
        this.quizMode = mode;
        document.querySelectorAll('.mode-tab').forEach((btn,i) => btn.classList.toggle('active', [btn.id === `mode-${mode}`][0]));
        const startBtn = document.querySelector('button[onclick="app.startQuizSession()"]');
        if (startBtn) startBtn.textContent = mode === 'exam' ? 'Begin Exam →' : 'Start Practice →';
    },

    filterChip: function(type, value, label, count, activeValue) {
        const active = value === activeValue;
        const base   = 'filter-btn px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150 cursor-pointer';
        const style  = active ? `${base} border-blue-500 bg-blue-500 text-white` : `${base} border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-300 hover:border-blue-400 hover:text-blue-600`;
        const esc    = value.replace(/'/g,"\\'");
        return `<button onclick="app.setFilter('${type}','${esc}')" class="${style}">${label} <span class="opacity-70">(${count})</span></button>`;
    },

    setFilter: async function(type, value) {
        if (type==='status')  this.filterStatus  = value;
        if (type==='source')  this.filterSource  = value;
        if (type==='subject') { this.filterSubject = value; this.filterLm = 'all'; }
        if (type==='lm')      this.filterLm      = value;
        const allQ = window._quizAllQ || (await db.questions.toArray()).filter(q => !q.mockName);
        const aIds = window._attemptedIds || new Set(), wIds = window._wrongIds || new Set(), fIds = window._flaggedIds || new Set();
        
        const matchesStatus = (q) => {
            if (this.filterStatus === 'unattempted') return !aIds.has(q.id);
            if (this.filterStatus === 'wrong') return wIds.has(q.id);
            if (this.filterStatus === 'flagged') return fIds.has(q.id);
            return true;
        };
        const matchesSource = (q) => this.filterSource === 'all' || (q.source || 'Unknown') === this.filterSource;
        const matchesSubject = (q) => this.filterSubject === 'all' || q.subject === this.filterSubject;
        
        const sources  = [...new Set(allQ.map(q=>q.source||'Unknown'))].sort();
        const subjects = SUBJECT_LIST.filter(s=>allQ.some(q=>q.subject===s));
        
        const refresh  = (id,ft,cur,items,lFn,cFn, totalFn) => {
            const el=document.getElementById(id); if(!el)return;
            el.innerHTML = this.filterChip(ft,'all',ft==='source'?'All Sources':ft==='subject'?'All Topics':'All Questions',totalFn(),cur)
                + items.map(s=>this.filterChip(ft,s,lFn(s),cFn(s),cur)).join('');
        };
        
        const sEl = document.getElementById('status-filters');
        if (sEl) {
            const baseForStatus = allQ.filter(q => matchesSource(q) && matchesSubject(q));
            sEl.innerHTML =
                this.filterChip('status','all','All Questions',baseForStatus.length,this.filterStatus)+
                this.filterChip('status','unattempted','Unattempted',baseForStatus.filter(q=>!aIds.has(q.id)).length,this.filterStatus)+
                this.filterChip('status','wrong','Previously Wrong',baseForStatus.filter(q=>wIds.has(q.id)).length,this.filterStatus)+
                this.filterChip('status','flagged','?? Flagged',baseForStatus.filter(q=>fIds.has(q.id)).length,this.filterStatus);
        }
        
        const baseForSource = allQ.filter(q => matchesStatus(q) && matchesSubject(q));
        refresh('source-filters','source',this.filterSource,sources,s=>s,
            s=>baseForSource.filter(q=>(q.source||'Unknown')===s).length,
            ()=>baseForSource.length);
            
        const baseForSubject = allQ.filter(q => matchesStatus(q) && matchesSource(q));
        refresh('subject-filters','subject',this.filterSubject,subjects,s=>s,
            s=>baseForSubject.filter(q=>q.subject===s).length,
            ()=>baseForSubject.length);
        const lmSec=document.getElementById('lm-filter-section'); if(lmSec) lmSec.style.display=this.filterSubject==='all'?'none':'';
        if (this.filterSubject!=='all') this.updateLmFilters(allQ);
        this.updateAvailableCount(allQ);
    },

    updateLmFilters: function(allQ) {
        const el=document.getElementById('lm-filters'); if(!el)return;
        
        const aIds=window._attemptedIds||new Set(), wIds=window._wrongIds||new Set(), fIds=window._flaggedIds||new Set();
        const base = allQ.filter(q => {
            if (this.filterStatus==='unattempted' && aIds.has(q.id)) return false;
            if (this.filterStatus==='wrong' && !wIds.has(q.id)) return false;
            if (this.filterStatus==='flagged' && !fIds.has(q.id)) return false;
            if (this.filterSource!=='all' && (q.source||'Unknown')!==this.filterSource) return false;
            if (q.subject !== this.filterSubject) return false;
            return true;
        });

        const lms=[...new Set(base.map(q=>q.lm||'Unassigned'))].sort();
        el.innerHTML = this.filterChip('lm','all','All LMs',base.length,this.filterLm)
            + lms.map(lm=>this.filterChip('lm',lm,lm,base.filter(q=>(q.lm||'Unassigned')===lm).length,this.filterLm)).join('');
    },

    applyFilters: function(allQ) {
        const aIds=window._attemptedIds||new Set(), wIds=window._wrongIds||new Set(), fIds=window._flaggedIds||getFlaggedIds();
        return allQ.filter(q => {
            if (this.filterStatus==='unattempted' && aIds.has(q.id))                           return false;
            if (this.filterStatus==='wrong'        && !wIds.has(q.id))                          return false;
            if (this.filterStatus==='flagged'      && !fIds.has(q.id))                          return false;
            if (this.filterSource!=='all'  && (q.source||'Unknown')!==this.filterSource)        return false;
            if (this.filterSubject!=='all' && q.subject!==this.filterSubject)                    return false;
            if (this.filterLm!=='all'      && (q.lm||'Unassigned')!==this.filterLm)             return false;
            return true;
        });
    },

    updateAvailableCount: function(allQ) {
        const n=this.applyFilters(allQ).length;
        const el=document.getElementById('available-count');
        if(el) el.textContent=`${n} question${n!==1?'s':''} available`;
    },

    startQuizSession: async function() {
        this.isMock = false;
        const allQ = window._quizAllQ || (await db.questions.toArray()).filter(q => !q.mockName);
        let q = this.applyFilters(allQ);
        if (!q.length) { showToast('No questions match your filters','error'); return; }
        const cv = document.getElementById('quiz-count')?.value || '10';
        const n  = cv==='all' ? q.length : parseInt(cv);
        q.sort(()=>Math.random()-0.5);
        this.quizQueue      = q.slice(0,n);
        this.quizIndex      = 0;
        this.sessionCorrect = 0;
        this.sessionTotal   = 0;
        this.examAnswers    = new Array(this.quizQueue.length).fill(null);
        this.examConfidence = new Array(this.quizQueue.length).fill(null);
        const c = document.getElementById('app-container');
        if (this.quizMode==='exam') await this.renderExamQuestion(c);
        else                        await this.renderPracticeQuestion(c);
    },

    loadRecentSessionStats: async function() {
        const attempts = await db.attempts.toArray(); if(!attempts.length)return;
        const recent = attempts.slice(-10);
        const acc = Math.round(recent.filter(a=>a.isCorrect).length/recent.length*100);
        const el=document.getElementById('recent-session-stats');
        if(el) el.innerHTML=`<div class="stat-card">
            <h3 class="font-semibold text-slate-700 dark:text-zinc-200 mb-3">Last 10 Questions</h3>
            <div class="flex gap-4 text-center">
                <div class="flex-1"><p class="text-2xl font-bold text-green-600">${recent.filter(a=>a.isCorrect).length}</p><p class="text-xs text-slate-400 dark:text-zinc-500">Correct</p></div>
                <div class="flex-1"><p class="text-2xl font-bold text-red-500">${recent.filter(a=>!a.isCorrect).length}</p><p class="text-xs text-slate-400 dark:text-zinc-500">Incorrect</p></div>
                <div class="flex-1"><p class="text-2xl font-bold text-blue-600">${acc}%</p><p class="text-xs text-slate-400 dark:text-zinc-500">Accuracy</p></div>
            </div></div>`;
    },

    // ══════════════════════════════════════════
    // PRACTICE MODE
    // ══════════════════════════════════════════
    renderPracticeQuestion: async function(c) {
        if (this.quizIndex >= this.quizQueue.length) { this.renderSessionSummary(c); return; }
        const q = this.quizQueue[this.quizIndex];
        this.currentQuestion = q;
        this.elapsedSeconds  = 0;
        this.practiceSelectedIndex = null;
        this.startTimer();
        const progress = Math.round(this.quizIndex/this.quizQueue.length*100);
        const flagged  = isQuestionFlagged(q.id);

        c.innerHTML = `
            <div class="max-w-4xl mx-auto">
                <!-- Top bar -->
                <div class="flex items-center justify-between mb-2">
                    <button onclick="(app.sessionTotal>0&&!confirm('Abandon this session?'))||app.navigate('quiz')" class="text-xs text-slate-400 dark:text-zinc-500 hover:text-slate-600 dark:text-zinc-300">← Back to setup</button>
                    <span class="text-sm text-slate-400 dark:text-zinc-500">${this.sessionCorrect}/${this.sessionTotal} correct</span>
                </div>
                <div class="flex items-center gap-2 mb-4">
                    <span class="text-sm text-slate-500 dark:text-zinc-400 font-medium">Q${this.quizIndex+1} of ${this.quizQueue.length}</span>
                    <div class="flex-1 progress-bar-track"><div class="progress-bar-fill" style="width:${progress}%"></div></div>
                    <button id="skip-btn" onclick="app.skipPracticeQuestion()" class="ml-1 px-3 py-1 text-xs font-semibold text-slate-600 bg-slate-200 hover:bg-slate-300 hover:text-slate-800 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white rounded-md transition-colors whitespace-nowrap active:scale-95 flex items-center gap-1"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg> Skip</button>
                </div>

                <!-- 2-column layout: question left, feedback right -->
                <div class="flex flex-col lg:flex-row gap-4 items-start">
                    <!-- LEFT: Question -->
                    <div class="flex-1 min-w-0">
                        <div class="stat-card relative" id="question-card">
                            <div class="flex items-center justify-between flex-wrap gap-2 mb-4">
                                <div class="flex items-center gap-2 flex-wrap">
                                    ${subjectPill(q.subject)}
                                    ${q.lm ? `<span class="text-xs text-slate-400 dark:text-zinc-500">${q.lm}</span>` : ''}
                                </div>
                                <div class="flex items-center gap-2">
                                    ${sourcePill(q.source||'Unknown')}
                                    <button id="flag-btn" onclick="app.toggleFlagCurrent()" class="flag-btn ${flagged?'flagged':''}">🚩 ${flagged?'Flagged':'Flag'}</button>
                                </div>
                            </div>
                            <div class="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-white font-medium leading-relaxed text-base mb-6 prose-p:my-1 prose-table:my-4 prose-th:p-2 prose-td:p-2" id="question-text">${window.renderMarkdown(q.text)}</div>
                            <div id="options-container">
                                ${(q.options||[]).map((opt,i)=>`
                                    <button class="option-btn practice-option" onclick="app.selectPracticeAnswer(${i})">
                                        <span class="option-letter">${String.fromCharCode(65+i)}</span>${opt}
                                    </button>`).join('')}
                            </div>
                            <div class="mt-4 text-right">
                                <button id="submit-practice-btn" onclick="app.confirmPracticeAnswer()" class="btn-primary" disabled style="opacity:0.5;cursor:not-allowed">Submit Answer →</button>
                            </div>
                            <!-- Pause overlay -->
                            <div id="pause-overlay" class="quiz-paused-overlay" style="display:none;">
                                <svg class="w-12 h-12 text-slate-400 dark:text-zinc-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                <p class="text-slate-700 dark:text-zinc-200 font-bold text-xl mb-1">Paused</p>
                                <p class="text-slate-400 dark:text-zinc-500 text-sm mb-4">Your timer is stopped</p>
                                <button onclick="app.togglePause()" class="btn-primary">Resume →</button>
                            </div>
                        </div>
                    </div>
                    <!-- RIGHT: Feedback (hidden until answered) -->
                    <div class="lg:w-80 xl:w-96 w-full flex-shrink-0" id="feedback-container"></div>
                </div>
            </div>`;

        this.updatePauseBtn();
    },


    selectPracticeAnswer: function(index) {
        if (this.isPaused) return;
        this.practiceSelectedIndex = index;
        document.querySelectorAll('.practice-option').forEach((btn,i)=>{
            btn.classList.toggle('selected-exam', i===index);
            const letter = btn.querySelector('.option-letter');
            if (letter) { letter.style.background = i===index?'#3b82f6':''; letter.style.color = i===index?'#fff':''; }
        });
        const submitBtn = document.getElementById('submit-practice-btn');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
        }
    },

    confirmPracticeAnswer: function() {
        if (this.practiceSelectedIndex === undefined || this.practiceSelectedIndex === null) return;
        const submitBtn = document.getElementById('submit-practice-btn');
        if (submitBtn) submitBtn.style.display = 'none';
        this.submitPracticeAnswer(this.practiceSelectedIndex);
    },

    submitPracticeAnswer: async function(selectedIndex) {
        if (this.isPaused) return;
        const timeTaken = this.getElapsedSeconds();
        this.stopTimer();
        const q = this.currentQuestion;
        const correctIndex = typeof q.correctAnswer==='number' ? q.correctAnswer
            : (q.correctAnswer?.toUpperCase?.().charCodeAt(0)-65 ?? -1);
        const isCorrect = selectedIndex === correctIndex;
        this.sessionTotal++; if(isCorrect) this.sessionCorrect++;
        const skipBtn = document.getElementById("skip-btn"); if(skipBtn) skipBtn.style.visibility = "hidden";

        document.querySelectorAll('.option-btn').forEach((btn,idx)=>{
            btn.disabled=true;
            btn.classList.remove('selected-exam');
            const letter = btn.querySelector('.option-letter');
            if (letter) { letter.style.background = ''; letter.style.color = ''; }
            if(idx===correctIndex)                      btn.classList.add('correct');
            else if(idx===selectedIndex && !isCorrect)  btn.classList.add('incorrect');
        });

        const isLast = this.quizIndex+1 >= this.quizQueue.length;
        document.getElementById('feedback-container').innerHTML = `
            <div class="stat-card border-l-4 ${isCorrect?'border-green-500':'border-red-500'} h-full">
                <!-- Result badge -->
                <div class="flex items-center gap-3 mb-4">
                    ${isCorrect
                        ? `<div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg></div><span class="font-bold text-green-700 dark:text-green-400 text-lg">Correct!</span>`
                        : `<div class="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg></div><span class="font-bold text-red-700 dark:text-red-400 text-lg">Incorrect</span>`}
                    <span class="ml-auto text-xs text-slate-400 dark:text-zinc-500">⏱ ${timeTaken}s</span>
                </div>
                <!-- Explanation -->
                ${q.explanation ? `<div class="explanation-box mb-4"><p class="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-400 mb-2">Explanation</p><div class="prose prose-sm prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-zinc-300 leading-relaxed prose-p:my-1">${window.renderMarkdown(q.explanation)}</div></div>` : ''}
                <!-- Confidence -->
                <div class="pt-3 border-t border-slate-100 dark:border-zinc-800">
                    <p class="text-xs font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wide mb-2">How confident were you?</p>
                    <div class="grid grid-cols-3 gap-2 mb-4" id="confidence-row">
                        <button onclick="app.saveAttempt(${selectedIndex},${timeTaken},'sure')"    class="confidence-btn sure text-center">🟢<br><span class="text-xs">Sure</span></button>
                        <button onclick="app.saveAttempt(${selectedIndex},${timeTaken},'unsure')"  class="confidence-btn unsure text-center">🟡<br><span class="text-xs">Unsure</span></button>
                        <button onclick="app.saveAttempt(${selectedIndex},${timeTaken},'guessing')" class="confidence-btn guessing text-center">🔴<br><span class="text-xs">Guessing</span></button>
                    </div>
                    <button id="next-btn" onclick="app.nextPracticeQuestion()" class="${isCorrect?'btn-success':'btn-primary'} w-full justify-center" style="display:none;">
                        ${isLast?'View Summary →':'Next Question →'}
                    </button>
                    <p class="text-xs text-slate-400 dark:text-zinc-500 text-center mt-2">${this.sessionCorrect}/${this.sessionTotal} correct this session</p>
                </div>
            </div>`;

        // Save attempt (without confidence, pending the confidence click)
        this._pendingAttempt = { questionId:q.id, subject:q.subject, lm:q.lm||'', source:q.source||'Unknown', isCorrect:isCorrect?1:0, timeTaken, timestamp:Date.now() };
        await this.updateSidebarStats();
    },

    saveAttempt: async function(selectedIndex, timeTaken, confidence) {
        if(!this._pendingAttempt) return;
        this._pendingAttempt.confidence = confidence;
        
        // Update visual selection state
        document.querySelectorAll('.confidence-btn').forEach(b => {
            b.classList.remove('ring-2', 'ring-offset-2', 'ring-blue-500', 'opacity-100');
            b.classList.add('opacity-50');
            if (b.classList.contains(confidence)) {
                b.classList.remove('opacity-50');
                b.classList.add('ring-2', 'ring-offset-2', 'ring-blue-500', 'opacity-100');
            }
        });
        
        document.getElementById('next-btn').style.display = 'inline-flex';
    },

    skipPracticeQuestion: function() {
        if (this.isPaused) return;
        this.stopTimer();
        const q = this.quizQueue.splice(this.quizIndex, 1)[0];
        this.quizQueue.push(q);
        this.renderPracticeQuestion(document.getElementById('app-container'));
    },
    nextPracticeQuestion: async function() {
        if (this._pendingAttempt) {
            await db.attempts.add(this._pendingAttempt);
            this._pendingAttempt = null;
            await this.updateSidebarStats();
        }
        this.quizIndex++;
        await this.renderPracticeQuestion(document.getElementById('app-container'));
    },

    // ══════════════════════════════════════════
    // EXAM MODE
    // ══════════════════════════════════════════
    renderExamQuestion: async function(c) {
        if (this.quizIndex >= this.quizQueue.length) { 
            const submitted = await this.submitExam(c, false); 
            if (!submitted) {
                this.quizIndex = this.quizQueue.length - 1;
                await this.renderExamQuestion(c);
            }
            return; 
        }
        const q       = this.quizQueue[this.quizIndex];
        this.currentQuestion = q;
        if (!this.timerInterval && !this.isPaused) this.startTimer();
        const flagged = isQuestionFlagged(q.id);
        const sel     = this.examAnswers[this.quizIndex];

        c.innerHTML = `
            <div class="flex flex-col md:flex-row gap-5 max-w-4xl mx-auto">
                <!-- Question -->
                <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between mb-3">
                        <button onclick="app.navigate(app.isMock ? 'mocks' : 'quiz')" class="text-xs text-slate-400 dark:text-zinc-500 hover:text-slate-600 dark:text-zinc-300">← Back to ${this.isMock ? 'Mocks' : 'setup'}</button>
                        <span class="text-sm text-slate-400 dark:text-zinc-500">${this.examAnswers.filter(a=>a!==null).length}/${this.quizQueue.length} answered</span>
                    </div>
                    <div class="stat-card relative" id="question-card">
                        <div class="flex items-center justify-between flex-wrap gap-2 mb-4">
                            <div class="flex items-center gap-2 flex-wrap">
                                ${this.isMock ? '<span class="text-xs font-bold text-slate-500 dark:text-zinc-400 dark:text-zinc-500 bg-slate-100 dark:bg-black px-2 py-1 rounded-md">Mock Exam</span>' : subjectPill(q.subject)}
                                ${this.isMock ? '' : (q.lm?`<span class="text-xs text-slate-400 dark:text-zinc-500">${q.lm}</span>`:'')}
                            </div>
                            <div class="flex items-center gap-2">
                                ${this.isMock ? '' : sourcePill(q.source||'Unknown')}
                                <button id="flag-btn" onclick="app.toggleFlagCurrent()" class="flag-btn ${flagged?'flagged':''}">
                                    🚩 ${flagged?'Flagged':'Flag'}
                                </button>
                            </div>
                        </div>
                        <div class="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-white font-medium leading-relaxed text-base mb-6 prose-p:my-1 prose-table:my-4 prose-th:p-2 prose-td:p-2">${window.renderMarkdown(q.text)}</div>
                        <div id="options-container">
                            ${(q.options||[]).map((opt,i)=>`
                                <button class="option-btn ${i===sel?'selected-exam':''}" onclick="app.selectExamAnswer(${i})">
                                    <span class="option-letter">${String.fromCharCode(65+i)}</span>${opt}
                                </button>`).join('')}
                        </div>
                        <!-- Pause overlay -->
                        <div id="pause-overlay" class="quiz-paused-overlay" style="display:none;">
                            <svg class="w-12 h-12 text-slate-400 dark:text-zinc-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <p class="text-slate-700 dark:text-zinc-200 font-bold text-xl mb-1">Paused</p>
                            <p class="text-slate-400 dark:text-zinc-500 text-sm mb-4">Your timer is stopped</p>
                            <button onclick="app.togglePause()" class="btn-primary">Resume →</button>
                        </div>
                    </div>
                    <!-- Nav buttons -->
                    <div class="flex justify-between mt-4">
                        <button onclick="app.examNavigate(${this.quizIndex-1})" ${this.quizIndex===0?'disabled':''} class="px-4 py-2 text-sm font-semibold border border-slate-200 dark:border-zinc-800 rounded-xl hover:bg-slate-50 dark:bg-zinc-900 disabled:opacity-40 disabled:cursor-not-allowed">← Prev</button>
                        <button onclick="app.examNavigate(${this.quizIndex+1})" class="px-4 py-2 text-sm font-semibold border border-slate-200 dark:border-zinc-800 rounded-xl hover:bg-slate-50 dark:bg-zinc-900">
                            ${this.quizIndex+1<this.quizQueue.length?'Next →':'Submit Exam →'}
                        </button>
                    </div>
                </div>

                <!-- Navigator sidebar -->
                <div class="w-full md:w-52 flex-shrink-0">
                    ${this.buildExamNavigatorHTML()}
                </div>
            </div>`;

        this.updatePauseBtn();
    },

    buildExamNavigatorHTML: function() {
        const fIds = getFlaggedIds();
        const cells = this.quizQueue.map((q,i)=>{
            const ans     = this.examAnswers[i];
            const flagged = fIds.has(q.id);
            let cls = 'nav-cell';
            if      (flagged && ans!==null) cls += ' ans-flag';
            else if (flagged)               cls += ' flagged';
            else if (ans!==null)            cls += ' answered';
            if (i===this.quizIndex)         cls += ' current';
            return `<div class="${cls}" onclick="app.examNavigate(${i})">${i+1}</div>`;
        }).join('');

        const answered = this.examAnswers.filter(a=>a!==null).length;
        const flaggedCount = this.quizQueue.filter(q=>getFlaggedIds().has(q.id)).length;
        const unanswered = this.quizQueue.length - answered;

        return `<div class="stat-card nav-panel sticky top-0">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-zinc-400 mb-2">Navigator</p>
            <div class="nav-grid mb-3">${cells}</div>
            <div class="space-y-1 text-xs mb-3 flex-shrink-0">
                <div class="flex items-center gap-2"><span class="w-3 h-3 rounded nav-legend-unanswered bg-slate-200 inline-block"></span><span class="text-slate-600 dark:text-zinc-300">Unanswered (${unanswered})</span></div>
                <div class="flex items-center gap-2"><span class="w-3 h-3 rounded nav-legend-answered bg-blue-200 inline-block"></span><span class="text-slate-600 dark:text-zinc-300">Answered (${answered})</span></div>
                <div class="flex items-center gap-2"><span class="w-3 h-3 rounded nav-legend-flagged bg-yellow-300 inline-block"></span><span class="text-slate-600 dark:text-zinc-300">Flagged (${flaggedCount})</span></div>
            </div>
            <div class="text-xs text-slate-400 dark:text-zinc-500 mb-3 flex-shrink-0">Timer: <span id="nav-timer" class="font-mono font-bold text-slate-700 dark:text-zinc-200">${this.formatTime(this.getElapsedSeconds())}</span></div>
            <button onclick="app.submitExam(document.getElementById('app-container'),false)" class="btn-primary w-full justify-center text-sm py-2 flex-shrink-0">
                Submit Exam
            </button>
        </div>`;
    },

    saveMockProgress: function() {
        if (!this.isMock) return;
        const stateKey = `cfa_mock_${this.currentMockName}_${this.currentMockSession}`;
        const state = {
            quizIndex: this.quizIndex,
            examAnswers: this.examAnswers,
            elapsedSeconds: this.getElapsedSeconds()
        };
        localStorage.setItem(stateKey, JSON.stringify(state));
    },

    clearMockProgress: function(mockName, session) {
        localStorage.removeItem(`cfa_mock_${mockName}_${session}`);
    },

    selectExamAnswer: function(index) {
        if (this.isPaused) return;
        this.examAnswers[this.quizIndex] = index;
        this.saveMockProgress();
        document.querySelectorAll('.option-btn').forEach((btn,i)=>{
            btn.classList.toggle('selected-exam', i===index);
            const letter = btn.querySelector('.option-letter');
            if (letter) { letter.style.background = i===index?'#3b82f6':''; letter.style.color = i===index?'#fff':''; }
        });
        // Refresh navigator answered count
        const navEl = document.querySelector('.nav-grid');
        if (navEl) {
            const fIds = getFlaggedIds();
            navEl.innerHTML = this.quizQueue.map((q,i)=>{
                const ans=this.examAnswers[i], fl=fIds.has(q.id);
                let cls='nav-cell';
                if(fl&&ans!==null)cls+=' ans-flag'; else if(fl)cls+=' flagged'; else if(ans!==null)cls+=' answered';
                if(i===this.quizIndex)cls+=' current';
                return `<div class="${cls}" onclick="app.examNavigate(${i})">${i+1}</div>`;
            }).join('');
        }
    },

    examNavigate: async function(index) {
        if (index < 0 || index > this.quizQueue.length) return;
        this.quizIndex = index;
        this.saveMockProgress();
        await this.renderExamQuestion(document.getElementById('app-container'));
    },

    submitExam: async function(c, auto) {
        if (this._submitting) return false; this._submitting = true;
        const unanswered = this.examAnswers.filter(a=>a===null).length;
        if (!auto && unanswered > 0) {
            if (!confirm(`You have ${unanswered} unanswered question${unanswered>1?'s':''}. Submit anyway?`)) {
                this._submitting = false;
                return false;
            }
        }
        this.stopTimer();
        if (this.isMock) this.clearMockProgress(this.currentMockName, this.currentMockSession);
        // Save all attempts
        for (let i=0; i<this.quizQueue.length; i++) {
            const q = this.quizQueue[i];
            const sel = this.examAnswers[i];
            if (sel === null) continue;
            const correctIndex = typeof q.correctAnswer==='number' ? q.correctAnswer
                : (q.correctAnswer?.toUpperCase?.().charCodeAt(0)-65 ?? -1);
            const isCorrect = sel === correctIndex;
            if (isCorrect) this.sessionCorrect++;
            this.sessionTotal++;
            await db.attempts.add({
                questionId: q.id, subject: q.subject, lm: q.lm||'', source: q.source||'Unknown',
                isCorrect: isCorrect?1:0, timeTaken: 0, confidence: null, timestamp: Date.now(),
            });
        }
        await this.updateSidebarStats();
        this._submitting = false;
        await this.renderExamReview(c);
    },

    renderExamReview: async function(c) {
        const wasMock       = this.isMock;
        const mockName      = this.currentMockName;
        const mockSession   = this.currentMockSession;
        this.isMock = false;

        const fIds  = getFlaggedIds();
        const cells = this.quizQueue.map((q,i)=>{
            const sel  = this.examAnswers[i];
            const ci   = typeof q.correctAnswer==='number' ? q.correctAnswer : (q.correctAnswer?.toUpperCase?.().charCodeAt(0)-65 ?? -1);
            const isC  = sel !== null && sel === ci;
            const fl   = fIds.has(q.id);
            let cls = `review-cell ${sel===null?'r-incorrect':isC?'r-correct':'r-incorrect'}${fl?' r-flagged':''}`;
            return `<div class="${cls}" onclick="app.showExamReviewQ(${i})" title="Q${i+1}: ${sel===null?'Unanswered':isC?'Correct':'Incorrect'}">${i+1}</div>`;
        }).join('');

        const acc = this.sessionTotal>0 ? Math.round(this.sessionCorrect/this.sessionTotal*100) : 0;
        const accColor = acc>=70?'#16a34a':acc>=50?'#ca8a04':'#dc2626';
        const accBg    = acc>=70?'#dcfce7':acc>=50?'#fef9c3':'#fee2e2';

        // Per-subject breakdown for this session
        const bySub = {};
        for (let i=0; i<this.quizQueue.length; i++) {
            const q   = this.quizQueue[i];
            const sel = this.examAnswers[i];
            if (sel === null) continue;
            const ci  = typeof q.correctAnswer==='number' ? q.correctAnswer : (q.correctAnswer?.toUpperCase?.().charCodeAt(0)-65 ?? -1);
            const sub = q.subject || 'Unknown';
            if (!bySub[sub]) bySub[sub] = { c:0, t:0 };
            bySub[sub].t++;
            if (sel === ci) bySub[sub].c++;
        }
        const subRows = Object.entries(bySub).sort((a,b)=>{
            const pa = Math.round(a[1].c/a[1].t*100), pb = Math.round(b[1].c/b[1].t*100);
            return pa - pb; // weakest first
        }).map(([sub, d]) => {
            const pct = Math.round(d.c / d.t * 100);
            const col = pct>=70?'#16a34a':pct>=50?'#ca8a04':'#dc2626';
            const barW = pct;
            return `<div class="mb-3">
                <div class="flex justify-between text-xs mb-1">
                    <span class="font-medium text-slate-700 dark:text-zinc-200">${sub}</span>
                    <span class="font-bold" style="color:${col}">${pct}% (${d.c}/${d.t})</span>
                </div>
                <div class="h-2 bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div class="h-full rounded-full transition-all" style="width:${barW}%;background:${col}"></div>
                </div>
            </div>`;
        }).join('');

        // Action buttons
        const allQ = await db.questions.toArray();
        const hasSession2 = wasMock && allQ.some(q => q.mockName === mockName && q.session === mockSession + 1);
        const actionBtns = wasMock ? `
            ${hasSession2 ? `<button onclick="app.startMock('${(mockName||'').replace(/'/g,"\'")}', ${mockSession+1})" class="btn-primary">Start Session ${mockSession+1} →</button>` : ''}
            <button onclick="app.navigate('mocks')" class="px-4 py-2.5 border border-slate-300 dark:border-zinc-700 rounded-xl text-sm font-semibold text-slate-600 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800">Back to Mocks</button>
        ` : `<button onclick="app.renderQuizSetup(document.getElementById('app-container'))" class="btn-primary">New Practice Session</button>`;

        c.innerHTML = `
            <div class="max-w-3xl mx-auto">
                <!-- Score header -->
                <div class="stat-card mb-5">
                    <div class="flex flex-col sm:flex-row sm:items-center gap-5">
                        <div class="flex items-center gap-4">
                            <div class="w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center" style="background:${accBg}">
                                <span class="text-3xl font-black" style="color:${accColor}">${acc}%</span>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-slate-800 dark:text-white">${wasMock ? mockName + ' — Session ' + mockSession : 'Exam Complete'}</h3>
                                <p class="text-sm text-slate-400 dark:text-zinc-500 mt-0.5">${this.sessionCorrect} correct &middot; ${this.sessionTotal-this.sessionCorrect} incorrect &middot; ${this.quizQueue.length-this.sessionTotal} unanswered</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-3 sm:ml-auto">
                            ${actionBtns}
                        </div>
                    </div>
                </div>

                <!-- Subject breakdown -->
                ${subRows ? `<div class="stat-card mb-5">
                    <h3 class="font-bold text-slate-800 dark:text-white mb-4">Subject Breakdown <span class="text-xs font-normal text-slate-400 dark:text-zinc-500 ml-1">(weakest first)</span></h3>
                    ${subRows}
                </div>` : ''}

                <!-- Question grid -->
                <div class="stat-card mb-5">
                    <h3 class="font-bold text-slate-800 dark:text-white mb-1">Question Review</h3>
                    <p class="text-xs text-slate-400 dark:text-zinc-500 mb-4">Click any square to inspect the question</p>
                    <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(34px, 1fr));gap:5px;">${cells}</div>
                </div>

                <!-- Detail panel -->
                <div id="review-detail"></div>
            </div>`;
        this._submitting = false; // Release lock in case of re-entry
        return true;
    },

    showExamReviewQ: function(i) {
        const q   = this.quizQueue[i];
        const sel = this.examAnswers[i];
        const ci  = typeof q.correctAnswer==='number' ? q.correctAnswer
            : (q.correctAnswer?.toUpperCase?.().charCodeAt(0)-65 ?? -1);
        const isC = sel!==null && sel===ci;

        // Mark selected cell
        document.querySelectorAll('.review-cell').forEach((el,idx)=>el.classList.toggle('r-selected',idx===i));

        document.getElementById('review-detail').innerHTML = `
            <div class="stat-card border-l-4 ${isC?'border-green-500':'border-red-500'}">
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2">${subjectPill(q.subject)}
                        ${q.lm?`<span class="text-xs text-slate-400 dark:text-zinc-500">${q.lm}</span>`:''}
                    </div>
                    <span class="text-sm font-bold ${isC?'text-green-600':'text-red-600'}">${sel===null?'Unanswered':isC?'Correct':'Incorrect'}</span>
                </div>
                <div class="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-white font-medium mb-4 prose-p:my-1 prose-table:my-2 prose-th:p-2 prose-td:p-2">${window.renderMarkdown(q.text)}</div>
                <div class="space-y-2 mb-4">
                    ${(q.options||[]).map((opt,idx)=>{
                        let extra='';
                        if(idx===ci)           extra='correct';
                        if(idx===sel&&!isC)    extra='incorrect';
                        return `<div class="option-btn ${extra}" style="cursor:default;pointer-events:none;">
                            <span class="option-letter">${String.fromCharCode(65+idx)}</span>${opt}
                            ${idx===ci?'<span class="ml-auto text-xs font-bold text-green-700">✓ Correct</span>':''}
                            ${idx===sel&&!isC?'<span class="ml-auto text-xs font-bold text-red-700">✗ Your answer</span>':''}
                        </div>`;
                    }).join('')}
                </div>
                ${q.explanation?`<div class="explanation-box"><p class="text-xs font-semibold uppercase tracking-wide text-blue-700 mb-2">Explanation</p><div class="prose prose-sm prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-zinc-300 leading-relaxed prose-p:my-1 prose-table:my-2 prose-th:p-2 prose-td:p-2">${window.renderMarkdown(q.explanation)}</div></div>`:''}
            </div>`;
    },

    // ══════════════════════════════════════════
    // SESSION SUMMARY (Practice mode)
    // ══════════════════════════════════════════
    renderSessionSummary: function(c) {
        const acc = this.sessionTotal>0?Math.round(this.sessionCorrect/this.sessionTotal*100):0;
        c.innerHTML = `<div class="max-w-md mx-auto text-center">
            <div class="stat-card">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                     style="background:${acc>=70?'#dcfce7':acc>=50?'#fef9c3':'#fee2e2'}">
                    <span class="text-3xl font-black" style="color:${acc>=70?'#16a34a':acc>=50?'#ca8a04':'#dc2626'}">${acc}%</span>
                </div>
                <h3 class="text-2xl font-bold text-slate-800 dark:text-white mb-1">Session Complete</h3>
                <p class="text-slate-400 dark:text-zinc-500 mb-6">You scored ${this.sessionCorrect} out of ${this.sessionTotal}</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div class="bg-green-50 rounded-xl p-4"><p class="text-2xl font-bold text-green-600">${this.sessionCorrect}</p><p class="text-xs text-slate-500 dark:text-zinc-400 dark:text-zinc-500">Correct</p></div>
                    <div class="bg-red-50 rounded-xl p-4"><p class="text-2xl font-bold text-red-500">${this.sessionTotal-this.sessionCorrect}</p><p class="text-xs text-slate-500 dark:text-zinc-400 dark:text-zinc-500">Incorrect</p></div>
                </div>
                <div class="flex gap-3">
                    <button onclick="app.renderQuizSetup(document.getElementById('app-container'))" class="btn-primary flex-1 justify-center">New Session</button>
                    <button onclick="app.navigate('dashboard')" class="flex-1 py-2.5 border border-slate-300 dark:border-zinc-700 rounded-xl text-sm font-semibold text-slate-600 dark:text-zinc-300 hover:bg-slate-50 dark:bg-zinc-900">Dashboard</button>
                </div>
            </div></div>`;
    },

    // ══════════════════════════════════════════
    // FLAG
    // ══════════════════════════════════════════
    toggleFlagCurrent: function() {
        const q = this.currentQuestion; if(!q) return;
        const now = toggleFlag(q.id);
        const btn = document.getElementById('flag-btn');
        if (btn) { btn.className = `flag-btn${now?' flagged':''}`; btn.innerHTML = `🚩 ${now?'Flagged':'Flag'}`; }
        showToast(now?'Question flagged for review':'Flag removed','info');
        // Refresh navigator in exam mode
        if (this.quizMode==='exam') {
            const navEl = document.querySelector('.nav-grid');
            if (navEl) {
                const fIds = getFlaggedIds();
                navEl.innerHTML = this.quizQueue.map((qn,i)=>{
                    const ans=this.examAnswers[i],fl=fIds.has(qn.id);
                    let cls='nav-cell';
                    if(fl&&ans!==null)cls+=' ans-flag'; else if(fl)cls+=' flagged'; else if(ans!==null)cls+=' answered';
                    if(i===this.quizIndex)cls+=' current';
                    return `<div class="${cls}" onclick="app.examNavigate(${i})">${i+1}</div>`;
                }).join('');
            }
        }
    },

    // ══════════════════════════════════════════
    // TIMER
    // ══════════════════════════════════════════
    startTimer: function() {
        this.stopTimer();
        this.isPaused       = false;
        this.timerStartWall = Date.now();
        this.timerInterval  = setInterval(()=>{ this.updateTimerDisplay(); }, 500);
    },

    stopTimer: function() {
        if (this.timerInterval) {
            this.saveMockProgress();
            // Accumulate before stopping
            if (!this.isPaused && this.timerStartWall)
                this.elapsedSeconds += (Date.now()-this.timerStartWall)/1000;
            clearInterval(this.timerInterval); this.timerInterval=null;
        }
        this.isPaused=false; this.timerStartWall=null;
        const el=document.getElementById('timer-text'); if(el)el.textContent='0:00';
    },

    togglePause: function() {
        if (this.isPaused) {
            // Resume
            this.isPaused       = false;
            this.timerStartWall = Date.now();
            this.timerInterval  = setInterval(()=>{ this.updateTimerDisplay(); },500);
            const ol=document.getElementById('pause-overlay'); if(ol)ol.style.display='none';
        } else {
            // Pause
            if (this.timerStartWall)
                this.elapsedSeconds += (Date.now()-this.timerStartWall)/1000;
            clearInterval(this.timerInterval); this.timerInterval=null;
            this.isPaused=true; this.timerStartWall=null;
            this.saveMockProgress();
            const ol=document.getElementById('pause-overlay'); if(ol)ol.style.display='flex';
        }
        this.updatePauseBtn();
    },

    getElapsedSeconds: function() {
        let s = this.elapsedSeconds;
        if (!this.isPaused && this.timerStartWall) s += (Date.now()-this.timerStartWall)/1000;
        return Math.round(s);
    },

    updateTimerDisplay: function() {
        const s   = this.getElapsedSeconds();
        const txt = this.formatTime(s);
        const el  = document.getElementById('timer-text'); if(el) el.textContent=txt;
        const nav = document.getElementById('nav-timer');  if(nav)nav.textContent=txt;
    },

    formatTime: function(totalSec) {
        const m=Math.floor(totalSec/60), s=Math.round(totalSec%60);
        return `${m}:${s.toString().padStart(2,'0')}`;
    },

    updatePauseBtn: function() {
        const btn = document.getElementById('topbar-pause');
        if (!btn) return;
        btn.className = `pause-btn${this.isPaused?' paused':''}`;
        btn.innerHTML = this.isPaused
            ? `<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/></svg>Resume`
            : `<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>Pause`;
    },

    // ══════════════════════════════════════════
    // KEYBOARD SHORTCUTS
    // ══════════════════════════════════════════
    setupKeyboardShortcuts: function() {
        document.addEventListener('keydown', e => {
            if (['INPUT','SELECT','TEXTAREA'].includes(e.target.tagName)) return;
            if (this.currentView !== 'quiz') return;
            const k = e.key.toLowerCase();

            // Pause / resume
            if (k==='p') { const btn=document.getElementById('topbar-pause'); if(btn) this.togglePause(); return; }

            if (this.isPaused) return;

            // Flag
            if (k==='f') { const btn=document.getElementById('flag-btn'); if(btn) this.toggleFlagCurrent(); return; }

            // Answer options A/B/C/D
            const optionMap = {a:0,b:1,c:2,d:3};
            if (k in optionMap) {
                const idx  = optionMap[k];
                const btns = document.querySelectorAll('.option-btn');
                if (btns.length > idx && !btns[idx].disabled) {
                    if (this.quizMode==='practice') this.selectPracticeAnswer(idx);
                    else this.selectExamAnswer(idx);
                }
                return;
            }

            // Navigation
            if (k==='arrowright' || k==='enter') {
                if (this.quizMode==='exam') { this.examNavigate(this.quizIndex+1); return; }
                
                // If practice mode and ready to submit
                const sb = document.getElementById('submit-practice-btn');
                if (sb && sb.style.display !== 'none' && !sb.disabled && k==='enter') {
                    sb.click(); return;
                }
                
                // If practice mode and ready for next
                const nb = document.getElementById('next-btn');
                if (nb && nb.style.display !== 'none') {
                    nb.click();
                }
            }
            if (k==='arrowleft' && this.quizMode==='exam') this.examNavigate(this.quizIndex-1);
        });
    },

    // ══════════════════════════════════════════
    // INGESTION
    // ══════════════════════════════════════════
    renderIngestion: async function(c) {
        const apiKey  = localStorage.getItem('geminiApiKey') || '';
        const sources = [...new Set((await db.questions.toArray()).filter(q=>!q.mockName).map(q=>q.source||'Unknown'))].sort();
        c.innerHTML = `
            <div class="max-w-2xl mx-auto space-y-6">
                <div class="stat-card">
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center" style="background:#eff6ff">
                            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
                        </div>
                        <div class="flex-1">
                            <h3 class="font-bold text-slate-800 dark:text-white mb-1">Gemini API Key</h3>
                            <p class="text-sm text-slate-400 dark:text-zinc-500 mb-3">Used to extract questions. Stored locally in your browser only.</p>
                            <div class="flex gap-2">
                                <input type="password" id="api-key" class="form-input flex-1" placeholder="AIzaSy..." value="${apiKey}">
                                <button onclick="app.saveApiKey()" class="btn-primary flex-shrink-0">Save</button>
                            </div>
                            ${apiKey?'<p class="text-xs text-green-600 mt-2">✓ API key is saved</p>':''}
                        </div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center" style="background:#f0fdf4">
                            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                        </div>
                        <div class="flex-1">
                            <h3 class="font-bold text-slate-800 dark:text-white mb-1">Upload File</h3>
                            <p class="text-sm text-slate-400 dark:text-zinc-500 mb-4">PDF or image — Gemini will extract all multiple-choice questions automatically.</p>
                            <div class="border-2 border-dashed border-slate-200 dark:border-zinc-800 rounded-xl p-6 text-center mb-5 hover:border-blue-400 transition-colors cursor-pointer" onclick="document.getElementById('file-upload').click()">
                                <svg class="w-8 h-8 text-slate-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
                                <p class="text-sm text-slate-400 dark:text-zinc-500" id="file-label">Click to upload PDF or Image</p>
                                <p class="text-xs text-slate-300 mt-1">PDF · PNG · JPG  ·  max 5 pages per batch</p>
                                <input type="file" id="file-upload" class="hidden" accept=".pdf,.png,.jpg,.jpeg" onchange="document.getElementById('file-label').textContent=this.files[0]?.name||'Click to upload'">
                            </div>
                            <div class="mb-4">
                                <label class="block text-xs font-semibold text-slate-500 dark:text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-1">Source / Question Bank <span class="text-red-400">*</span></label>
                                <div class="flex gap-2">
                                    <select id="ingest-source-select" class="form-input flex-1" onchange="app.onSourceSelectChange()">
                                        <option value="">— Select existing source —</option>
                                        ${sources.map(s=>`<option value="${s}">${s}</option>`).join('')}
                                        <option value="__new__">+ Add new source…</option>
                                    </select>
                                </div>
                                <input type="text" id="ingest-source-new" class="form-input mt-2 hidden" placeholder="e.g. Mark Meldrum, CFAI Premium Pack, Schweser QBank…">
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                                <div>
                                    <label class="block text-xs font-semibold text-slate-500 dark:text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-1">Topic Area <span class="text-red-400">*</span></label>
                                    <select id="ingest-subject" class="form-input" onchange="app.onSubjectChange()">
                                        <option value="">— Select topic area —</option>
                                        ${SUBJECT_LIST.map(s=>`<option value="${s}">${s}</option>`).join('')}
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs font-semibold text-slate-500 dark:text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-1">Learning Module <span class="text-slate-300">(optional)</span></label>
                                    <select id="ingest-lm" class="form-input" disabled>
                                        <option value="">— Select topic area first —</option>
                                    </select>
                                    <p class="text-xs text-slate-400 dark:text-zinc-500 mt-1">Leave blank if file spans multiple LMs</p>
                                </div>
                            </div>
                            <button onclick="app.processFile()" class="btn-success w-full justify-center py-3">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                                Extract Questions with Gemini AI
                            </button>
                            <div id="ingest-status" class="mt-4"></div>
                        </div>
                    </div>
                </div>
            </div>`;
    },

    onSourceSelectChange: function() {
        const sel=document.getElementById('ingest-source-select');
        document.getElementById('ingest-source-new').classList.toggle('hidden', sel.value!=='__new__');
    },
    onSubjectChange: function() {
        const s=document.getElementById('ingest-subject').value;
        const lmSel=document.getElementById('ingest-lm');
        if (s&&CFA_CURRICULUM[s]) { lmSel.innerHTML=lmOptionsForSubject(s); lmSel.disabled=false; }
        else { lmSel.innerHTML='<option value="">— Select topic area first —</option>'; lmSel.disabled=true; }
    },
    saveApiKey: function() {
        const k=document.getElementById('api-key').value.trim();
        if(k){ localStorage.setItem('geminiApiKey',k); showToast('API key saved','success'); this.renderIngestion(document.getElementById('app-container')); }
    },
    processFile: async function() {
        const apiKey=localStorage.getItem('geminiApiKey');
        if(!apiKey){ showToast('Please save your Gemini API key first','error'); return; }
        const fileInput=document.getElementById('file-upload');
        const srcSel=document.getElementById('ingest-source-select').value;
        const srcNew=document.getElementById('ingest-source-new').value.trim();
        const source=srcSel==='__new__'?srcNew:srcSel;
        const subject=document.getElementById('ingest-subject').value;
        const lm=document.getElementById('ingest-lm').value;
        if(!source)  { showToast('Please select or enter a source','error'); return; }
        if(!subject) { showToast('Please select a topic area','error'); return; }
        if(!fileInput.files.length){ showToast('Please select a file','error'); return; }
        const file=fileInput.files[0], statusDiv=document.getElementById('ingest-status');
        statusDiv.innerHTML=`<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-zinc-300"><div class="spinner w-5 h-5"></div> Processing…</div>`;
        try {
            let imgs=[];
            if(file.type==='application/pdf'){ statusDiv.innerHTML=`<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-zinc-300"><div class="spinner w-5 h-5"></div> Converting PDF pages…</div>`; imgs=await this.convertPdfToImages(file); }
            else if(file.type.startsWith('image/')){ const b64=await this.fileToBase64(file); imgs=[b64.split(',')[1]]; }
            else throw new Error('Unsupported file type');
            statusDiv.innerHTML=`<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-zinc-300"><div class="spinner w-5 h-5"></div> Asking Gemini… (${imgs.length} page${imgs.length>1?'s':''})</div>`;
            const extracted=await this.callGeminiAPI(apiKey,imgs,subject,lm);
            for(const q of extracted) await db.questions.add({ source, subject, lm: q.lm||lm||'', text:q.text, options:q.options, correctAnswer:q.correctAnswer, explanation:q.explanation||'' });
            statusDiv.innerHTML=`<div class="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-xl p-3 text-sm font-medium"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Added ${extracted.length} questions to <strong>${source}</strong></div>`;
            showToast(`${extracted.length} questions added to "${source}"`,'success');
            await this.updateSidebarStats();
        } catch(err) {
            console.error(err);
            statusDiv.innerHTML=`<div class="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-xl p-3 text-sm font-medium"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg> Error: ${err.message}</div>`;
        }
    },
    fileToBase64: file => new Promise((res,rej)=>{ const r=new FileReader(); r.readAsDataURL(file); r.onload=()=>res(r.result); r.onerror=rej; }),
    convertPdfToImages: async function(file) {
        const pdf=await pdfjsLib.getDocument({data:await file.arrayBuffer()}).promise, out=[];
        for(let i=1;i<=Math.min(pdf.numPages,5);i++){
            const page=await pdf.getPage(i),vp=page.getViewport({scale:1.8}),cv=document.createElement('canvas');
            cv.width=vp.width; cv.height=vp.height;
            await page.render({canvasContext:cv.getContext('2d'),viewport:vp}).promise;
            out.push(cv.toDataURL('image/jpeg',0.85).split(',')[1]);
        }
        return out;
    },
    callGeminiAPI: async function(apiKey,imgs,subject,lm) {
        const lmList=lm?'':(CFA_CURRICULUM[subject]||[]).map((l,i)=>`${i}. ${l}`).join('\n');
        const prompt=`You are an expert at extracting CFA Level I multiple-choice questions from exam documents.
Topic area: "${subject}".${lm?`\nLearning Module: "${lm}".`:`\nIf determinable, assign the question to one of these 2026 CFA LMs:\n${lmList}\nOtherwise leave "lm" as "".`}
Return ONLY a valid JSON array (no markdown). Each element:
- "text": full question stem
- "options": answer choices array (no A./B./C. prefix)
- "correctAnswer": 0-based index or null
- "explanation": explanation string or ""
- "lm": LM name if determinable, else ""`;
        const parts=[{text:prompt}];
        imgs.forEach(img=>parts.push({inlineData:{mimeType:'image/jpeg',data:img}}));
        const res=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
            {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{parts}],generationConfig:{temperature:0.1}})});
        if(!res.ok){const e=await res.json();throw new Error(e.error?.message||'Gemini API error');}
        const data=await res.json();
        let raw=data.candidates[0].content.parts[0].text;
        raw=raw.replace(/^```json\s*/i,'').replace(/```\s*$/i,'').trim();
        return JSON.parse(raw);
    },

    // ══════════════════════════════════════════
    // SETTINGS
    // ══════════════════════════════════════════
    renderSettings: async function(c) {
        const qCount=await db.questions.count(), aCount=await db.attempts.count();
        const allQ=await db.questions.toArray();
        const sources=[...new Set(allQ.map(q=>q.source||'Unknown'))].sort();
        const flagCount=getFlaggedIds().size;
        c.innerHTML=`
            <div class="max-w-2xl mx-auto space-y-6">
                <div class="stat-card">
                    <h3 class="font-bold text-slate-800 dark:text-white mb-4">Question Bank</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div class="bg-blue-50 rounded-xl p-4 text-center"><p class="text-3xl font-bold text-blue-700">${qCount}</p><p class="text-xs text-slate-500 dark:text-zinc-400 dark:text-zinc-500 mt-1">Questions</p></div>
                        <div class="bg-purple-50 rounded-xl p-4 text-center"><p class="text-3xl font-bold text-purple-700">${aCount}</p><p class="text-xs text-slate-500 dark:text-zinc-400 dark:text-zinc-500 mt-1">Attempts</p></div>
                        <div class="bg-yellow-50 rounded-xl p-4 text-center"><p class="text-3xl font-bold text-yellow-600">${flagCount}</p><p class="text-xs text-slate-500 dark:text-zinc-400 dark:text-zinc-500 mt-1">Flagged</p></div>
                    </div>
                    <h4 class="text-sm font-semibold text-slate-600 dark:text-zinc-300 mb-3">By Source</h4>
                    <div class="space-y-2 mb-6">
                        ${sources.map(s=>{
                            const qs=allQ.filter(q=>(q.source||'Unknown')===s);
                            return `<div class="flex items-center justify-between p-3 bg-slate-50 dark:bg-zinc-900 rounded-xl">
                                <div><p class="text-sm font-semibold text-slate-700 dark:text-zinc-200">${s}</p>
                                    <p class="text-xs text-slate-400 dark:text-zinc-500">${[...new Set(qs.map(q=>q.subject))].join(', ')}</p>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="text-sm font-bold text-slate-600 dark:text-zinc-300">${qs.length} q</span>
                                    <button onclick="app.deleteSource('${s.replace(/'/g,"\\'")}')\" class="text-xs text-red-400 hover:text-red-600">Delete</button>
                                </div></div>`;
                        }).join('')}
                    </div>
                    <div class="flex gap-3">
                        <button onclick="app.exportData()" class="btn-primary flex-1 justify-center">Export Backup</button>
                        <label class="btn-primary flex-1 justify-center cursor-pointer" style="background:linear-gradient(135deg,#7c3aed,#6d28d9);">Import Backup
                            <input type="file" class="hidden" accept=".json" onchange="app.importData(event)">
                        </label>
                    </div>
                    <p class="text-xs text-slate-400 dark:text-zinc-500 mt-3">⚠️ Data lives in your browser. Export regularly.</p>
                </div>
                
                      <div class="bg-white dark:bg-zinc-950 rounded-2xl p-6 border border-slate-200 dark:border-zinc-800 shadow-sm">
                          <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-4">Bulk Import CSV</h3>
                          <p class="text-sm text-slate-600 dark:text-zinc-300 mb-4">Upload a CSV file with columns: <strong>Source, Subject, LM, Text, Option A, Option B, Option C, Correct Answer, Explanation</strong>.</p>
                          <input type="file" id="csv-upload" accept=".csv" class="hidden" onchange="app.handleCSVUpload(event)">
                          <button onclick="document.getElementById('csv-upload').click()" class="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 text-sm font-semibold">
                              Select CSV File
                          </button>
                      </div>

                <div class="stat-card border border-red-200 dark:border-red-900/50 bg-[#fffaf9] dark:bg-red-950/10">
                    <h3 class="font-bold text-red-700 dark:text-red-400 mb-3">Danger Zone</h3>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
                            <div><p class="text-sm font-semibold text-slate-700 dark:text-zinc-200">Clear Flags</p><p class="text-xs text-slate-400 dark:text-zinc-400">Remove all flagged question markers.</p></div>
                            <button onclick="app.clearFlags()" class="btn-danger">Clear</button>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
                            <div><p class="text-sm font-semibold text-slate-700 dark:text-zinc-200">Reset Progress</p><p class="text-xs text-slate-400 dark:text-zinc-400">Delete all attempt history. Questions remain.</p></div>
                            <button onclick="app.clearAttempts()" class="btn-danger">Reset</button>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
                            <div><p class="text-sm font-semibold text-slate-700 dark:text-zinc-200">Clear All Data</p><p class="text-xs text-slate-400 dark:text-zinc-400">Delete all questions AND attempts permanently.</p></div>
                            <button onclick="app.clearDatabase()" class="btn-danger">Delete All</button>
                        </div>
                    </div>
                </div>
            </div>`;
    },

    
    handleCSVUpload: function(event) {
        const file = event.target.files[0];
        if (!file) return;
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: async (results) => {
                try {
                    let qs = [];
                    for (let row of results.data) {
                        // Normalize keys
                        const keys = Object.keys(row);
                        const getVal = (possibleNames) => {
                            for (let k of keys) {
                                if (possibleNames.includes(k.toLowerCase().trim())) return row[k];
                            }
                            return '';
                        };
                        
                        let text = getVal(['text', 'question', 'q']);
                        if (!text) continue;
                        
                        let source = getVal(['source']);
                        let subject = getVal(['subject']);
                        if (subject.toLowerCase().includes('ethical') && subject.toLowerCase().includes('professional')) {
                            subject = 'Ethical & Professional Standards';
                        }
                        let lm = getVal(['lm', 'learning module']);
                        let optA = getVal(['option a', 'a']);
                        let optB = getVal(['option b', 'b']);
                        let optC = getVal(['option c', 'c']);
                        let explanation = getVal(['explanation', 'exp']);
                        
                        let correctStr = getVal(['correct answer', 'correct', 'answer']).toString().trim().toUpperCase();
                        let correctIdx = 0;
                        if (correctStr === 'B' || correctStr === '1') correctIdx = 1;
                        if (correctStr === 'C' || correctStr === '2') correctIdx = 2;
                        
                        let mockName = getVal(['mock', 'mock name', 'mock_name']);
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
                        });
                    }
                    if (qs.length > 0) {
                        // Deduplicate against existing questions by text
                        const existing = await db.questions.toArray();
                        const existingTexts = new Set(existing.map(q => q.text.trim()));
                        const deduped = qs.filter(q => !existingTexts.has(q.text.trim()));
                        const dupeCount = qs.length - deduped.length;
                        if (deduped.length > 0) {
                            await db.questions.bulkAdd(deduped);
                            let msg = `Imported ${deduped.length} questions!`;
                            if (dupeCount > 0) msg += ` (${dupeCount} duplicates skipped)`;
                            showToast(msg, 'success');
                        } else {
                            showToast(`All ${qs.length} questions already exist — nothing added.`, 'info');
                        }
                        await this.renderSettings(document.getElementById('app-container'));
                        await this.updateSidebarStats();
                    } else {
                        showToast('No valid questions found in CSV', 'error');
                    }
                } catch (e) {
                    console.error(e);
                    showToast('Failed to import CSV: ' + e.message, 'error');
                }
            }
        });
        event.target.value = '';
    },

    deleteSource: async function(sourceName) {
        if(!confirm(`Delete all questions from "${sourceName}"? This cannot be undone.`)) return;
        const ids=(await db.questions.where('source').equals(sourceName).toArray()).map(q=>q.id);
        await db.questions.bulkDelete(ids);
        await db.attempts.where('source').equals(sourceName).delete();
        showToast(`Deleted "${sourceName}"`,'info');
        await this.renderSettings(document.getElementById('app-container'));
        await this.updateSidebarStats();
    },
    exportData: async function() {
        const [questions,attempts]=await Promise.all([db.questions.toArray(),db.attempts.toArray()]);
        const blob=new Blob([JSON.stringify({questions,attempts,exportDate:new Date().toISOString()},null,2)],{type:'application/json'});
        const a=document.createElement('a'); a.href=URL.createObjectURL(blob);
        a.download=`cfa_prep_backup_${new Date().toISOString().split('T')[0]}.json`; a.click(); URL.revokeObjectURL(a.href);
        showToast('Backup exported','success');
    },
    importData: async function(event) {
        const file=event.target.files[0]; if(!file)return;
        const reader=new FileReader();
        reader.onload=async e=>{
            try{
                const data=JSON.parse(e.target.result);
                if(data.questions) await db.questions.bulkPut(data.questions);
                if(data.attempts)  await db.attempts.bulkPut(data.attempts);
                showToast('Data imported','success');
                await this.renderSettings(document.getElementById('app-container'));
            } catch{ showToast('Error reading backup file','error'); }
        };
        reader.readAsText(file);
    },
    clearFlags: function() {
        if(!confirm('Remove all flagged question markers?')) return;
        localStorage.removeItem('flaggedQuestions'); showToast('Flags cleared','info');
        this.renderSettings(document.getElementById('app-container'));
    },
    clearAttempts: async function() {
        if(!confirm('Delete all attempt history?')) return;
        await db.attempts.clear(); showToast('Progress reset','info');
        await this.renderSettings(document.getElementById('app-container'));
        await this.updateSidebarStats();
    },
    resetMocks: async function(mockName) {
        const label = mockName ? `"${mockName}"` : 'ALL mock exams';
        if (!confirm(`Reset attempts for ${label}? This cannot be undone.`)) return;
        const allQ = await db.questions.toArray();
        const targetQ = allQ.filter(q => mockName ? q.mockName === mockName : q.mockName);
        const targetIds = new Set(targetQ.map(q => q.id));
        const toDelete = await db.attempts.toArray();
        const ids = toDelete.filter(a => targetIds.has(a.questionId)).map(a => a.id);
        for (const id of ids) await db.attempts.delete(id);
        
        // Also wipe saved progress for this mock
        if (mockName) {
            this.clearMockProgress(mockName, 1);
            this.clearMockProgress(mockName, 2);
        } else {
            Object.keys(localStorage).forEach(k => { if (k.startsWith('cfa_mock_')) localStorage.removeItem(k); });
        }
        
        showToast(`Cleared ${ids.length} attempt${ids.length!==1?'s':''} for ${label}`, 'success');
        await this.renderMocks(document.getElementById('app-container'));
    },

    clearDatabase: async function() {
        if(!confirm('Delete ALL questions and attempts? Cannot be undone!')) return;
        await db.questions.clear(); await db.attempts.clear();
        localStorage.removeItem('flaggedQuestions');
        Object.keys(localStorage).forEach(k => { if (k.startsWith('cfa_mock_')) localStorage.removeItem(k); });
        localStorage.removeItem('cfaSeedVersion');
        await this.seedSampleQuestions(); showToast('Database cleared','info');
        await this.renderSettings(document.getElementById('app-container'));
        await this.updateSidebarStats();
    },
};

window.addEventListener('DOMContentLoaded', () => app.init());
