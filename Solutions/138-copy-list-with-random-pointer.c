/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     struct Node *next;
 *     struct Node *random;
 * };
 */
struct Node* copyRandomList(struct Node* head) {
    if (head == NULL) {
        return NULL;
    }
    
    // Step 1: Create new nodes and insert them between original nodes
    struct Node* current = head;
    while (current != NULL) {
        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->val = current->val;
        newNode->next = current->next;
        newNode->random = NULL;
        
        current->next = newNode;
        current = newNode->next;
    }
    
    // Step 2: Update random pointers of the new nodes
    current = head;
    while (current != NULL) {
        if (current->random != NULL) {
            current->next->random = current->random->next;
        }
        current = current->next->next;
    }
    
    // Step 3: Separate original and copied lists
    struct Node* newHead = head->next;
    current = head;
    while (current != NULL) {
        struct Node* temp = current->next;
        current->next = temp->next;
        if (temp->next != NULL) {
            temp->next = temp->next->next;
        }
        current = current->next;
    }
    
    return newHead;
}