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
            if (num in map) {
                map[num]++;
            } else {
                map[num] = 1
            }
        });
        const arr = new Array(nums.length+1).fill(null);

        Object.entries(map).forEach(([ele, freq], i) => {
            if (arr[freq] !== null) {
                arr[freq].push(ele)
            } else {
                arr[freq] = [ele];
            }
        });

        console.log(arr);

        for (let i = arr.length; i >= 0; i--) {
            if (arr[i] && result.length < k) {
                arr[i].forEach(ele => {
                    if (result.length < k) {
                        result.push(ele);
                    }
                })
            }
        }

        return result;
    }
}
