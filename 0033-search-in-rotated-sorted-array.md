# 33. Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

## Idea

We need to find a way to use binary search here.

Let's notice that if we divide array in the middle, one half will always be correctly sorted.

Let's use that part like we would in normal binary search and determine if target is inside or outside that range and update range accordlingly.

## Solution

```rust
pub fn search(nums: Vec<i32>, target: i32) -> i32 {
    let (mut left, mut right) = (0, nums.len() as i32 - 1);

    while left <= right {
        let mid = left + (right - left) / 2;
        let mid_val = nums[mid as usize];

        if mid_val == target {
            return mid;
        }

        if nums[left as usize] <= mid_val {
            if nums[left as usize] <= target && target < mid_val {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        else {
            if mid_val < target && target <= nums[right as usize] {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    -1
}
```