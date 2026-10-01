import re

with open("app.js", "r", encoding="utf-8") as f:
    app = f.read()

app = app.replace(
    "    renderExamReview: async function(c) {",
    "    renderExamReview: async function(c) {\n        this.isMock = false;"
)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(app)
print("Updated renderExamReview")