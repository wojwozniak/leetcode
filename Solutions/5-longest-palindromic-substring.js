// Checking palindromes starting from middle to go down from O(n^3) to O(n^2)

var longestPalindrome = function(s) {
    let str = '';
    let len = 0;

    // Auxilliary pointers
    let l, r;

    for(let i=0; i<s.length; i++) {
        // Check for palindrome with even length
        l = i, r = i;
        while(l >= 0 && r < s.length && s[l] === s[r]) {
            if(r-l+1 > len) {
                str = s.substring(l, r + 1);
                len = r-l+1;
            }
            l-=1;
            r+=1;
        }

        // Check for palindrome with odd length
        l = i, r = i+1;

        while(l >= 0 && r < s.length && s[l] === s[r]) {
            if(r - l + 1 > len) {
                str = s.substring(l , r + 1);
                len = r - l + 1;
            }
            l-=1;
            r+=1;
        }  
    }
    return str;
};