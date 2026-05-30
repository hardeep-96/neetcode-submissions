class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        const dp = new Array(n+2).fill(undefined);
        let one = 0;
        let two = 0;
        let curr;

        for(let i=n-1; i>=0; i--){
            curr = Math.max((nums[i] + two), one);
            two = one;
            one = curr;
        }

        return one;
    }
}
