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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if((!root && subRoot) || (root && !subRoot)) return false;
        if(!subRoot) return true;

        const matchingNodes = [];

        const dfs = (node) => {
            if(!node) return [];
            if(node.val === subRoot.val){
                matchingNodes.push(node);
            }
            node.left && dfs(node.left);
            node.right && dfs(node.right);
        }

        dfs(root);

        for(let i=0; i<matchingNodes.length; i++){
            if(this.isSameTree(matchingNodes[i], subRoot)){
                return true
            }
        }
        
        return false;
    }

    isSameTree(p, q){
        if((!p && q) || (p && !q)) return false;
        if(!p && !q) return true;
        if(p.val !== q.val) return false;

        if(!this.isSameTree(p.left, q.left)){
             return false;   
        }
        if(!this.isSameTree(p.right, q.right)){
            return false;
        }

        return true;
    }
}
