int helper(struct TreeNode* root, int* prev, int* diff) {
    if (root == NULL) {
        return *diff;
    }

    *diff = helper(root->left, prev, diff);

    if (*prev != INT_MAX) {
        int currDiff = abs(root->val - *prev);
        if (currDiff < *diff) {
            *diff = currDiff;
        }
    }

    *prev = root->val;

    *diff = helper(root->right, prev, diff);

    return *diff;
}

int getMinimumDifference(struct TreeNode* root) {
    int prev = INT_MAX;
    int diff = INT_MAX;
    return helper(root, &prev, &diff);
}