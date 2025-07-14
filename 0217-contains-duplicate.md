# 217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

## Idea

We need to read every value, so we cannot go under $O(n)$. We could either:
- create a hashset - let's remember what we have already seen and just iterate over array
- if we don't want to use $O(n)$ memory, then only option would be bubblesort like double `for` loop - comparing every pair.

## Solution

```rust
impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        let mut set = HashSet::new();
        for num in nums {
            if set.contains(&num) {
                return true;
            }
            set.insert(num);
        }
        false
    }
}
```