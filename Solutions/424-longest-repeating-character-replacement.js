const characterReplacement = (s, k) => {
    const n = s.length;
    let maxCount = 0, l = 0;
    let charCount = {};
  
    for (let r = 0; r < n; r++) {
      charCount[s[r]] = (charCount[s[r ]] || 0) + 1;
      maxCount = Math.max(maxCount, charCount[s[r]]);
  
      if (r - l + 1 - maxCount > k) {
        charCount[s[l]]--;
        l++;
      }
    }
  
    return n - l;
  };