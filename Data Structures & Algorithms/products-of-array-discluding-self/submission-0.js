class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const left = new Array(n);
        const right = new Array(n);
        const result = [];

        for (let i = 0; i < n; i++) {
            left[i] = (Number.isInteger(nums[i - 1]) ? nums[i - 1] : 1) * (Number.isInteger(left[i - 1]) ? left[i - 1] : 1);
            right[n - i - 1] = (Number.isInteger(nums[n - i]) ? nums[n - i] : 1) * (Number.isInteger(right[n - i]) ? right[n - i] : 1);
        }

        for (let i = 0; i < n; i++) {
            result[i] = left[i] * right[i];
        }

        return result;
    }
}
