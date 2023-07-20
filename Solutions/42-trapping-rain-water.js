const trap = (arr) => {
    if(!arr || arr.length === 0) return 0;
    let l = 0, r = arr.length - 1;
    let maxL = arr[l], maxR = arr[r];
    let output = 0;
    while(l < r) {
        if(maxL <= maxR) {
            l++;
            maxL = Math.max(maxL, arr[l]);
            output += maxL - arr[l];
        } else {
            r--;
            maxR = Math.max(maxR, arr[r]);
            output += maxR - arr[r];
        }
    }
    return output;
};