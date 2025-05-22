# Encode and Decode Strings

Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

## Idea

We can encode length of string at the start (number, then some delimiter) so we know how many next characters will be part of that string. It is more robust than trying to use some non-ascii delimiter between strings. Solution will be in linear time and space complexity -> we are going over data once.

## Solution

```rust
impl Solution {

    fn encode(strs: Vec<String>) -> String {
        strs.into_iter()
        .map(|s| format!("{}:{}", s.len(), s))
        .collect::<Vec<_>>()
        .join("")
    }

    fn decode(s: String) -> Vec<String> {
        let mut result = Vec::new();
        let mut i = 0;
        let chars: Vec<char> = s.chars().collect();

        while i < chars.len() {
            let mut len_str = String::new();
            while i < chars.len() && chars[i] != ':' {
                len_str.push(chars[i]);
                i += 1;
            }

            i += 1;
            let len: usize = len_str.parse().unwrap();
            let string: String = chars[i..i + len].iter().collect();
            result.push(string);
            i += len;
        }

        result
    }


}
```