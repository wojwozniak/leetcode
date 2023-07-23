struct ListNode* createNewNode(int value) {
    struct ListNode* newNode = malloc(sizeof(struct ListNode));
    if (newNode != NULL) {
        newNode->val = value;
        newNode->next = NULL;
    }
    return newNode;
}
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2) {
    struct ListNode* dummy = createNewNode(0);
    struct ListNode* current = dummy;
    
    while (l1 != NULL && l2 != NULL) {
        if (l1->val <= l2->val) {
            current->next = l1;
            l1 = l1->next;
        } else {
            current->next = l2;
            l2 = l2->next;
        }
        
        current = current->next;
    }
    
    if (l1 != NULL) {
        current->next = l1;
    } else {
        current->next = l2;
    }
    
    struct ListNode* mergedList = dummy->next;
    free(dummy);
    
    return mergedList;
}