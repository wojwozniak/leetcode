# 143. Reorder List

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

## Idea

1) Find midpoint with slow and fast pointer
2) Reverse second part of the list
3) Merge

$O(1)$ space, $O(n)$ time complexity

## Solution

```c
void reorderList(struct ListNode* head) {
    if (!head || !head->next || !head->next->next) return;

    // Two pointers -> slow one will be in the middle when fast gets to end
    struct ListNode *slow = head, *fast = head;
    while (fast->next && fast->next->next) {
        slow = slow->next;
        fast = fast->next->next;
    }

    // Reverse second part
    struct ListNode* prev = NULL;
    struct ListNode* curr = slow->next;
    while (curr) {
        struct ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    slow->next = NULL;

    // Easy interlocking merge
    struct ListNode* first = head;
    struct ListNode* second = prev;
    while (second) {
        struct ListNode* tmp1 = first->next;
        struct ListNode* tmp2 = second->next;

        first->next = second;
        second->next = tmp1;

        first = tmp1;
        second = tmp2;
    }
}
```