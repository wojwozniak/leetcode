# 128. Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

## Ideas

$O(n log(n))$ solution comes to mind instantly - sort, then go over with a pointer. We are asked to do $O(n)$ solution, and array is unsorted, so we probably need to use hashmap / hashset here.

We can cast list into hashset in $O(n)$ time.

Then we can go over that set -> Starting counting only if `num - 1` is not in the set

We will read each number from set only once, achieving $O(n)$ overall time and space complexity

## Solution


```rust
use std::collections::HashSet;

impl Solution {
    pub fn longest_consecutive(nums: Vec<i32>) -> i32 {
        let num_set: HashSet<_> = nums.iter().cloned().collect();
        let mut longest = 0;

        for &num in &num_set {
            if !num_set.contains(&(num - 1)) {
                let mut current = num;
                let mut streak = 1;

                while num_set.contains(&(current + 1)) {
                    current += 1;
                    streak += 1;
                }

                longest = longest.max(streak);
            }
        }

        longest
    }
}
```