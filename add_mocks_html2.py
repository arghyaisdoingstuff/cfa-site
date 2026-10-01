import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

mocks_tab = """
                <a href="#" onclick="app.navigate('mocks')" data-view="mocks" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 text-sm font-medium">
                    <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    Mock Exams
                </a>"""

html = re.sub(r'(<a href="#" onclick="app\.navigate\(\'quiz\'\)" data-view="quiz".*?</a>)', r'\1' + mocks_tab, html, flags=re.DOTALL)

# Bump css and js version
html = re.sub(r'\?v=\d+', '?v=33', html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
print("Added Mocks tab to index.html")