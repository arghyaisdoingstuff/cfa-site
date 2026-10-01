import re
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# bump styles.css?v=2
html = re.sub(r'href="styles\.css(\?v=\d+)?"', 'href="styles.css?v=20"', html)
html = re.sub(r'\?v=\d+', '?v=20', html) # general bump

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)