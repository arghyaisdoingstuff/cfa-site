import re

# 1. UPDATE STYLES.CSS
with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

# Replace .nav-link.active styles
css = re.sub(
    r'\.nav-link\.active\s*\{\s*background:\s*rgba\(255,255,255,0\.12\);\s*color:\s*#fff;\s*font-weight:\s*600;\s*\}',
    '.nav-link.active { background: #f1f5f9; color: #0f172a; font-weight: 600; }',
    css
)
css = re.sub(
    r'\.nav-link\.active\s*svg\s*\{\s*color:\s*#f5c842;\s*\}',
    '.nav-link.active svg { color: #3b82f6; }',
    css
)
with open("styles.css", "w", encoding="utf-8") as f:
    f.write(css)

# 2. UPDATE INDEX.HTML
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Fix Sidebar
sidebar_old = r'<aside id="sidebar" class="fixed inset-y-0 left-0 z-30 w-64 transform -translate-x-full transition-transform duration-300 md:translate-x-0 md:static md:flex-shrink-0 flex flex-col" style="background: linear-gradient\(180deg, #0f1829 0%, #1a2744 100%\);">.*?</aside>'
sidebar_new = """<aside id="sidebar" class="fixed inset-y-0 left-0 z-30 w-64 transform -translate-x-full transition-transform duration-300 md:translate-x-0 md:static md:flex-shrink-0 flex flex-col bg-white border-r border-slate-200">
            <!-- Logo -->
            <div class="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-600 text-white shadow-sm">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <div>
                        <p class="text-slate-800 font-bold text-sm tracking-tight leading-tight">CFA Prep</p>
                        <p class="text-slate-500 text-[10px] uppercase font-semibold tracking-wider">Dashboard</p>
                    </div>
                </div>
                <button onclick="app.toggleSidebar()" class="md:hidden text-slate-400 hover:text-slate-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
            </div>

            <!-- Nav Links -->
            <nav class="flex-1 px-3 py-4 space-y-1">
                <a href="#" onclick="app.navigate('dashboard')" data-view="dashboard" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 text-sm font-medium">
                    <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                    Dashboard
                </a>
                <a href="#" onclick="app.navigate('quiz')" data-view="quiz" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 text-sm font-medium">
                    <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2-2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                    Practice Quiz
                </a>
                <a href="#" onclick="app.navigate('settings')" data-view="settings" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 text-sm font-medium">
                    <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    Settings
                </a>
            </nav>

            <!-- Bottom user info -->
            <div class="px-4 py-4 border-t border-slate-100 bg-slate-50/50">
                <div id="sidebar-stats" class="text-slate-500 font-medium text-[11px] space-y-1 px-2">
                    <!-- Populated by JS -->
                </div>
            </div>
        </aside>"""
html = re.sub(sidebar_old, sidebar_new, html, flags=re.DOTALL)

# Fix Topbar
topbar_old = r'<header class="bg-white border-b border-slate-200 px-4 md:px-8 py-4 flex items-center justify-between flex-shrink-0 flex-wrap gap-4">.*?</header>'
topbar_new = """<header class="bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 md:px-8 py-3 flex items-center justify-between flex-shrink-0 sticky top-0 z-10">
                <div class="flex items-center min-w-0">
                    <button onclick="app.toggleSidebar()" class="md:hidden p-2 -ml-2 mr-2 text-slate-500 hover:bg-slate-100 rounded-lg flex-shrink-0"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg></button>
                    <div class="truncate">
                        <h1 id="page-title" class="text-lg md:text-xl font-bold text-slate-800 truncate">Dashboard</h1>
                        <p id="page-subtitle" class="text-xs md:text-sm text-slate-500 hidden sm:block truncate">Track your performance</p>
                    </div>
                </div>
                <div class="flex items-center gap-2 md:gap-3 flex-shrink-0">
                    <div id="timer-display" class="hidden items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full">
                        <svg class="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        <span id="timer-text" class="text-slate-700 font-mono font-semibold text-xs md:text-sm">0:00</span>
                    </div>
                    <button id="topbar-pause" onclick="app.togglePause()" class="pause-btn hidden text-xs font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 shadow-sm" style="display:none;">
                        Pause
                    </button>
                    <button onclick="app.navigate('quiz')" class="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-white rounded-lg transition-all duration-200 hover:opacity-90 active:scale-95 shadow-sm bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                        <span class="hidden sm:inline">Start Quiz</span>
                        <span class="sm:hidden">Start</span>
                    </button>
                </div>
            </header>"""
html = re.sub(topbar_old, topbar_new, html, flags=re.DOTALL)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("UI Redesign complete!")