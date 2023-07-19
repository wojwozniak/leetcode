// More optimal version without operations on every iteration
const maxArea = (arr) => {
    let l = 0;
    let r = arr.length - 1;
    let output = Math.min(arr[l], arr[r]) * (r-l);
    while(l < r) {
        if(arr[l]<=arr[r]) {
            l++;
            if(arr[l]>arr[l-1]) {
                output = Math.max(output, Math.min(arr[l], arr[r]) * (r-l));
            }
        } else {
            r--;
            if(arr[r] > arr[r+1]) {
                output = Math.max(output, Math.min(arr[l], arr[r]) * (r-l));
            }
        }
    }
    return output;
};

// Simpler to understand version, same idea
const maxAreaV2 = (arr) => {
    let output = 0;
    let l = 0;
    let r = arr.length - 1;
    while(l < r) {
        output = Math.max(output, Math.min(arr[l], arr[r]) * (r-l));
        if(arr[l]<=arr[r]) {
            l++;
        } else {
            r--;
        }
    }
    return output;
};