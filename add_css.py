with open("styles.css", "a", encoding="utf-8") as f:
    f.write("""

/* =========================================
   DARK MODE OVERRIDES (using .dark class)
   ========================================= */

.dark .flag-btn {
    background: #1e293b;
    border-color: #334155;
    color: #94a3b8;
}
.dark .flag-btn:hover { border-color: #f59e0b; color: #fbbf24; background: #422006; }
.dark .flag-btn.flagged { border-color: #f59e0b; color: #f59e0b; background: #78350f; }

.dark .quiz-paused-overlay { background: rgba(15,23,42,0.85); }

.dark .pause-btn { background: #1e293b; border-color: #334155; color: #94a3b8; }
.dark .pause-btn:hover { border-color: #475569; background: #334155; }
.dark .pause-btn.paused { border-color: #3b82f6; color: #60a5fa; background: #1e3a8a; }

.dark .nav-cell { background: #334155; color: #94a3b8; }
.dark .nav-cell:hover { border-color: #64748b; }
.dark .nav-cell.current { box-shadow: 0 0 0 2px rgba(96,165,250,0.4); }
.dark .nav-cell.answered { background: #1e3a8a; color: #93c5fd; }
.dark .nav-cell.flagged { background: #78350f; color: #fbbf24; }
.dark .nav-cell.ans-flag { background: #92400e; color: #fde68a; }
.dark .nav-cell.r-correct { background: #14532d; color: #86efac; }
.dark .nav-cell.r-incorrect { background: #7f1d1d; color: #fca5a5; }

.dark .confidence-btn.sure { border-color: #4ade80; color: #4ade80; background: #14532d; }
.dark .confidence-btn.sure:hover { background: #166534; }
.dark .confidence-btn.unsure { border-color: #fbbf24; color: #fbbf24; background: #78350f; }
.dark .confidence-btn.unsure:hover { background: #92400e; }
.dark .confidence-btn.guessing { border-color: #f87171; color: #f87171; background: #7f1d1d; }
.dark .confidence-btn.guessing:hover { background: #991b1b; }

.dark .progress-bar-track { background: #334155; }

.dark .review-cell.r-correct { background: #14532d; color: #86efac; }
.dark .review-cell.r-incorrect { background: #7f1d1d; color: #fca5a5; }

.dark .kbd { background: #334155; color: #cbd5e1; border-color: #475569; }

.dark .form-input { background: #1e293b; color: #f1f5f9; border-color: #334155; }
.dark .form-input:focus { box-shadow: 0 0 0 3px rgba(96,165,250,0.25); }

.dark .explanation-box { background: #1e293b; border-color: #334155; }

.dark .reading-row { border-bottom-color: #334155; }

.dark main::-webkit-scrollbar-thumb { background: #475569; }
.dark main::-webkit-scrollbar-thumb:hover { background: #64748b; }

/* Prose overrides for Dark Mode */
.dark .prose table { border-collapse: collapse; width: 100%; margin-top: 1rem; margin-bottom: 1rem; font-size: 0.875rem; }
.dark .prose thead { background-color: #1e293b; border-bottom: 2px solid #334155; }
.dark .prose th, .dark .prose td { border: 1px solid #334155; padding: 0.5rem 0.75rem; }
.dark .prose th { font-weight: 600; color: #f1f5f9; }
.dark .prose tbody tr:nth-child(even) { background-color: #1e293b; }
.dark .prose p, .dark .prose li, .dark .prose td { color: #cbd5e1; }
.dark .prose strong { color: #f1f5f9; }
""")
print("Added dark mode CSS overrides")