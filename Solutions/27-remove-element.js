var removeElement = function(nums, val) {
    let output = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] != val) {
            output++;
        } else {
            nums.splice(i,1);
            i--;
        }
    }
    return output;
};