class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        const dp = new Array(n+2).fill(undefined);
        dp[n] = 0;
        dp[n+1] = 0;

        for(let i=n-1; i>=0; i--){
            dp[i] = Math.max((nums[i] + dp[i+2]), dp[i+1])
        }

        return dp[0];
    }
}
