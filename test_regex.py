import re

text = """
An analyst performs a simple linear regression...

| Estimated slope | 1.0 |
| Estimated intercept | 1.2% |
| Standard error of the forecast | 1.4% |
| Critical t-values at a 5% significance level | ±2.032 |

The 95% prediction interval...
"""

def fix_markdown_tables(match):
    block = match.group(0)
    lines = block.strip().split('\n')
    
    # If there's already a delimiter row (contains only pipes, dashes, colons, spaces)
    has_delimiter = any(re.match(r'^[\s\|:\-]+$', line) and '-' in line for line in lines)
    if has_delimiter:
        return block
        
    # Count columns in the first line based on pipes
    num_cols = lines[0].count('|') - 1
    if num_cols < 1:
        return block
        
    # Inject a delimiter row after the first line
    delimiter = '|' + '|'.join(['---'] * num_cols) + '|'
    lines.insert(1, delimiter)
    return '\n' + '\n'.join(lines) + '\n'

# Regex to find blocks of lines that start and end with a pipe
pattern = r'(?:^\s*\|.*\|\s*\n)+'

# Need multiline for ^
fixed = re.sub(pattern, fix_markdown_tables, text, flags=re.MULTILINE)
print(fixed)