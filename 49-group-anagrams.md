# 49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

## Ideas

For comparing strings we can sort them (treating them as list of chars) and check if they are equal. Then we can store that data in hashmap with strucure:

`sorted_string` -> `List of strings for output`

We need to sort strings, which gives us $O(n log(n))$ time (with `n` = `string_length`). We need to do that to each string, getting additional linear time for that, leaving us with $O(m * n log(n))$, where `m` = `amount_of_strings`

## Solution

```rust
use std::collections::HashMap;

impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        let mut map: HashMap<String, Vec<String>> = HashMap::new();

        for s in strs {
            // string into chars; sort chars; recast into string
            let mut chars: Vec<char> = s.chars().collect();
            chars.sort_unstable();
            let key = chars.into_iter().collect::<String>();

            // insert into hashmap
            map.entry(key).or_insert(Vec::new()).push(s);
        }

        // return well formatted answer
        map.into_values().collect()
    }
}
```