class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0;
        let j = 1;
        let maxProfit = 0;

        while (j < prices.length) {
            const buy = prices[i];
            const sell = prices[j];

            if (sell > buy) {
                const profit = sell - buy;
                maxProfit = Math.max(maxProfit, profit);
                j++;
            } else {
                i = j;
                j++;
            }
        }

        return maxProfit;
    }
}
