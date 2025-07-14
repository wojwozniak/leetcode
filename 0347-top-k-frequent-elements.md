# 347. Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

## Ideas

We can create frequency map with hashmap. Then to get biggest k elements we can use heap.

### Why heap?

It will be a bit faster than getting all values than sorting. We will use min-heap for $O(1)$ pop.

This solution will be a bit better than $O(n log(n))$, as in usual case there will be less unique elements than elements total, something like $O(n*mlog(m))$, with $m$ being amount of unique elements.

## Solution

```rust
use std::collections::{BinaryHeap, HashMap};
use std::cmp::Reverse;

impl Solution {
    pub fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let mut freq_map = HashMap::new();
        
        for num in nums {
            *freq_map.entry(num).or_insert(0) += 1;
        }

        let mut heap = BinaryHeap::new();
        for (num, freq) in freq_map {
            heap.push(Reverse((freq, num)));
            if heap.len() > k as usize {
                heap.pop();
            }
        }

        heap.into_iter().map(|Reverse((_, num))| num).collect()
    }
}
```