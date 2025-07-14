# 104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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
    if (a > b) 
    {
        return a;
    }
    else 
    {
        return b;
    }
}

int maxDepth(struct TreeNode* root) {
    if (root == NULL) 
    {
        return 0;
    }

    if (root->left == NULL && root->right == NULL) 
    {
        return 1;
    }

    return max(maxDepth(root->left), maxDepth(root->right)) + 1;
}
```