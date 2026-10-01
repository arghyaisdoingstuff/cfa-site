import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

html = re.sub(r'\?v=\d+', '?v=34', html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
print("Bumped index.html cache")