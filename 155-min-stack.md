# 155. Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

- MinStack() initializes the stack object.
- void push(int val) pushes the element val onto the stack.
- void pop() removes the element on the top of the stack.
- int top() gets the top element of the stack.
- int getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.

## Idea

Obviously we need to use stack. The biggest problem is $O(1)$ time for min element -> to do that we will use a second stack, storing min elements:
- when adding, we will check if new element is smaller or equal (we need to also store duplicates on that stack)
- when popping we need to check if element popped is on the min stack, and pop that one too if needed. 

## Solution

```rust
struct MinStack {
    stack: Vec<i32>,
    min_stack: Vec<i32>,
}

impl MinStack {
    fn new() -> Self {
        MinStack {
            stack: Vec::new(),
            min_stack: Vec::new(),
        }
    }

    fn push(&mut self, val: i32) {
        self.stack.push(val);
        if self.min_stack.is_empty() || val <= *self.min_stack.last().unwrap_or(&i32::MAX) {
            self.min_stack.push(val);
        }
    }

    fn pop(&mut self) {
        if let Some(val) = self.stack.pop() {
            if val == *self.min_stack.last().unwrap_or(&i32::MAX) {
                self.min_stack.pop();
            }
        }
    }

    fn top(&self) -> i32 {
        *self.stack.last().unwrap_or(&0)
    }

    fn get_min(&self) -> i32 {
        *self.min_stack.last().unwrap_or(&i32::MAX)
    }
}
```