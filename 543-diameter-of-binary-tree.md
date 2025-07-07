# 543. Diameter of Binary Tree

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

## Idea

We need to check for depth of both subtrees, but also check for case where both sides of that path are in same subtree.

## Solution

```c
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

int dfs(struct TreeNode* root, int* diameter) {
    if (root == NULL) return 0;

    int left = dfs(root->left, diameter);
    int right = dfs(root->right, diameter);

    *diameter = max(*diameter, left + right);
    return max(left, right) + 1;
}

int diameterOfBinaryTree(struct TreeNode* root) {
    int diameter = 0;
    dfs(root, &diameter);
    return diameter;
}
```