struct ListNode {
    int val;
    struct ListNode *next;
};

typedef struct ListNode ListNode;
ListNode* create(int val) {
    ListNode* fin = malloc(sizeof(ListNode));
    if (fin != NULL) {
        fin->next = NULL;
        fin->val = val;
    }
    return fin;
}


ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    ListNode* helper = create(0);
    ListNode* current = helper;

    int passing = 0;

    while (l1 || l2 || passing) {
        int node = passing;

        if (l1) {
            node += l1->val;
            l1 = l1->next;
        }

        if (l2) {
            node += l2->val;
            l2 = l2->next;
        }

        passing = node / 10;

        ListNode* newNode = create(node % 10);

        current->next = newNode;
        current = current->next;
    }
    return helper->next;
}