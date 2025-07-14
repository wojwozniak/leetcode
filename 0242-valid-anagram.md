# 242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

## Idea

Let's go over first word creating a hashmap, then over second one "using" data from first one. If we won't reach any unused characters, we return true. (We just need to check if lengths are the same, and return false instantly if not -> if they are, then we will have to run out of characters, no need to check if hashmap is left empty)

It will give us $O(n)$ time and memory complexity, where $n$ is length of the string.

## Solution

```rust
use std::collections::HashMap;

impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        if s.len() != t.len() {
            return false;
        }

        let mut map = HashMap::new();

        for c in s.chars() {
            *map.entry(c).or_insert(0) += 1;
        }

        for c in t.chars() {
            if let Some(count) = map.get_mut(&c) {
                *count -= 1;
                if *count == 0 {
                    map.remove(&c);
                }
            } else {
                return false;
            }
        }

        true
    }
}
```