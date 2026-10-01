import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Fix double classes
html = re.sub(r'dark:text-zinc-400 dark:text-zinc-500', 'dark:text-zinc-400', html)
html = re.sub(r'dark:bg-zinc-900/50 dark:bg-zinc-900/50', 'dark:bg-zinc-900/50', html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)