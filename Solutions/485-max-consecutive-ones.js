var findMaxConsecutiveOnes = function(nums) {
    let curr = 0;
    let max = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] == 1) {
            curr++;
        } else {
            if(curr > max) {
                max = curr;
            }
            curr = 0;
        }
    }
    if(curr > max) {
        max = curr;
    }
    return max;
};