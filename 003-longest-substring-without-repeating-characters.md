# 3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without duplicate characters.

## Idea

It is a hashset + sliding window problem. We will keep two pointers and hashset of characters that are in the current window. This way we will achieve $O(n)$ time complexity with $O(m)$ space complexity.

## Solution

```rust
use std::collections::HashSet;

impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let mut set = HashSet::new();
        let chars: Vec<char> = s.chars().collect();
        let mut left_ptr = 0usize;
        let mut max_len = 0usize;

        for right_ptr in 0..chars.len() {
            while set.contains(&chars[right_ptr]) {
                set.remove(&chars[left_ptr]);
                left_ptr += 1;
            }
            set.insert(chars[right_ptr]);
            max_len = std::cmp::max(max_len, right_ptr - left_ptr + 1);
        }

        max_len as i32
    }
}
```