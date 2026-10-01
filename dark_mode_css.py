import re

with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

def replace_color(css, original, new):
    return css.replace(original, new)

# General
css = replace_color(css, "background: #fff;", "background: #1e293b;")
css = replace_color(css, "background-color: #fff;", "background-color: #1e293b;")
css = replace_color(css, "border: 1px solid #e2e8f0;", "border: 1px solid #334155;")
css = replace_color(css, "border: 1.5px solid #e2e8f0;", "border: 1.5px solid #334155;")
css = replace_color(css, "color: #334155;", "color: #f1f5f9;")
css = replace_color(css, "color: #1e293b;", "color: #f1f5f9;")

# Stat card
css = replace_color(css, "rgba(0,0,0,0.05)", "rgba(0,0,0,0.3)")

# Option btn
css = replace_color(css, "background: #f8fafc;", "background: #334155;")
css = replace_color(css, "background: #eff6ff;", "background: #1e3a8a;")
css = replace_color(css, "color: #1d4ed8;", "color: #bfdbfe;")
css = replace_color(css, "border-color: #3b82f6;", "border-color: #60a5fa;")
css = replace_color(css, "background: #f0fdf4;", "background: #14532d;")
css = replace_color(css, "color: #15803d;", "color: #86efac;")
css = replace_color(css, "border-color: #22c55e;", "border-color: #4ade80;")
css = replace_color(css, "background: #fef2f2;", "background: #7f1d1d;")
css = replace_color(css, "color: #b91c1c;", "color: #fca5a5;")
css = replace_color(css, "border-color: #ef4444;", "border-color: #f87171;")

# Option letter
css = replace_color(css, "background: #f1f5f9;", "background: #475569;")
css = replace_color(css, "color: #475569;", "color: #cbd5e1;")
css = replace_color(css, "background: #e2e8f0;", "background: #64748b;")

# Flag
css = replace_color(css, "color: #94a3b8;", "color: #94a3b8;")
css = replace_color(css, "background: #fefce8;", "background: #422006;")
css = replace_color(css, "background: #fef3c7;", "background: #78350f;")
css = replace_color(css, "color: #d97706;", "color: #fbbf24;")

# Pause overlay
css = replace_color(css, "rgba(255,255,255,0.82)", "rgba(15,23,42,0.82)")

# Nav cell
css = replace_color(css, "color: #64748b;", "color: #94a3b8;")
css = replace_color(css, "background: #dbeafe;", "background: #1e3a8a;")
css = replace_color(css, "color: #1e40af;", "color: #93c5fd;")

# Nav cell correctness
css = replace_color(css, "background: #dcfce7;", "background: #14532d;")
css = replace_color(css, "color: #166534;", "color: #86efac;")
css = replace_color(css, "background: #fee2e2;", "background: #7f1d1d;")
css = replace_color(css, "color: #991b1b;", "color: #fca5a5;")

# Confidence buttons
css = replace_color(css, "color: #16a34a;", "color: #86efac;")
css = replace_color(css, "background: #dcfce7;", "background: #166534;")
css = replace_color(css, "background: #fee2e2;", "background: #991b1b;")

# Explanation box
css = replace_color(css, "background: #f8faff;", "background: #1e293b;")
css = replace_color(css, "border: 1px solid #dbeafe;", "border: 1px solid #334155;")

# Prose table
css = replace_color(css, "background-color: #f8fafc;", "background-color: #334155;")

# Scrollbar
css = replace_color(css, "background: #cbd5e1;", "background: #475569;")
css = replace_color(css, "background: #94a3b8;", "background: #64748b;")

with open("styles.css", "w", encoding="utf-8") as f:
    f.write(css)

print("Updated styles.css for dark mode")