/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
bool hasCycle(struct ListNode* head) {
    if (!head || !head->next) {
        return false;
    }

    struct ListNode* slow_pointer = head;
    struct ListNode* fast_pointer = head->next;

    while (slow_pointer != fast_pointer) {
        if (!fast_pointer || !fast_pointer->next) {
            return false;
        }
        slow_pointer = slow_pointer->next;
        fast_pointer = fast_pointer->next->next;
    }

    return true;
}

// One pointer goes 1 step at a time, the other goes 2 steps at a time - they have to meet if there is a cycle.
// Time complexity: O(n)
// Space complexity: O(1)