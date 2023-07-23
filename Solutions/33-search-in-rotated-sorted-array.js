// Problem: Search in Rotated Sorted Array
const search = (arr, t) => {
    let l = 0, r = arr.length - 1, mid;
    while (l <= r) {
        mid = Math.floor((l + r) / 2);
        if(arr[mid] === t) {
            return mid;
        } else if(arr[mid] >= arr[l]) {
            if(t >= arr[l] && t < arr[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if(t <= arr[r] && t > arr[mid]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
}