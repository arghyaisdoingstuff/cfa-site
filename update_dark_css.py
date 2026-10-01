import re

with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

# Only modify the .dark section
parts = css.split("/* =========================================")
if len(parts) > 1:
    dark_css = parts[1]
    
    # Backgrounds and borders
    dark_css = dark_css.replace("#1e293b", "#18181b") # slate-800 -> zinc-900
    dark_css = dark_css.replace("#334155", "#27272a") # slate-700 -> zinc-800
    dark_css = dark_css.replace("#475569", "#3f3f46") # slate-600 -> zinc-700
    dark_css = dark_css.replace("#64748b", "#52525b") # slate-500 -> zinc-500
    
    # Text colors
    dark_css = dark_css.replace("#94a3b8", "#a1a1aa") # slate-400 -> zinc-400
    dark_css = dark_css.replace("#cbd5e1", "#d4d4d8") # slate-300 -> zinc-300
    dark_css = dark_css.replace("#f1f5f9", "#f4f4f5") # slate-100 -> zinc-100
    
    # Overlays
    dark_css = dark_css.replace("rgba(15,23,42,0.85)", "rgba(0,0,0,0.85)")
    
    css = parts[0] + "/* =========================================" + dark_css
    
    with open("styles.css", "w", encoding="utf-8") as f:
        f.write(css)
    print("Updated styles.css with high contrast dark mode")
else:
    print("Dark mode section not found")