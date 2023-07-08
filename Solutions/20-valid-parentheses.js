var isValid = function(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (brackets[char]) {
        stack.push(char);
        } else {
            const top = stack.pop();
            if (!top || brackets[top] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
};