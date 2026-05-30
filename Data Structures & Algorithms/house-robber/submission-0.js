class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        const dp = new Array(n+2).fill(undefined);
     
        const solve = (i) => {
         if(i >= n) return 0;
         if(dp[i] !== undefined) return dp[i];
         return dp[i] = Math.max((nums[i] + solve(i+2)), solve(i+1));
        }
        solve(0);
        return dp[0];    
    }
}
