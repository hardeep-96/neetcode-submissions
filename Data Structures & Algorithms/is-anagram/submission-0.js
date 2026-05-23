class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const map = {};
        [...s].forEach(e => map[e] = map[e] ? map[e]+1 : 1);
        for(let i=0; i<s.length; i++){
            if(!(t[i] in map)) return false;
            map[t[i]]--;
        }

        for(let key in map){
            if(map[key] !== 0) return false;
        }
        return true;
    }
}
