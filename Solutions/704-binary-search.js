const search = (nums, target) => {
    let len = nums.length;
    let l = 0, r = len - 1;
    let m;
    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (nums[m] == target) {
            return m;
        } else if (nums[m] > target) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return -1;
}