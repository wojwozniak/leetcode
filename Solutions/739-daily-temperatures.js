const dailyTemperatures = (temperatures) => {
    // Create an array to store the output
    const output = new Array(temperatures.length).fill(0);

    // Create a stack to store the index of the temperatures and their values
    const stack = [];

    // Loop through the temperatures
    for (let i = 0; i < temperatures.length; i++) {
        // While the stack is not empty and the current temperature is greater than the temperature at the top of the stack
        // Pop the top of the stack and set the output at the index of the top of the stack to the difference between the current index and the index at the top of the stack
        while (stack.length && temperatures[i] > stack[stack.length - 1][1]) {
            const [index, temperature] = stack.pop();
            output[index] = i - index;
        }
        // Push the current index and temperature to the stack
        stack.push([i, temperatures[i]]);
    }
    return output;
}