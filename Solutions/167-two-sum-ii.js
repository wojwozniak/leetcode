const twoSum = (nums, target) => {
    let l = 0;
    let r = nums.length-1;
    let currSum;
    while(true) {
        currSum = nums[l]+nums[r];
        if(currSum == target) {
            return [l+1, r+1];
        } else if(currSum > target) {
            r-=1;
        } else {
            l+=1;
        }
    }
};