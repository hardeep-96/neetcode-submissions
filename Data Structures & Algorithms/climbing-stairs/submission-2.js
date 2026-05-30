class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
    let one = 1;
    let two = 0;
    let curr = 0;

    for(let i=n-1; i>=0; i--){
        curr = one + two;
        two = one;
        one = curr;
    }

    return one;
    }
}
