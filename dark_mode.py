import os
import re

def swap_colors(text):
    # Backgrounds
    text = re.sub(r'\bbg-slate-100\b', 'bg-slate-900', text)
    text = re.sub(r'\bbg-slate-50/50\b', 'bg-slate-800/50', text)
    text = re.sub(r'\bbg-slate-50\b', 'bg-slate-800', text)
    text = re.sub(r'\bbg-white/80\b', 'bg-slate-950/80', text)
    text = re.sub(r'\bbg-white\b', 'bg-slate-950', text)
    
    # Text
    text = re.sub(r'\btext-slate-800\b', 'text-slate-100', text)
    text = re.sub(r'\btext-slate-900\b', 'text-white', text)
    text = re.sub(r'\btext-slate-700\b', 'text-slate-200', text)
    text = re.sub(r'\btext-slate-600\b', 'text-slate-300', text)
    text = re.sub(r'\btext-slate-500\b', 'text-slate-400', text)
    
    # Borders
    text = re.sub(r'\bborder-slate-200\b', 'border-slate-800', text)
    text = re.sub(r'\bborder-slate-100\b', 'border-slate-800', text)
    text = re.sub(r'\bborder-slate-300\b', 'border-slate-700', text)
    
    # Hovers
    text = re.sub(r'\bhover:bg-slate-50\b', 'hover:bg-slate-800', text)
    text = re.sub(r'\bhover:bg-slate-100\b', 'hover:bg-slate-800', text)
    text = re.sub(r'\bhover:text-slate-900\b', 'hover:text-white', text)
    text = re.sub(r'\bhover:text-slate-600\b', 'hover:text-slate-300', text)
    
    # Prose
    text = re.sub(r'\bprose prose-slate\b', 'prose prose-invert', text)
    
    return text

for file in ["index.html", "app.js"]:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    content = swap_colors(content)
    
    # Bump cache version in index.html just in case
    if file == "index.html":
        content = re.sub(r'\?v=\d+', '?v=35', content)
        
    with open(file, "w", encoding="utf-8") as f:
        f.write(content)
        
print("Color replacement complete for html and js.")