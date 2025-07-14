# 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

## Idea

We can use stack, as we need to:
- keep track how many open parentheses we have seen and not matched with closing one
- keep track of their types (so we open/close with matching ones)

$O(n)$ time and memory will be used.

## Solution

```rust
impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut stack: Vec<char> = Vec::new();
        let chars = s.chars();
        for char in chars {
            match char {
                '(' | '{' | '[' => {
                    stack.push(char);
                }
                ')' | '}' | ']' => match stack.pop() {
                    Some(top) => {
                        let valid = match (top, char) {
                            ('(', ')') | ('{', '}') | ('[', ']') => true,
                            _ => false,
                        };
                        if !valid {
                            return false;
                        }
                    }
                    None => return false,
                },
                _ => return false,
            }
        }
        if stack.len() == 0 {
            return true;
        }
        else {
            return false;
        }
    }
}
```