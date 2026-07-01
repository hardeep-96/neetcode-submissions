class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;
        const leftMax = new Array(n).fill(0);
        const rightMax = new Array(n).fill(0);
        const min = new Array(n).fill(0);
        let currMax = 0
        let sum = 0;

        for(let i=0; i<n; i++){
            leftMax[i] = currMax
            currMax = Math.max(currMax, height[i]);
        }

        currMax = 0
        for(let i=n-1; i>=0; i--){
            rightMax[i] = currMax
            currMax = Math.max(currMax, height[i]);
        }
        
        for(let i=0; i<n; i++){
            min[i] = Math.min(leftMax[i], rightMax[i])
        }

        for(let i=0; i<n; i++){
            const currH = min[i] - height[i]
            sum += currH > 0 ? currH : 0
        }

        return sum;
    }
}
