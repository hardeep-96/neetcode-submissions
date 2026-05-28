class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length <= 1) return s.length;
        const set = new Set();
        let i = 0;
        let j = 1;
        set.add(s[0]);
        let max = 0;

        while (j < s.length) {
            while (i <= j && set.has(s[j])) {
                set.delete(s[i]);
                i++;
            }

            set.add(s[j]);
            max = Math.max(max, j - i + 1);
            j++;
        }

        return max;
    }
}
