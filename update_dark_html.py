import re

def replace_dark_classes(content):
    # Backgrounds
    content = content.replace("dark:bg-[#0b1120]", "dark:bg-black")
    content = content.replace("dark:bg-slate-900", "dark:bg-zinc-950")
    content = content.replace("dark:bg-slate-800", "dark:bg-zinc-900")
    
    # Borders
    content = content.replace("dark:border-slate-800", "dark:border-zinc-800")
    content = content.replace("dark:border-slate-700", "dark:border-zinc-800")
    content = content.replace("dark:border-slate-600", "dark:border-zinc-700")
    
    # Text
    content = content.replace("dark:text-slate-400", "dark:text-zinc-400")
    content = content.replace("dark:text-slate-500", "dark:text-zinc-500")
    content = content.replace("dark:text-slate-300", "dark:text-zinc-300")
    content = content.replace("dark:text-slate-200", "dark:text-zinc-200")
    content = content.replace("dark:text-slate-50", "dark:text-white")
    
    # Hover
    content = content.replace("dark:hover:bg-slate-800", "dark:hover:bg-zinc-800")
    content = content.replace("dark:hover:bg-slate-600", "dark:hover:bg-zinc-800")
    
    return content

for file in ["index.html", "app.js"]:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
        
    content = replace_dark_classes(content)
    
    if file == "index.html":
        content = re.sub(r'\?v=\d+', '?v=37', content)
        
    with open(file, "w", encoding="utf-8") as f:
        f.write(content)

print("Updated HTML and JS")