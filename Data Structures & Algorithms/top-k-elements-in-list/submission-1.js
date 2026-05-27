class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        const result = [];
        nums.forEach(num => {
            if(num in map){
                map[num]++;
            }else {
                map[num] = 1
            }
        });
        const entries = Object.entries(map).sort((a, b) => b[1] - a[1]);

        for(let i=0; i<entries.length; i++){
            if(i<k){
                result.push(entries[i][0]);
            } else {
                break;
            }
        }
        
        return result;
    }
}
