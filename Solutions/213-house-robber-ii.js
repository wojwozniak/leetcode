const robHelper = (nums) => {
    const n = nums.length;
    
    // Base cases
    if (n === 0) return 0;
    if (n === 1) return nums[0];
    
    // Initialize dp array
    const dp = new Array(n);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    // Each cell can be either the previous cell or the cell two steps back plus the current cell
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    
    return dp[n - 1];
};

const rob = (nums) => {
    const n = nums.length;
    
    if (n === 0) return 0;
    if (n === 1) return nums[0];
    
    // Case 1: Rob the first house
    const case1 = robHelper(nums.slice(0, n - 1));
    
    // Case 2: Don't rob the first house
    const case2 = robHelper(nums.slice(1));
    
    return Math.max(case1, case2);
};