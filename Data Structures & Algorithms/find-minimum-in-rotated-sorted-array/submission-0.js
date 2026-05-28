class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length-1;
        if(nums[left] < nums[right]) return nums[left];

        while(left < right){
            const mid = Math.floor((left+right)/2);
            if(nums[mid] !== undefined && nums[mid] < nums[mid-1]) return nums[mid];
            //in the right sorted part
            if(nums[mid] < nums[right]){
                right = mid-1;
            }
            //in left sorted part 
            else {
                left = mid+1;
            }
        }

        return nums[left];
    }
}
