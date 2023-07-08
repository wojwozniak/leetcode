var myPow = function(x, n) {
    if (n == 0) {
        return 1;
    } else if (n < 0) {
        return 1 / myPow(x, -n);
    } else if (n & 1) {
        return x * myPow(x, n - 1);
    } else return myPow(x * x, n / 2);
};