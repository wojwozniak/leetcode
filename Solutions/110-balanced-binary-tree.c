/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int max(int a, int b) {
    return (a > b) ? a : b;
}

int height(struct TreeNode* node) {
    if (node == NULL) return 0;
    return 1 + max(height(node->left), height(node->right));
}

bool isBalanced(struct TreeNode* root) {
    if (root == NULL) {
        return true;
    }
    
    int leftHeight = height(root->left);
    int rightHeight = height(root->right);

    return (abs(leftHeight - rightHeight) <= 1) && isBalanced(root->left) && isBalanced(root->right);
}