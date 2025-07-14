# 875. Koko Eating Bananas

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

## Idea

We will test different values of `bananas/hour` - from 1 to size of biggest pile. To optimize time complexity we will use binary search to find minimal value optimally.

## Solution

```rust
impl Solution {
    pub fn min_eating_speed(piles: Vec<i32>, h: i32) -> i32 {
        let mut left = 1;
        let mut right = *piles.iter().max().unwrap();

        while left < right {
            let mid = (left + right) / 2;

            let mut hours_needed = 0;
            for &pile in &piles {
                hours_needed += (pile + mid - 1) / mid;
            }

            if hours_needed > h {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        left
    }
}
```