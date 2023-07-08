var removeDuplicates = function(nums) {
    let i = 1;
    while(i < nums.length) {
        if(nums[i-1] == nums[i]) {
            nums.splice(i,1);
        } else {
            i++;
        }
    }
};