class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        //calculate need map + need count
        //maintain min, left, right
        //maintain have and window map
        if(t.length > s.length) return "";
        const window = {};
        const need = {};
        let haveCount = 0;
        let minLen = Infinity;
        let result = [-1, -1];

        for(const char of t){
            need[char] = (need[char] || 0) +1;
        } 

        const needCount = Object.keys(need).length;
        let i = 0;
        let j = 0;

        while(j < s.length){
            const char = s[j];
            window[char] = (window[char] || 0) + 1;

            if(char in need && need[char] === window[char]){
                haveCount++;
            }
            
            //while invalid: shrink window
            while(needCount === haveCount){
                const leftChar = s[i];

                if((j-i+1) < minLen){
                    minLen = j-i+1;
                    result = [i, j];
                }

                window[leftChar]--;

                if(leftChar in need && window[leftChar] < need[leftChar]){
                    haveCount--;
                }

                i++;
            }

            j++;
        }

        const [start, end] = result;

        return minLen === Infinity
            ? ""
            : s.slice(start, end + 1);
    }
}
