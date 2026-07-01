class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;
        let leftMax = 0;
        let rightMax = height[n-1];
        let l =0;
        let r = n - 1;
        let sum = 0;

        while(l<r){
            leftMax = Math.max(height[l], leftMax);
            rightMax = Math.max(height[r], rightMax);

            if(leftMax < rightMax){
                sum += leftMax - height[l];
                l++;
            }else{
                sum += rightMax - height[r];
                r--;
            }
        }

        return sum
    }
}
