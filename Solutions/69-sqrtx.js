var mySqrt = function(x) {
    let i = 1, diff = 0, lastDiff = 0, closestApprox = i;
    while (true) {
        diff = x - i * i;
        if (diff < 0) return i-1;
        else if (diff === 0) return i;
        lastDiff = diff;
        closestApprox = i;
        i++;
    }
};