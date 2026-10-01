import re

# 1. Update index.html
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Add marked.js
if "marked.min.js" not in html:
    html = html.replace(
        '<script src="https://cdn.tailwindcss.com"></script>',
        '<script src="https://cdn.tailwindcss.com?plugins=typography"></script>\n    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>'
    )
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(html)
    print("index.html updated")

# 2. Update app.js
with open("app.js", "r", encoding="utf-8") as f:
    app = f.read()

# Replace q.text render logic in practice mode
app = re.sub(
    r'<p class="text-slate-800 font-medium leading-relaxed text-base mb-6" id="question-text">\$\{q\.text\}</p>',
    r'<div class="prose prose-slate max-w-none text-slate-800 font-medium leading-relaxed text-base mb-6 prose-p:my-1 prose-table:my-4 prose-th:p-2 prose-td:p-2" id="question-text">${typeof marked !== "undefined" ? marked.parse(q.text) : q.text}</div>',
    app
)

# Replace q.text render logic in exam mode
app = re.sub(
    r'<p class="text-slate-800 font-medium leading-relaxed text-base mb-6">\$\{q\.text\}</p>',
    r'<div class="prose prose-slate max-w-none text-slate-800 font-medium leading-relaxed text-base mb-6 prose-p:my-1 prose-table:my-4 prose-th:p-2 prose-td:p-2">${typeof marked !== "undefined" ? marked.parse(q.text) : q.text}</div>',
    app
)

# Replace q.text in review/results
app = re.sub(
    r'<p class="text-slate-800 font-medium mb-4">\$\{q\.text\}</p>',
    r'<div class="prose prose-slate max-w-none text-slate-800 font-medium mb-4 prose-p:my-1 prose-table:my-2 prose-th:p-2 prose-td:p-2">${typeof marked !== "undefined" ? marked.parse(q.text) : q.text}</div>',
    app
)

# Replace q.explanation
app = re.sub(
    r'<p class="text-slate-600 text-sm leading-relaxed">\$\{q\.explanation\}</p>',
    r'<div class="prose prose-sm prose-slate max-w-none text-slate-600 leading-relaxed prose-p:my-1 prose-table:my-2 prose-th:p-2 prose-td:p-2">${typeof marked !== "undefined" ? marked.parse(q.explanation) : q.explanation}</div>',
    app
)

# Bump version
app = re.sub(r"const SEED_VERSION = '.*?';", "const SEED_VERSION = 'v20-markdown';", app)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(app)
print("app.js updated")

# Bump cache in index
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()
html = re.sub(r'\?v=\d+', '?v=21', html)
with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)