import os
import re

# Regex: start of string (^), digits (\d+), then hyphen or underscore and rest
pattern = re.compile(r'^(\d+)([-_].+\.md)$')

for filename in os.listdir('.'):
    if filename.endswith('.md'):
        match = pattern.match(filename)
        if match:
            number, rest = match.groups()
            new_number = f'0{number}'  # Just prepend one zero
            new_name = f'{new_number}{rest}'
            if new_name != filename:
                print(f'Renaming: {filename} → {new_name}')
                os.rename(filename, new_name)
