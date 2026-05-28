class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while(l<=r){
            const m = Math.floor((l+r)/2);
            if(target === nums[m]) return m;

            //in the right sorted part
            if(nums[m] <= nums[r]){
                if(target > nums[m] && target <= nums[r]){
                    l = m+ 1;
                } else {
                    r = m-1;
                }
            } else { //left sorted part
                if(target < nums[m] && target >= nums[l]){
                    r = m-1;
                } else {
                    l = m+1;
                }
            }
        }

        return -1;
    }
}
