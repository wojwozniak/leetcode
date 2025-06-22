# 74. Search a 2D Matrix

You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

## Idea

We can think of this matrix as a simple list stored in a weird way. We can solve the problem by either reworking algorithm to work with that "storage option" or to create functions that will give algorithm easy access points to the data - I choose the second option.

I will write function that will tell me how many elements are there and a getter -> getting i-th element of the matrix.

Using those two we can modify standard binary search algorithm in a simple way -> just changing first `right` value and `v` getting.

Logarithmic time and constant memory - just like in normal binary search.

## Solution

```rust
impl Solution {
    fn matrix_len(matrix: &Vec<Vec<i32>>) -> usize {
        matrix.iter().map(|row| row.len()).sum()
    }

    fn matrix_get(matrix: &Vec<Vec<i32>>, index: usize) -> i32 {
        let mut offset = 0;
        for row in matrix {
            if index < offset + row.len() {
                return row[index - offset];
            }
            offset += row.len();
        }
        unreachable!("Assume we won't call it in a bad way");
    }

    pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
        let mut left = 0;
        let mut right = Self::matrix_len(&matrix);

        while left < right {
            let mid = left + (right - left) / 2;
            let v = Self::matrix_get(&matrix, mid);
            if v == target {
                return true;
            }
            else if v < target {
                left = mid + 1;
            }
            else {
                right = mid;
            }
        }
        
        false
    }
}
```