# 704. Binary Search

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

## Idea

As name of the problem suggests, we just need to implement basic binary search.

We have sorted array. We define two pointers, left and right, initialized to the both ends of the array. We check value in the middle, and based on that value return answer or throw away part of array in which answer cannot be found.

$O(logn)$ time, $O(1)$ memory.

## Solution

```rust
impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        let mut left = 0;
        let mut right = nums.len();

        while left < right {
            let mid = left + (right - left) / 2;
            let v = nums[mid];
            if v == target {
                return mid as i32;
            } else if v < target {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        -1
    }
}
```