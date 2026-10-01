import re
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

html = re.sub(r'app\.js\?v=\d+', 'app.js?v=30', html)
html = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=30', html)
html = re.sub(r'questions_generated\.js\?v=\d+', 'questions_generated.js?v=30', html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

with open("app.js", "r", encoding="utf-8") as f:
    app = f.read()
app = re.sub(r"const SEED_VERSION = '.*?';", "const SEED_VERSION = 'v30-force-cache-clear';", app)
with open("app.js", "w", encoding="utf-8") as f:
    f.write(app)

print("Bumped cache busters to v=30")