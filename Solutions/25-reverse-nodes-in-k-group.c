/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* reverseKGroup(struct ListNode* head, int k) {
    struct ListNode* curr = head;
    struct ListNode* next = NULL;
    struct ListNode* prev = NULL;
    int count = 0;

    struct ListNode* temp = head;
    int totalNodes = 0;
    while (temp != NULL) {
        totalNodes++;
        temp = temp->next;
    }

    if (totalNodes < k) {
        return head;
    }

    while (curr != NULL && count < k) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
        count++;
    }

    if (next != NULL) {
        head->next = reverseKGroup(next, k);
    }

    return prev;
}