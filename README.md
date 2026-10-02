# 🎓 2026 CFA® Level I Prep — Web Application

A high-performance, local-first web application designed for candidates preparing for the **2026 CFA® Level I Exam**. Built with vanilla JavaScript, IndexedDB, and Tailwind CSS, this app provides an intuitive, distraction-free environment for practicing questions and taking timed mock exams.

---

## ✨ Features & Functionality

### 📚 Extensive Question Bank
* **Curriculum Coverage:** Covers all 10 topic areas aligned with the 2026 CFA Level I curriculum (Ethical & Professional Standards, Quantitative Methods, Economics, Financial Statement Analysis, Corporate Issuers, Equity Investments, Fixed Income, Derivatives, Alternative Investments, and Portfolio Management).
* **Learning Module (LM) Mapping:** Filter and track progress down to specific Learning Modules (LM1–LM16).
* **6 Full-Length Mock Exams:** Simulated 2-session exam experiences with saved state resumption, persistent timers, and question navigators.

### 🎯 Practice & Exam Modes
* **Practice Mode:** Interactive study mode with immediate feedback, detailed explanations, and 3-tier confidence tracking (*Sure*, *Unsure*, *Guessing*).
* **Exam Mode:** Simulates official exam conditions with deferred grading, unanswered question warnings, flag-for-review capabilities, and a grid navigator.
* **Keyboard Shortcuts:**
  * <kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> — Select option choice
  * <kbd>Enter</kbd> / <kbd>→</kbd> — Confirm / Next question
  * <kbd>P</kbd> — Pause / resume session timer
  * <kbd>F</kbd> — Flag question for review

### 📊 Performance Analytics
* **Interactive Dashboard:** Powered by Chart.js for visualizing topic-wise accuracy, correct/incorrect splits, time per question, and consecutive study day streaks.
* **Focus Areas:** Automatically surfaces your weakest topic areas (subjects with $\ge 2$ attempts under 70% accuracy).

### 💾 Data Management & Privacy
* **Local-First & Offline Ready:** Built on Dexie.js (IndexedDB). All attempt history, custom imported questions, and flagged markers remain strictly in your browser.
* **Bulk Backup & Restore:** Export complete database backups as `.json` files or import custom question banks via standard `.csv` files.
* **Dark Mode Support:** Full dark theme support with automatic system preference detection.

---

## 🏗️ Architecture & Security

| Component | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5, Vanilla JS (ES6+), Tailwind CSS | Zero-dependency, sub-millisecond DOM rendering |
| **Storage** | Dexie.js (IndexedDB) + `localStorage` | Client-side database for questions, attempts, and state |
| **Edge Security** | Cloudflare Pages Middleware | Edge-level IP/subnet filtering (`functions/_middleware.js`) |

### Security Model
* **Zero Backend Database:** There is no centralized server or user database. Your study data cannot be leaked or breached online.
* **Client-Side Storage:** Practice attempt statistics and flagged questions exist strictly within your browser's local storage.

---

## 📁 Repository Structure

```text
├── index.html                  # Single-page app entrypoint
├── app.js                      # Core state machine, routing, and UI rendering logic
├── styles.css                  # Custom styling, dark mode rules, and component themes
├── functions/
│   └── _middleware.js          # Cloudflare Pages edge middleware (IP/subnet blocklist)
└── content/
    ├── questions/              # Pre-bundled static question banks (.js)
    └── mocks/                  # Pre-bundled full mock exams (.js & .csv)
```

---

## 🚀 Deployment

Hosted on **Cloudflare Pages** with continuous deployment.

1. Any push to `main` triggers a direct deployment on Cloudflare's global edge network in seconds.
2. **Build Settings:**
   * **Framework Preset:** None (Static HTML/JS)
   * **Build Command:** *(Leave empty)*
   * **Build Output Directory:** `/`

---

## 📜 License & Disclaimer

*CFA Institute does not endorse, promote, or warrant the accuracy or quality of the products or services offered by this application. CFA® and Chartered Financial Analyst® are registered trademarks owned by CFA Institute.*