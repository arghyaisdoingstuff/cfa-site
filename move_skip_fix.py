import re
with open("app.js", "r", encoding="utf-8") as f:
    app = f.read()

target = r'<div class="flex-1 progress-bar-track"><div class="progress-bar-fill" style="width:${progress}%"></div></div>'
replacement = r'<div class="flex-1 progress-bar-track"><div class="progress-bar-fill" style="width:${progress}%"></div></div><button id="skip-btn" onclick="app.skipPracticeQuestion()" class="ml-1 px-3 py-1 text-xs font-semibold text-slate-500 bg-slate-200 hover:bg-slate-300 hover:text-slate-700 rounded-md transition-colors whitespace-nowrap active:scale-95 flex items-center gap-1"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg> Skip</button>'

app = app.replace(target, replacement)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(app)
print("Updated app.js")