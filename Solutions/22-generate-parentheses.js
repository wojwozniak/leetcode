const generateParenthesis = (n) => {
    // We need to use two stacks
    // and backtracking

    const stack = [];
    const output = [];

    const backtrack = (opened, closed) => {
        if(opened === closed && closed === n) {
            output.push(stack.join(""));
            return;
        }
        if(opened < n) {
            stack.push("(");
            backtrack(opened+1 , closed);
            stack.pop();
        }
        if(closed < opened) {
            stack.push(")");
            backtrack(opened, closed + 1);
            stack.pop();
        }
    }
    backtrack(0,0);
    return output;
};