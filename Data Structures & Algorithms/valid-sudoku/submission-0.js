class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Array(9).fill('').map(_ => new Set());
        const cols = new Array(9).fill('').map(_ => new Set());
        const square = {}

        console.log(rows)
        console.log(cols)
        console.log(square)

        for(let i=0; i<board.length; i++){
            for(let j=0; j<board[i].length; j++){
                const curr = board[i][j];
                const sKey = `${Math.floor(i/3)}-${Math.floor(j/3)}`

                if(curr === ".") continue;
                if(rows[i].has(curr) || cols[j].has(curr) ||  (square[sKey] && square[sKey].has(curr))){
                    return false;
                }
                rows[i].add(curr);
                cols[j].add(curr);
                if(!(sKey in square)){
                    square[sKey] = new Set();
                }
                square[sKey].add(curr);
            }
        }

        return true;
    }
}
