const findMin = (arr) => {
    let l = 0;
    let r = arr.length - 1;
    let mid;
    while (l < r) {
        mid = Math.floor((l + r) / 2);
        if(arr[mid-1] > arr[mid] && arr[mid+1] > arr[mid]) {
            return arr[mid];
        } else if(arr[mid] < arr[r]) {
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return arr[l];
}