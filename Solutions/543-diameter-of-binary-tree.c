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

int diameterOfBinaryTree(struct TreeNode* root) {
    if (root == NULL) return 0;
    
    int leftHeight = height(root->left);
    int rightHeight = height(root->right);
    
    int leftDiameter = diameterOfBinaryTree(root->left);
    int rightDiameter = diameterOfBinaryTree(root->right);
    
    return max(max(leftDiameter, rightDiameter), leftHeight + rightHeight);
}