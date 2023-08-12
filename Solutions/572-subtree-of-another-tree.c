/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
bool isSameTree(struct TreeNode* s, struct TreeNode* t) {
    if (s == NULL && t == NULL) return true;
    if (s == NULL || t == NULL) return false;
    return (s->val == t->val) && isSameTree(s->left, t->left) && isSameTree(s->right, t->right);
}

bool isSubtreeHelper(struct TreeNode* s, struct TreeNode* t) {
    if (s == NULL) return false;
    if (isSameTree(s, t)) return true;
    return isSubtreeHelper(s->left, t) || isSubtreeHelper(s->right, t);
}

bool isSubtree(struct TreeNode* s, struct TreeNode* t) {
    if (t == NULL) return true;
    if (s == NULL) return false;
    return isSubtreeHelper(s, t);
}