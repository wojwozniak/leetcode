var strStr = function(haystack, needle) {
    let i = 0;
    let y = 0;
    let len = haystack.length;
    let min = needle.length;
    while (i < len) {
        if (haystack[i] === needle[y]) {
            y++;
            if (y === min) {
                return i - min + 1;
            }
        } else {
            i -= y;
            y = 0;
        }
        i++;
    }
    return -1;
};