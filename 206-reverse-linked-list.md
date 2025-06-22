# 206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

## Idea

Go over the list in a while loop, keeping pointer to `prev` variable.

## Solution

```rust
impl Solution {
    pub fn reverse_list(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut prev = None;
        while let Some(mut current) = head {
            head = current.next.take();
            current.next = prev;
            prev = Some(current);
        }
        prev
    }
}
```