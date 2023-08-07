/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
bool isValidBSTHelper(struct TreeNode* root, int* min_val, int* max_val) {
    if (root == NULL) {
        return true;
    }

    if ((min_val != NULL && root->val <= *min_val) || (max_val != NULL && root->val >= *max_val)) {
        return false;
    }

    return isValidBSTHelper(root->left, min_val, &root->val) && isValidBSTHelper(root->right, &root->val, max_val);
}

bool isValidBST(struct TreeNode* root) {
    return isValidBSTHelper(root, NULL, NULL);
}