import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Configure Tailwind
tailwind_config = """
    <script>
        tailwind.config = {
            darkMode: 'class',
        }
    </script>
</head>"""
html = html.replace("</head>", tailwind_config)

# Add init logic before anything renders
init_script = """<script>
    if (localStorage.getItem('cfa-theme') === 'dark' || (!('cfa-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
</script>
<body"""
html = re.sub(r'<body', init_script, html)

# Add Toggle Button to Sidebar Bottom
sidebar_bottom = """<div class="px-4 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between">
                <div id="sidebar-stats" class="text-slate-500 dark:text-slate-400 font-medium text-[11px] space-y-1 px-2">
                    <!-- Populated by JS -->
                </div>
                <button onclick="app.toggleTheme()" class="p-2 rounded-lg bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors shadow-sm">
                    <svg id="theme-icon-light" class="w-4 h-4 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                    <svg id="theme-icon-dark" class="w-4 h-4 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
                </button>
            </div>"""

old_sidebar_bottom = r"""<div class="px-4 py-4 border-t border-slate-100 bg-slate-50/50">
                <div id="sidebar-stats" class="text-slate-500 font-medium text-\[11px\] space-y-1 px-2">
                    <!-- Populated by JS -->
                </div>
            </div>"""

html = re.sub(old_sidebar_bottom, sidebar_bottom, html)

# Map light classes to include dark mode
replacements = {
    'bg-slate-100': 'bg-slate-100 dark:bg-[#0b1120]',
    'bg-white': 'bg-white dark:bg-slate-900',
    'bg-white/80': 'bg-white/80 dark:bg-slate-900/80',
    'bg-slate-50': 'bg-slate-50 dark:bg-slate-800',
    'bg-slate-50/50': 'bg-slate-50/50 dark:bg-slate-800/50',
    
    'text-slate-800': 'text-slate-800 dark:text-slate-50',
    'text-slate-700': 'text-slate-700 dark:text-slate-200',
    'text-slate-600': 'text-slate-600 dark:text-slate-300',
    'text-slate-500': 'text-slate-500 dark:text-slate-400',
    'text-slate-400': 'text-slate-400 dark:text-slate-500',
    
    'border-slate-200': 'border-slate-200 dark:border-slate-700',
    'border-slate-100': 'border-slate-100 dark:border-slate-800',
    'border-slate-300': 'border-slate-300 dark:border-slate-600',
    
    'hover:bg-slate-50': 'hover:bg-slate-50 dark:hover:bg-slate-800',
    'hover:bg-slate-100': 'hover:bg-slate-100 dark:hover:bg-slate-800',
    'hover:text-slate-900': 'hover:text-slate-900 dark:hover:text-white',
    
    'prose-slate': 'prose-slate dark:prose-invert',
}

def apply_dark_classes(text):
    for light, combo in replacements.items():
        # Only replace standalone classes
        text = re.sub(rf'\b{re.escape(light)}\b(?! dark:)', combo, text)
    return text

html = apply_dark_classes(html)
# Bump version
html = re.sub(r'\?v=\d+', '?v=36', html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
print("Updated index.html")

with open("app.js", "r", encoding="utf-8") as f:
    app = f.read()

app = apply_dark_classes(app)

# Inject toggleTheme into app
app = app.replace(
    "toggleSidebar: function() {",
    """toggleTheme: function() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('cfa-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('cfa-theme', 'dark');
        }
    },
    
    toggleSidebar: function() {"""
)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(app)
print("Updated app.js")
