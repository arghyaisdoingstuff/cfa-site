# CFA Level 1 - Study Dashboard & Quiz App

A lightning-fast, fully static web application designed to help candidates study for the CFA Level 1 exam. 

## 🚀 Features

* **Local-First Architecture:** Built using IndexedDB (via Dexie.js), meaning all your quiz scores, flagged questions, and performance data are stored strictly in your local browser. 100% private, no backend server required, and it works completely offline once loaded!
* **Two Testing Modes:**
  * **Practice Mode:** Receive immediate feedback and detailed explanations after every question.
  * **Exam Mode:** Simulate the real test environment with a timer, navigator, and deferred grading.
* **Smart Dashboard:** Track your overall accuracy, question streaks, and performance breakdown by specific CFA subjects (e.g., Equity Investments, Ethical & Professional Standards).
* **Question Review:** Flag difficult questions for later review and track your confidence levels (Guessing, Unsure, Sure).

## 🛠️ Tech Stack

* **Frontend:** HTML5, Vanilla JavaScript, Tailwind CSS (via CDN)
* **Database:** IndexedDB wrapped with [Dexie.js](https://dexie.org/)
* **Analytics:** [Chart.js](https://www.chartjs.org/) for performance visualization
* **Deployment:** Hosted seamlessly via Cloudflare Pages

## 📦 Deployment

This project is configured for continuous deployment. Any pushes to the `main` branch of this repository will automatically trigger a sub-15-second build and deployment on Cloudflare's global edge network. No build steps or package managers (`npm`) are required.

## 📝 Note on Data Syncing

Because this application leverages a local browser database for speed and privacy, **data does not sync across devices**. Practice sessions taken on a laptop will not reflect on a mobile device, and clearing your browser data will reset your statistics. 