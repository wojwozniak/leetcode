# 121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

## Idea

We will use simplest sliding window algorithm - two pointers going right, starting from first and second element of the array. Left pointer moves to position of right one if prices[right] > prices[left].

We get simple and efficient $O(n)$ time and $O(1)$ space complexity solution. 

## Solution

```rust
impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let mut output = 0i32;
        let mut ptr1 = 0usize;
        let mut ptr2 = 1usize;

        while ptr2 < prices.len() {
            if prices[ptr2] > prices[ptr1] {
                let profit = prices[ptr2] - prices[ptr1];
                output = std::cmp::max(output, profit);
            } else {
                ptr1 = ptr2;
            }
            ptr2 += 1;
        }

        output
    }
}
```