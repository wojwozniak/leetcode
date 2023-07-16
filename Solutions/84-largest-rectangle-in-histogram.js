const largestRectangleArea = (heights) => {
    // Output variable
    let maxArea = 0;

    // Create a stack to store the indices of the heights
    const stack = [];

    // Push a 0 to the heights array
    heights.push(0);

    // Loop through the heights
    for (let i = 0; i < heights.length; i++) {
        // While the stack is not empty and the current height is less than the height at the top of the stack
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            // Pop the top of the stack and set the max area to the max of the current max area and the height at the top of the stack times the difference between the current index and the index at the top of the stack
            const height = heights[stack.pop()];

            // The width is the difference between the current index and the index at the top of the stack
            const width = stack.length > 0 ? i - stack[stack.length - 1] - 1 : i;

            // Set the max area to the max of the current max area and the height at the top of the stack times the width
            maxArea = Math.max(maxArea, height * width);
        }
        // Push the current index to the stack
        stack.push(i);
    }
    return maxArea;
};