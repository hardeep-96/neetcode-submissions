class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length-1;
        let res = nums[0];

        // if(nums[left] < nums[right]) return nums[left];

        while(left <= right){
            const mid = Math.floor((left+right)/2);
            //in the right sorted part
            if(nums[mid] <= nums[right]){
                res = Math.min(res, nums[mid]);
                right = mid-1;
            }
            //in left sorted part 
            else {
                res = Math.min(res, nums[left]);
                left = mid+1;
            }
        }

        return res
    }
}
