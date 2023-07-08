var convert = function(s, numRows) {
    if(numRows == 1) return s;

    let output = "";
    let len = s.length;
    for(let r = 0; r<numRows; r++) {
        let increment = 2 * (numRows - 1);
        for(let i = r; i<len; i+=increment) {
            output+=s[i];
            if(r > 0 && r < numRows -1 && i + increment - 2 * r < len) {
                output+= s[i+increment-2*r];
            }
        }
    }
    return output;
};