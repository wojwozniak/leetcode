var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        return "";
    }
    return strs[0].slice(0, getNumber(strs));
};

function getNumber(strs) {
    if(strs.length == 0) {
        return 0;
    }
    let currentLength = 0;
    while(currentLength < strs[0].length) {
        currentChar = strs[0][currentLength];
        for(let i=1; i<strs.length; i++) {
            if(strs[i][currentLength] != currentChar) {
                return currentLength;
            }
        }
        currentLength++;
    }
    return currentLength;
}