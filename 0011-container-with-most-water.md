# 11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

## Idea

Standard two pointer task - we move pointer that is smaller to the center.

## Solution

```rust
impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let mut ptr1 = 0usize;
        let mut ptr2 = height.len() - 1;
        let mut output = 0i32;

        while ptr1 != ptr2 {
            let smaller_height = std::cmp::min(height[ptr1], height[ptr2]);
            let curr_val = smaller_height * (ptr2 - ptr1) as i32;
            output = std::cmp::max(output, curr_val);
            if height[ptr1] < height[ptr2] {
                ptr1 += 1;
            } else {
                ptr2 -= 1;
            }
        }
        
        output
    }
}
```