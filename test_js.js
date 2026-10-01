function formatMarkdown(text) {
    if (!text) return '';
    text = text.replace(/(?:^\s*\|.*\|\s*\n?)+/gm, (match) => {
        const lines = match.trim().split('\n');
        const hasDelimiter = lines.some(line => /^[\s|:\-]+$/.test(line) && line.includes('-'));
        if (hasDelimiter) return match;
        
        let maxCols = 0;
        lines.forEach(line => {
            const cols = (line.match(/\|/g) || []).length - 1;
            if (cols > maxCols) maxCols = cols;
        });
        if (maxCols < 1) return match;
        
        const header = '|' + Array(maxCols).fill('   ').join('|') + '|';
        const delimiter = '|' + Array(maxCols).fill('---').join('|') + '|';
        
        return '\n' + header + '\n' + delimiter + '\n' + lines.join('\n') + '\n';
    });
    return text;
}

const text = `An analyst performs a simple linear regression...

| Estimated slope | 1.0 |
| Estimated intercept | 1.2% |
| Standard error of the forecast | 1.4% |
| Critical t-values at a 5% significance level | ±2.032 |

The 95% prediction interval...`;

console.log(formatMarkdown(text));