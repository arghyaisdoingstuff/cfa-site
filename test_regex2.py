import re
def fix(match):
    block = match.group(0)
    lines = block.strip().split('\n')
    has_delimiter = any(re.match(r'^[\s\|:\-]+$', line) and '-' in line for line in lines)
    if has_delimiter: return block
    
    # We want to add a blank header if it doesn't have one
    num_cols = max(line.count('|') - 1 for line in lines)
    if num_cols < 1: return block
    
    header = '|' + '|'.join(['   '] * num_cols) + '|'
    delimiter = '|' + '|'.join(['---'] * num_cols) + '|'
    lines.insert(0, delimiter)
    lines.insert(0, header)
    return '\n' + '\n'.join(lines) + '\n'

text = """
| Estimated slope | 1.0 |
| Estimated intercept | 1.2% |
"""
print(re.sub(r'(?:^\s*\|.*\|\s*\n?)+', fix, text, flags=re.MULTILINE))