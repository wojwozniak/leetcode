var evalRPN = function(tokens) {
    const stack = [];
    let i = 0;
    while(tokens[i]) {
        if( tokens[i] == '/' || tokens[i] == '*' || tokens[i] == '+' || tokens[i] == '-' ) {
            let r = parseInt(stack.pop());
            let l = parseInt(stack.pop());
            let currentLoop = null;
            switch(tokens[i]) {
                case '+':
                    currentLoop = l + r;
                    break;
                case '-':
                    currentLoop = l - r;
                    break;
                case '*':
                    currentLoop = l * r;
                    break;
                case '/':
                    currentLoop = Math.trunc(l/r);
                    break;
            }
            stack.push(currentLoop.toString());
            i++;
        } else {
            stack.push(tokens[i]);
            i++;
        }
    }
    return stack.pop();
};