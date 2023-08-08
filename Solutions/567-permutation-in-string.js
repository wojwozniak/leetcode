/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
    if (s1.length > s2.length) {
        return false;
    }
    
    const s1Freq = new Array(26).fill(0);
    const s2Freq = new Array(26).fill(0);
    
    for (let i = 0; i < s1.length; i++) {
        s1Freq[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2Freq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    for (let i = 0; i < s2.length - s1.length; i++) {
        if (areArraysEqual(s1Freq, s2Freq)) {
            return true;
        }
        
        s2Freq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        s2Freq[s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0)]++;
    }
    
    if (areArraysEqual(s1Freq, s2Freq)) {
        return true;
    }
    
    return false;
};

const areArraysEqual = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};