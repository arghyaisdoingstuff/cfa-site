import re

with open("app.js", "r", encoding="utf-8") as f:
    app = f.read()

old_exam_header = """<div class="flex items-center gap-2 flex-wrap">
                                ${subjectPill(q.subject)}
                                ${q.lm?`<span class="text-xs text-slate-400">${q.lm}</span>`:''}
                            </div>
                            <div class="flex items-center gap-2">
                                ${sourcePill(q.source||'Unknown')}"""

new_exam_header = """<div class="flex items-center gap-2 flex-wrap">
                                ${this.isMock ? '<span class="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Mock Exam</span>' : subjectPill(q.subject)}
                                ${this.isMock ? '' : (q.lm?`<span class="text-xs text-slate-400">${q.lm}</span>`:'')}
                            </div>
                            <div class="flex items-center gap-2">
                                ${this.isMock ? '' : sourcePill(q.source||'Unknown')}"""

if old_exam_header in app:
    app = app.replace(old_exam_header, new_exam_header)
    with open("app.js", "w", encoding="utf-8") as f:
        f.write(app)
    print("Replaced exam header")
else:
    print("Old exam header not found")