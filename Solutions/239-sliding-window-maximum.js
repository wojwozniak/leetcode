/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class Deque {
    constructor() {
        this.queue = [];
    }
    
    push(element) {
        this.queue.push(element);
    }
    
    pop() {
        return this.queue.pop();
    }
    
    front() {
        return this.queue[0];
    }
}

const maxSlidingWindow = function(nums, k) {
    const result = [];
    const deque = []; // Using a simple array as a deque
    
    for (let i = 0; i < nums.length; i++) {
        // Remove elements outside of the current sliding window
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }
        
        // Remove smaller elements from the back of the deque
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        
        deque.push(i);
        
        // Add the maximum element in the current window to the result
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
};