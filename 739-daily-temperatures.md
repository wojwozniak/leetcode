# 739. Daily Temperatures

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

## Idea

We create a stack where we keep indices of elements of temperatures with no output value set yet.

We iterate over temperature array, checking top of the stack and update accordingly (possibly updating multiple elements at once, so we take top of stack in a while loop)

At the end just push element the stack.

There are possible outputs where there are `0` elements, so it's not a problem that we will end with non-empty stack.

It will be $O(n)$ time and space complexity.

## Solution
```rust
impl Solution {
    pub fn daily_temperatures(temperatures: Vec<i32>) -> Vec<i32> {
        let mut result = vec![0; temperatures.len()];
        let mut stack: Vec<usize> = Vec::new();

        for (i, &temp) in temperatures.iter().enumerate() {
            while let Some(&prev_index) = stack.last() {
                if temperatures[prev_index] < temp {
                    stack.pop();
                    result[prev_index] = (i - prev_index) as i32;
                } else {
                    break;
                }
            }
            stack.push(i);
        }

        result
    }
}
```