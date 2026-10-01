import re

# Update index.html cache
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

html = re.sub(r'questions_generated\.js\?v=\d+', 'questions_generated.js?v=38', html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

# Update app.js SEED_VERSION
with open("app.js", "r", encoding="utf-8") as f:
    app = f.read()

app = re.sub(r"const SEED_VERSION = '.*?';", "const SEED_VERSION = 'v38-mock-1';", app)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(app)

print("Bumped cache and seed versions.")