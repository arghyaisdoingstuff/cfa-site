import re

with open("app.js", "r", encoding="utf-8") as f:
    app = f.read()

# Add the renderMarkdown function at the top of app.js (after the first line or strict mode)
func_str = """
window.renderMarkdown = function(text) {
    if (!text) return '';
    let processed = text.replace(/(?:^[ \\t]*\\|.*\\|[ \\t]*\\n?)+/gm, (match) => {
        const lines = match.trim().split('\\n');
        const hasDelimiter = lines.some(line => /^[\\s|:\\-]+$/.test(line) && line.includes('-'));
        if (hasDelimiter) return match;
        
        let maxCols = 0;
        lines.forEach(line => {
            const cols = (line.match(/\\|/g) || []).length - 1;
            if (cols > maxCols) maxCols = cols;
        });
        if (maxCols < 1) return match;
        
        const header = '|' + Array(maxCols).fill('   ').join('|') + '|';
        const delimiter = '|' + Array(maxCols).fill('---').join('|') + '|';
        
        return '\\n' + header + '\\n' + delimiter + '\\n' + lines.join('\\n') + '\\n';
    });
    return typeof marked !== "undefined" ? marked.parse(processed) : processed;
};
"""

app = app.replace("const CFA_CURRICULUM = {", func_str + "\nconst CFA_CURRICULUM = {")

with open("app.js", "w", encoding="utf-8") as f:
    f.write(app)

print("Injected renderMarkdown")