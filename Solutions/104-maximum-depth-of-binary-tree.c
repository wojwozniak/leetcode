struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};


int maxDepth(struct TreeNode* root){
    if(root==NULL) {
        return 0;
    }
    int right = maxDepth(root->right);
    int left = maxDepth(root->left);
    if(right > left) {
        return right + 1;
    } else return left + 1;
}