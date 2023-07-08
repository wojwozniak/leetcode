/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    let left, right;

    let div = 1;
    while(x >= 10 * div) div*=10;
    while(x) {
        left = Math.floor(x / div);
        right = x % 10;

        if(left != right) return false;

        x = Math.floor((x%div)/10)
        div /= 100;
    }
    return true;
};