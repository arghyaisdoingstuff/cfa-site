import re

with open("app.js", "r", encoding="utf-8") as f:
    app = f.read()

# Replace saveAttempt logic
old_saveAttempt = r"""saveAttempt: async function\(selectedIndex, timeTaken, confidence\) \{
        const pa = this\._pendingAttempt; if\(!pa\) return;
        await db\.attempts\.add\(\{ \.\.\.pa, confidence \}\);
        this\._pendingAttempt = null;
        // Disable confidence buttons and show next
        document\.querySelectorAll\('\.confidence-btn'\)\.forEach\(b=>b\.disabled=true\);
        document\.getElementById\('next-btn'\)\.style\.display='inline-flex';
        await this\.updateSidebarStats\(\);
    \},"""

new_saveAttempt = """saveAttempt: async function(selectedIndex, timeTaken, confidence) {
        if(!this._pendingAttempt) return;
        this._pendingAttempt.confidence = confidence;
        
        // Update visual selection state
        document.querySelectorAll('.confidence-btn').forEach(b => {
            b.classList.remove('ring-2', 'ring-offset-2', 'ring-blue-500', 'opacity-100');
            b.classList.add('opacity-50');
            if (b.classList.contains(confidence)) {
                b.classList.remove('opacity-50');
                b.classList.add('ring-2', 'ring-offset-2', 'ring-blue-500', 'opacity-100');
            }
        });
        
        document.getElementById('next-btn').style.display = 'inline-flex';
    },"""

if not re.search(r'saveAttempt:\s*async\s*function', app):
    print("Could not find saveAttempt")

app = re.sub(old_saveAttempt, new_saveAttempt, app)

# Replace nextPracticeQuestion logic
old_next = r"""nextPracticeQuestion: async function\(\) \{
        // If confidence not selected yet, save without it
        if \(this\._pendingAttempt\) \{ await db\.attempts\.add\(this\._pendingAttempt\); this\._pendingAttempt=null; \}
        this\.quizIndex\+\+;
        await this\.renderPracticeQuestion\(document\.getElementById\('app-container'\)\);
    \},"""

new_next = """nextPracticeQuestion: async function() {
        if (this._pendingAttempt) {
            await db.attempts.add(this._pendingAttempt);
            this._pendingAttempt = null;
            await this.updateSidebarStats();
        }
        this.quizIndex++;
        await this.renderPracticeQuestion(document.getElementById('app-container'));
    },"""

app = re.sub(old_next, new_next, app)

# Bump version to force cache refresh
app = re.sub(r"const SEED_VERSION = '.*?';", "const SEED_VERSION = 'v31-confidence-fix';", app)

with open("app.js", "w", encoding="utf-8") as f:
    f.write(app)

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()
html = re.sub(r'\?v=\d+', '?v=31', html)
with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
    
print("Updated app.js and index.html")