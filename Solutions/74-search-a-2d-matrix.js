const searchMatrix = (matrix, target) => {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
      return false;
    }
  
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    // Binary search to find the potential row where the target might be located
    let start = 0;
    let end = rows - 1;
    let potentialRow = -1;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (matrix[mid][0] <= target && matrix[mid][cols - 1] >= target) {
        potentialRow = mid;
        break;
      } else if (matrix[mid][0] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  
    // If potentialRow is -1, the target is not present in the matrix
    if (potentialRow === -1) {
      return false;
    }
  
    // Binary search on the potential row
    start = 0;
    end = cols - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (matrix[potentialRow][mid] === target) {
        return true;
      } else if (matrix[potentialRow][mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  
    return false;
  }