/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* removeNthFromEnd(struct ListNode* head, int n) {
    struct ListNode* dummy = (struct ListNode*)malloc(sizeof(struct ListNode));
    dummy->next = head;

    struct ListNode* fast = dummy;
    struct ListNode* slow = dummy;

    for (int i = 0; i <= n; i++) {
        fast = fast->next;
    }

    while (fast != NULL) {
        fast = fast->next;
        slow = slow->next;
    }

    struct ListNode* temp = slow->next;
    slow->next = slow->next->next;
    free(temp);

    head = dummy->next;
    free(dummy);

    return head;
}

// 2 pointers - first we move the fast pointer n steps ahead of the slow pointer
// then we move both pointers until the fast pointer reaches the end of the list
// at this point the slow pointer is at the node before the node we want to remove
// we remove the node and return the head of the list