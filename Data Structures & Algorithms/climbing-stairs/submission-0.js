class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
    const dp = new Array(n).fill(null);

    const solve = (i) => {
        if(i === n) return 1;
        if(i > n) return 0;
        if(dp[i]) return dp[i]
        return dp[i] = solve(i+1) + solve(i+2);
    }
        return solve(0);
    }
}
