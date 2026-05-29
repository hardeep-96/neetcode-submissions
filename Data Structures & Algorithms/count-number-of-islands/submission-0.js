class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const n = grid.length;
        if (n === 0) return 0;
        const m = grid[0].length;
        if (m === 0) return 0;

        let count = 0;

        const dfs = (i, j) => {
            if (i - 1 >= 0 && grid[i - 1][j] === "1") {
                grid[i - 1][j] = "0";
                dfs(i - 1, j);
            }
            if (j + 1 < m && grid[i][j + 1] === "1") {
                grid[i][j + 1] = "0";
                dfs(i, j + 1);
            }
            if (i + 1 < n && grid[i + 1][j] === "1") {
                grid[i + 1][j] = "0";
                dfs(i + 1, j);
            }
            if (j - 1 >= 0 && grid[i][j - 1] === "1") {
                grid[i][j - 1] = "0";
                dfs(i, j - 1);
            }
        };

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === "1") {
                    count++;
                    grid[i][j] = "0";
                    dfs(i, j);
                }
            }
        }
        return count;
    }
}
