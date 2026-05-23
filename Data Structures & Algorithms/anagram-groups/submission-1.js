class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    getHashKey = (str) => {
        const arr = new Array(26).fill(0);
        [...str].forEach(char => {
            const index = char.charCodeAt() - 'a'.charCodeAt();
            arr[index] = arr[index] + 1;
        });
        return arr.join("#");
    }
    groupAnagrams(strs) {
        const map = {};
        strs.forEach(s => {
            const key = this.getHashKey(s);
            if(!(key in map)) map[key] = [];
            map[key].push(s);
        });
        return Object.values(map);
    }
}
