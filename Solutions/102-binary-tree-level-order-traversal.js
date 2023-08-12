/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
    const result = [];

    const traverseLevel = (node, level) => {
        if (!node) return;

        if (!result[level]) {
            result[level] = [];
        }

        result[level].push(node.val);

        traverseLevel(node.left, level + 1);
        traverseLevel(node.right, level + 1);
    };

    traverseLevel(root, 0);
    return result;
};