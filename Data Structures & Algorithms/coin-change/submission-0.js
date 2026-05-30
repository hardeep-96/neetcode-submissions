class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = {};
        const solve = (x) => {
            if(x === 0) return 0;
            if(x < 0) return Infinity;
            if(x in dp) return dp[x];

            let min = Infinity
            for(let coinVal of coins){
                dp[x] = min = Math.min(min, 1 + solve(x-coinVal));
            }

            return min;
        }

        let ans = solve(amount);
        return ans === Infinity ? -1 : ans;
    }
}
