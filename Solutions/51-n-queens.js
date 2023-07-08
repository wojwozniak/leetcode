const solveNQueens = (n) => {
    const result = [];
    const board = Array.from(Array(n), () => Array(n).fill('.'));
  
    function backtrack(row) {
      if (row === n) {
        const solution = board.map(row => row.join(''));
        result.push(solution);
        return;
      }
  
      for (let col = 0; col < n; col++) {
        if (isValid(row, col)) {
          board[row][col] = 'Q';
          backtrack(row + 1);
          board[row][col] = '.';
        }
      }
    }
  
    function isValid(row, col) {
      for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') {
          return false;
        }
      }
  
      for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') {
          return false;
        }
      }
  
      for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') {
          return false;
        }
      }
  
      return true;
    }
  
    backtrack(0);
    return result;
  }