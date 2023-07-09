var productExceptSelf = (nums) => {
    let len = nums.length;
    let output = new Array(len).fill(1);
    let pre = 1, post = 1;
    for(let i=0; i<len; i++) {
        output[i]*=pre;
        pre*=nums[i];
    }
    for(let i=len-1; i>=0; i--) {
        output[i]*=post;
        post*=nums[i];
    }
    return output;
};