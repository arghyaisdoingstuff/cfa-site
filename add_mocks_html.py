import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Add Mocks tab after Quiz tab
quiz_tab = r'<a href="#" data-view="quiz" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors text-slate-500 hover:text-slate-900 hover:bg-slate-50" onclick="app.navigate\(\'quiz\'\)">.*?</a>'

mocks_tab = """<a href="#" data-view="mocks" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors text-slate-500 hover:text-slate-900 hover:bg-slate-50" onclick="app.navigate('mocks')">
                    <svg class="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                    </svg>
                    Mocks
                </a>"""

match = re.search(quiz_tab, html, re.DOTALL)
if match:
    html = html[:match.end()] + "\n                " + mocks_tab + html[match.end():]
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(html)
    print("Added Mocks tab to index.html")
else:
    print("Could not find Quiz tab in index.html")