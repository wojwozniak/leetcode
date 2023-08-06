/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* findMiddle(struct ListNode* head) {
    struct ListNode* slow = head;
    struct ListNode* fast = head;

    while (fast->next && fast->next->next) {
        slow = slow->next;
        fast = fast->next->next;
    }

    return slow;
}

struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode* prev = NULL;
    struct ListNode* current = head;

    while (current) {
        struct ListNode* next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

void mergeLists(struct ListNode* first, struct ListNode* second) {
    struct ListNode* first_next;
    struct ListNode* second_next;

    while (second) {
        first_next = first->next;
        second_next = second->next;

        first->next = second;
        second->next = first_next;

        first = first_next;
        second = second_next;
    }
}

void reorderList(struct ListNode* head) {
    if (head == NULL || head->next == NULL)
        return;

    struct ListNode* middle = findMiddle(head);
    struct ListNode* reversed = reverseList(middle->next);
    middle->next = NULL;

    mergeLists(head, reversed);
}

// first we find the middle of the list
// then we reverse the second half of the list
// then we merge the first half of the list with the reversed second half (append head to reversed)
