# 36. Valid Sudoku

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

- Each row must contain the digits 1-9 without repetition.
- Each column must contain the digits 1-9 without repetition.
- Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.


- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules

## Ideas

If `n` is length of square side, then it's obvious we are limited by $O(n^2)$ time complexity, as we need to check everything at least once.

We can store what we have seen for column/square/row in hashsets.

To be as optimal as possible, we should aim to load everything only once.

## Solution

```rust
use std::collections::HashSet;

impl Solution {
    pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
        let mut rows = vec![HashSet::new(); 9];
        let mut cols = vec![HashSet::new(); 9];
        let mut boxes = vec![HashSet::new(); 9];

        for r in 0..9 {
            for c in 0..9 {
                let val = board[r][c];
                if val == '.' {
                    continue;
                }

                let b = (r / 3) * 3 + (c / 3);

                if rows[r].contains(&val) || cols[c].contains(&val) || boxes[b].contains(&val) {
                    return false;
                }

                rows[r].insert(val);
                cols[c].insert(val);
                boxes[b].insert(val);
            }
        }

        true
    }
}
```