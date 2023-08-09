/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
    // Create two hashmaps
    const tFreqMap = {};
    const windowFreqMap = {};

    // Pass over input string and update hashmap, initialise hashmap for freqMap
    for (const char of t) {
        tFreqMap[char] = (tFreqMap[char] || 0) + 1;
        windowFreqMap[char] = 0;
    }

    // Create variables - left pointer, min. length of the substring, 
    // min. working left pointer and amount of req. chars
    let left = 0;
    let minLen = Infinity;
    let minWindowStart = 0;
    let requiredChars = Object.keys(tFreqMap).length;

    // Go over the string again
    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // Update hashmap for window, decrement requiredChars if we have required amount of given char 
        if (char in windowFreqMap) {
            windowFreqMap[char]++;
            if (windowFreqMap[char] === tFreqMap[char]) {
                requiredChars--;
            }
        }

        // Try to shrink window from left as much as we can
        while (requiredChars === 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minWindowStart = left;
            }

            const leftChar = s[left];
            if (leftChar in windowFreqMap) {
                windowFreqMap[leftChar]--;
                if (windowFreqMap[leftChar] < tFreqMap[leftChar]) {
                    requiredChars++;
                }
            }

            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(minWindowStart, minWindowStart + minLen);
};