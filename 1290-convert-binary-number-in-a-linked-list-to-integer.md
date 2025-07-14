# 1290. Convert Binary Number in a Linked List to Integer

Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.

## Idea

We need to read the data, so time complexity will be $O(n)$. 

We can optimize for $O(1)$ space -> instead of trying to store each bit, we can
just add bits and multiply x2 on each visited node.


## Solution

```c
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
int getDecimalValue(struct ListNode* head) {
    int curr = 0;
    while (head != NULL) 
    {
        curr *= 2;
        if (head->val == 1) 
        {
            curr += 1;
        }
        head = head->next;
    }
    return curr;
}
```