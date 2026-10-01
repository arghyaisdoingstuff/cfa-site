import re
with open("app.js", "r", encoding="utf-8") as f:
    app = f.read()

# Remove the old skip button
old_skip = r'<button id="skip-btn" onclick="app\.skipPracticeQuestion\(\)" class="w-full text-center text-sm font-semibold text-slate-400 hover:text-slate-600 py-3 mt-4 border border-dashed border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">Skip for now</button>'
app = re.sub(old_skip, '', app)

# Add the new skip button to the progress bar container
target = r'<div class="flex-1 progress-bar-track"><div class="progress-bar-fill" style="width:\$\{progress\}%"></div></div>'
replacement = r'<div class="flex-1 progress-bar-track"><div class="progress-bar-fill" style="width:${progress}%"></div></div>\n                    <button id="skip-btn" onclick="app.skipPracticeQuestion()" class="ml-1 px-3 py-1 text-xs font-semibold text-slate-500 bg-slate-200 hover:bg-slate-300 hover:text-slate-700 rounded-md transition-colors whitespace-nowrap active:scale-95 flex items-center gap-1"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg> Skip</button>'

app = app.replace(target, replacement)

# Ensure the submit check handles the new skip button id by doing display:none
# That is already handled: const skipBtn = document.getElementById("skip-btn"); if(skipBtn) skipBtn.style.display = "none";
# Wait, if we hide the skip button on answer, it might collapse the progress bar layout slightly if it's display none. Let's make it visibility:hidden instead.
app = app.replace('skipBtn.style.display = "none"', 'skipBtn.style.visibility = "hidden"')

# Bump version
app = re.sub(r"const SEED_VERSION = '.*?';", "const SEED_VERSION = 'v21-skip-btn';", app)
with open("app.js", "w", encoding="utf-8") as f:
    f.write(app)

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()
html = re.sub(r'\?v=\d+', '?v=22', html)
with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
print("Updated app.js")