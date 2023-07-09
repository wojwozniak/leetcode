const topKFrequent = (nums, k) => {
    let len = nums.length;
    let count = new Map();
    
    // Count the frequency of each element
    for (let i = 0; i < len; i++) {
        count.set(nums[i], (count.get(nums[i]) || 0) + 1);
    }
    
    // Create an array of buckets to store elements with the same frequency
    let buckets = new Array(len + 1).fill(null).map(() => []);
    
    // Place elements into their respective buckets based on their frequency
    for (let [num, frequency] of count.entries()) {
        buckets[frequency].push(num);
    }
    
    // Retrieve the top k frequent elements from the buckets
    let result = [];
    for (let i = len; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]);
        }
    }
    
    return result;
};