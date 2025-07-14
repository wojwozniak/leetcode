# 21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

## Idea

Lists are sorted, so we go from the begginings of each one. As long as both lists
have at least one element, we check values on the beggining of each list.

No new values - just changing pointers.

At the end, if one of the lists hasn't been used up is appended at the end.

We use dummy element to keep pointer to the beggining of the output list in a comfortable to use way.

## Solution

```rust
impl Solution {
    pub fn merge_two_lists(mut list1: Option<Box<ListNode>>, mut list2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut dummy = Box::new(ListNode::new(0));
        let mut tail = &mut dummy;

        // is_some() is useful Option function for null check
        while list1.is_some() && list2.is_some() {
            let l1 = list1.as_mut().unwrap(); // as_mut() to allow us to edit values
            let l2 = list2.as_mut().unwrap();

            if l1.val <= l2.val {
                let next = l1.next.take();
                tail.next = list1;
                tail = tail.next.as_mut().unwrap();
                list1 = next;
            } else {
                let next = l2.next.take();
                tail.next = list2;
                tail = tail.next.as_mut().unwrap();
                list2 = next;
            }
        }

        tail.next = if list1.is_some() { list1 } else { list2 };
        dummy.next
    }
}
```