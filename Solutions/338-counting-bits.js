/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (num) => {
    const result = [];
    
    for (let i = 0; i <= num; i++) {
      result.push(countOnes(i));
    }
    
    return result;
  }
  
  const countOnes = (n) => {
    let count = 0;
    while (n > 0) {
      count += n & 1;
      n >>= 1;
    }
    return count;
  }
  