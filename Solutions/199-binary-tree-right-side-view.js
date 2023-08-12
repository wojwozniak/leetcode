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
 * @return {number[]}
 */
const rightSideView = (root) => {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let lastNodeValue = null;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();

            lastNodeValue = currentNode.val;

            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

        result.push(lastNodeValue);
    }

    return result;
};