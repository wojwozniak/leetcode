# 238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

## Idea

We can calculate prefix and postfix products for each element of the array in $O(n)$ time. 

To get it to $O(1)$ memory we can store them in output - no additional table is needed.

### Why can we use one table?

First we calculate suffixes (or prefixes) -> obviously we can store that in one table.

Then all data needed to calcutate current prefix when we iterate is in single variable, and to calculate final answer for given `i` we need only that variable and `output[i]`, so we don't override any data that we would need later.

## Solution

```rust
impl Solution {
    pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
        let len = nums.len();
        let mut output = vec![1; len];

        let mut suffix = 1;
        for i in (0..len).rev() {
            output[i] = suffix;
            suffix *= nums[i];
        }

        let mut prefix = 1;
        for i in 0..len {
            output[i] *= prefix;
            prefix *= nums[i];
        }

        output
    }
}
```