with open("styles.css", "a", encoding="utf-8") as f:
    f.write("""
/* Markdown Table Styles overrides */
.prose table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 0.875rem;
}
.prose thead {
    background-color: #f8fafc;
    border-bottom: 2px solid #e2e8f0;
}
.prose th, .prose td {
    border: 1px solid #e2e8f0;
    padding: 0.5rem 0.75rem;
    text-align: left;
}
.prose th {
    font-weight: 600;
    color: #334155;
}
.prose tbody tr:nth-child(even) {
    background-color: #f8fafc;
}
""")
print("styles.css updated")