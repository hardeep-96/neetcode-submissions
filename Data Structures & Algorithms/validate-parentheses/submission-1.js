class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pair = {
            '}': '{',
            ']': '[',
            ')': '(',
        }
        let i =0;

        while(i < s.length){
            if(s[i] in pair){
                if(stack[stack.length - 1] === pair[s[i]]) stack.pop()
                else return false;
            }
            else stack.push(s[i]);
            i++;
        }

        return stack.length === 0;
    }
}
