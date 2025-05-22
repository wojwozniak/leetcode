# 1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Ideas
- $O(n^2)$ solution is obvious - just two loops and scanning every option
- If it was sorted then $O(n)$ would be easy using two pointers, but it's $O(n log n)$ because we would have to sort it first
- $O(n)$ solution is doable with $O(n)$ memory - we can create a hashmap storing (value -> index) - then with single loop we can check every combination and give correct output.

## Solution

Let's notice that we only need a single loop - it will check all options anyways
and checking if we aren't using same number twice won't be necessary.


```rust
use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut num_map = HashMap::new();

        for (i, &num) in nums.iter().enumerate() {
            let complement = target - num;
            if let Some(&j) = num_map.get(&complement) {
                return vec![j as i32, i as i32];
            }
            num_map.insert(num, i);
        }

        vec![]
    }
}
```