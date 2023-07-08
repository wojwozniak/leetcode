struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* removeRec(struct ListNode* head, int val, struct ListNode* prev, struct ListNode* output) {
    if(head == NULL) {
        return output;
    }
    if(head->val != val) {
        return removeRec(head->next, val, head, output);
    } else {
        if (prev == NULL) {
            struct ListNode* nextNode = head->next;
            free(head);
            return removeRec(nextNode, val, NULL, nextNode);
        } else {
            prev->next = head->next;
            struct ListNode* nextNode = head->next;
            free(head);
            return removeRec(nextNode, val, prev, output);
        }
    }
}

struct ListNode* removeElements(struct ListNode* head, int val) {
   return removeRec(head, val, NULL, head);
}