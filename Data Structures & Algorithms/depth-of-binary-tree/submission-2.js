/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        const dfs = (root) => {
            if (!root) return 0;
            const maxLeft = dfs(root.left)
            const maxRight = dfs(root.right);
            return 1 + Math.max(maxLeft, maxRight);
        }

        return dfs(root);
    }
}
