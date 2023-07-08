/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums.length == 2) {
        return [0,1];
    }
    let hash_map = {}
    for (let i = 0; i < nums.length; i++) {
        if (!(target - nums[i] in hash_map)) {
        hash_map[nums[i]] = i;
        } else {
        return [hash_map[target - nums[i]], i];
        }
    }
};