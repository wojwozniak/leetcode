const longestConsecutive = (nums) => {
    // Time complexity: O(n)
    // We could write a loop
    // adding nums to the set
    // but that doesn't really
    // change anything
    let set = new Set(nums);
    let max = 0;
    for (let num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let currentMax = 1;
            while (set.has(current + 1)) {
                current++;
                currentMax++;
            }
            max = Math.max(max, currentMax);
        }
    }
    return max;
};