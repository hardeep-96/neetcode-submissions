class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0;
        let end = s.length - 1;
        const isAlphanumberRegex = /^[a-zA-Z0-9]$/

        while (start < end) {
            while (!isAlphanumberRegex.test(s[start]) && start < end) {
                start++
            }
            while (!isAlphanumberRegex.test(s[end]) && start < end) {
                end--;
            }

            if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;

            start++;
            end--;
        }

        return true;
    }
}
