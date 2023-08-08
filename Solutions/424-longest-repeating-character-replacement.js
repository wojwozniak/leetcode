const characterReplacement = (s, k) => {
  const charCount = new Array(26).fill(0);
  let maxLength = 0;
  let maxCount = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
      const charIndex = s.charCodeAt(end) - 'A'.charCodeAt(0);
      charCount[charIndex]++;

      maxCount = Math.max(maxCount, charCount[charIndex]);

      // If we can't replace all characters to the most frequent move start of window forwards
      if (end - start + 1 - maxCount > k) {
          charCount[s.charCodeAt(start) - 'A'.charCodeAt(0)]--;
          start++;
      }

      maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};