# 125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

## Idea

Simple two pointer solution. First preprocess string, then pointers from start to finish.

## Algorithm

```rust
impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        let filtered: Vec<char> = s
            .chars()
            .filter(|c| c.is_alphanumeric())
            .map(|c| c.to_ascii_lowercase())
            .collect();

        let (mut start, mut end) = (0usize, filtered.len().saturating_sub(1));

        while start < end {
            if filtered[start] != filtered[end] {
                return false;
            }
            start += 1;
            end = end.saturating_sub(1);
        }
        true
    }
}
```