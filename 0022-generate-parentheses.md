# 22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

## Ideas

Simple backtracking -> internal function counting how many opening and closing parentheses were used, and recursively adding more options.

This solution has exponential time complexity - but it is the best we can do here.

## Solution

```rust
pub fn generate_parenthesis(n: i32) -> Vec<String> {
    fn backtrack(s: String, open: i32, close: i32, n: i32, result: &mut Vec<String>) {
        if s.len() as i32 == 2 * n {
            result.push(s);
            return;
        }
        if open < n {
            backtrack(s.clone() + "(", open + 1, close, n, result);
        }
        if close < open {
            backtrack(s + ")", open, close + 1, n, result);
        }
    }
    let mut result = Vec::new();
    backtrack(String::new(), 0, 0, n, &mut result);
    result
}
```