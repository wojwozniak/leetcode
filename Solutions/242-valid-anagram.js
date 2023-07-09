const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const charCount = new Map();

    // Count the occurrences of each character in the first string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Now substract occurences from second string
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        if (!charCount.has(char)) {
        return false;
        }
        charCount.set(char, charCount.get(char) - 1);
        if (charCount.get(char) === 0) {
        charCount.delete(char);
        }
    }

    // If size === 0 they are anagrams
    return charCount.size === 0;
}