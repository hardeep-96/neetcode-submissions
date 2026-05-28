class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const hashMap = {};
        let i = 0;
        let j = 0;
        let maxFreq = 0;
        let max = 0;

        while(j < s.length){
            let char = s[j];
            hashMap[char] = (hashMap[char] || 0) + 1;
            maxFreq = Math.max(maxFreq, hashMap[char])
            
            //check if s[j] in hashMap and s[j] > k -> decrease window and remove char from hashMap
            while((j-i+1) - maxFreq > k){
                hashMap[s[i]]--;
                i++;
            }

            max = Math.max((j-i+1), max);
            j++;
        }
        return max;
    }
}
