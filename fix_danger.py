import re

with open("app.js", "r", encoding="utf-8") as f:
    app = f.read()

old_danger_zone = """                <div class="stat-card border border-red-200" style="background:#fffaf9;">
                    <h3 class="font-bold text-red-700 mb-3">Danger Zone</h3>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between p-3 bg-red-50 rounded-xl">
                            <div><p class="text-sm font-semibold text-slate-700 dark:text-zinc-200">Clear Flags</p><p class="text-xs text-slate-400 dark:text-zinc-500">Remove all flagged question markers.</p></div>
                            <button onclick="app.clearFlags()" class="btn-danger">Clear</button>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-red-50 rounded-xl">
                            <div><p class="text-sm font-semibold text-slate-700 dark:text-zinc-200">Reset Progress</p><p class="text-xs text-slate-400 dark:text-zinc-500">Delete all attempt history. Questions remain.</p></div>
                            <button onclick="app.clearAttempts()" class="btn-danger">Reset</button>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-red-50 rounded-xl">
                            <div><p class="text-sm font-semibold text-slate-700 dark:text-zinc-200">Clear All Data</p><p class="text-xs text-slate-400 dark:text-zinc-500">Delete all questions AND attempts permanently.</p></div>
                            <button onclick="app.clearDatabase()" class="btn-danger">Delete All</button>
                        </div>
                    </div>
                </div>"""

new_danger_zone = """                <div class="stat-card border border-red-200 dark:border-red-900/50 bg-[#fffaf9] dark:bg-red-950/10" style="background:none;">
                    <h3 class="font-bold text-red-700 dark:text-red-400 mb-3">Danger Zone</h3>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
                            <div><p class="text-sm font-semibold text-slate-700 dark:text-zinc-200">Clear Flags</p><p class="text-xs text-slate-400 dark:text-zinc-400">Remove all flagged question markers.</p></div>
                            <button onclick="app.clearFlags()" class="btn-danger">Clear</button>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
                            <div><p class="text-sm font-semibold text-slate-700 dark:text-zinc-200">Reset Progress</p><p class="text-xs text-slate-400 dark:text-zinc-400">Delete all attempt history. Questions remain.</p></div>
                            <button onclick="app.clearAttempts()" class="btn-danger">Reset</button>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
                            <div><p class="text-sm font-semibold text-slate-700 dark:text-zinc-200">Clear All Data</p><p class="text-xs text-slate-400 dark:text-zinc-400">Delete all questions AND attempts permanently.</p></div>
                            <button onclick="app.clearDatabase()" class="btn-danger">Delete All</button>
                        </div>
                    </div>
                </div>"""

# Remove style="background:none;" to be clean, but I can use tailwind only. Let's fix new_danger_zone properly
new_danger_zone = new_danger_zone.replace(' style="background:none;"', '')

if old_danger_zone in app:
    app = app.replace(old_danger_zone, new_danger_zone)
    with open("app.js", "w", encoding="utf-8") as f:
        f.write(app)
    print("Fixed Danger Zone")
else:
    print("Danger zone block not found.")