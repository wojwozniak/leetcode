# 167. Two Sum II - Input Array Is Sorted

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

## Idea

We use the fact that array is sorted. Two pointers going from start and end of the array move to get closer to solution.

Every option that makes sense is checked so solution is correct.

$O(n)$ time, $O(1)$ auxilliary memory (we use two pointers and do not modify the input array)

## Solution

```rust
impl Solution {
    pub fn two_sum(numbers: Vec<i32>, target: i32) -> Vec<i32> {
        let mut ptr1:usize = 0;
        let mut ptr2:usize = numbers.len()-1;
        while numbers[ptr1] + numbers[ptr2] != target {
            if numbers[ptr1] + numbers[ptr2] < target {
                ptr1 += 1;
            }
            else {
                ptr2 -= 1;
            }
        }

        vec![ptr1 as i32 + 1, ptr2 as i32 + 1]
    }
}
```