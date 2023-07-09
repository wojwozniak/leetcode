var containsDuplicate = function(nums) {
    let len = nums.length;
    let hashmap = new Set();
    for(let i=0; i<len; i++) {
        if(hashmap.has(nums[i])) {
            return true;
        }
        hashmap.add(nums[i]);
    }
    return false;
};