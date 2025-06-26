# 19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

## Idea

1) Have one pointer run away to nth position from the start
2) Have second pointer start going when first one reaches n
3) When first reaches end, second is n nodes away from the end

## Solution

```c
struct ListNode* removeNthFromEnd(struct ListNode* head, int n) {
    if (head == NULL) {
        return NULL;
    }

    struct ListNode* dummy = malloc(sizeof(struct ListNode));
    dummy->next = head;
    struct ListNode *runaway = dummy;
    struct ListNode *chaser = dummy;

    for (int i = 0; i < n + 1; i++) {
        runaway = runaway->next;
    }

    while(runaway != NULL) {
        chaser = chaser->next;
        runaway = runaway->next;
    }

    struct ListNode *temp = chaser->next;
    chaser->next = temp->next;
    free(temp);

    struct ListNode* result = dummy->next;
    free(dummy);
    return result;
}
```