const getTotalIsles = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  
  function exploreIsland(row, col) {
     
      if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 'W') {
          return;
      }

      // Mark the current cell as visited
      grid[row][col] = 'W';

      // Explore neighboring cells
      exploreIsland(row + 1, col); // down
      exploreIsland(row - 1, col); // up
      exploreIsland(row, col + 1); // right
      exploreIsland(row, col - 1); // left
  }

  
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L') {              // Explore the island starting from this cell
              exploreIsland(i, j);
              // Increment the count of distinct islands
              count++;
          }
      }
  }

  return count;
};

module.exports = getTotalIsles;
