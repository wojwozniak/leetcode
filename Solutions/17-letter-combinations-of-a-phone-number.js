var letterCombinations = function(digits) {
    const digitToLetters = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };
  const backtrack = (combination, nextDigits, results) => {
    // Base case: If there are no more digits to check
    if (nextDigits.length === 0) {
      results.push(combination);
      return;
    }

    // Get the first digit in the remaining digits
    const digit = nextDigits[0];

    // Get the corresponding letters for the current digit
    const letters = digitToLetters[digit];

    // Recursively generate combinations for the remaining digits
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      backtrack(combination + letter, nextDigits.slice(1), results);
    }
  };

  // Edge case: If the input is empty, return an empty array
  if (digits.length === 0) {
    return [];
  }

  // Initialize the results array
  const results = [];

  // Start the backtracking process
  backtrack('', digits, results);

  return results;
};