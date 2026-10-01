with open("styles.css", "a", encoding="utf-8") as f:
    f.write("""
.dark .stat-card {
    background: #1e293b;
    border-color: #334155;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);
}
.dark .chart-container {
    background: #1e293b;
    border-color: #334155;
}

.dark .option-btn {
    background: #1e293b;
    color: #f1f5f9;
    border-color: #334155;
}
.dark .option-btn:hover { background: #334155; border-color: #475569; }
.dark .option-btn.selected { background: #1e3a8a; border-color: #3b82f6; color: #bfdbfe; }
.dark .option-btn.selected-exam { background: #1e3a8a; border-color: #3b82f6; color: #bfdbfe; }
.dark .option-btn.correct { background: #14532d; border-color: #22c55e; color: #86efac; }
.dark .option-btn.incorrect { background: #7f1d1d; border-color: #ef4444; color: #fca5a5; }

.dark .option-letter { background: #475569; color: #cbd5e1; }
.dark .option-btn:hover .option-letter { background: #64748b; }
.dark .option-btn.selected .option-letter { background: #2563eb; color: #fff; }
.dark .option-btn.selected-exam .option-letter { background: #2563eb; color: #fff; }
.dark .option-btn.correct .option-letter { background: #16a34a; color: #fff; }
.dark .option-btn.incorrect .option-letter { background: #dc2626; color: #fff; }
""")
print("Added card and button overrides")