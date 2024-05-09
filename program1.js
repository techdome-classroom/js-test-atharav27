const getTotalIsles = function (grid) {
  const rows = grid.length
  const cols = grid[0].length
  let count = 0

  
  function exploreIsland(row, col) {
     
      if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 'W') {
          return;
      }


  
      grid[row][col] = 'W';
      exploreIsland(row + 1, col); 
      exploreIsland(row - 1, col)
      exploreIsland(row, col + 1); 
      exploreIsland(row, col - 1); 
  }

  
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L') {
              exploreIsland(i, j);
              count++;
          }
      }
  }

  return count;
};

module.exports = getTotalIsles;
