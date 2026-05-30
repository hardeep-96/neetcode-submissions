class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
     rob(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];

        return Math.max(
            this.helper(nums.slice(1)),
            this.helper(nums.slice(0, -1)),
        );
    }

    /**
     * @param {number[]} nums
     * @return {number}
     */
    helper(nums) {
        const n = nums.length;
        if (n === 0) return 0;
        if (n === 1) return nums[0];

        const dp = new Array(n+2);
        dp[n] = 0;
        dp[n+1] = 0;

        for (let i = n-1; i >=0; i--) {
            dp[i] = Math.max(dp[i + 1], nums[i] + dp[i + 2]);
        }

        return dp[0];
    }
}
