/**
implement a stack 
*/

class Stack {
    constructor() {
        // Initialize your stack
        this.stack = [];
    }
    
    push(element) {
        // Add element to the top
        return this.stack.push(element);
    }
    
    pop() {
        // Remove and return top element
        return this.stack.pop();
    }
    
    peek() {
        // Return top element without removing
        const len = this.stack.length;
        return this.stack[len - 1];
    }
    
    isEmpty() {
        // Check if stack is empty
        if (this.stack.length === 0) return true;
        return false;
    }
    
    size() {
        // Return number of elements
        return this.stack.length;
    }
    
    clear() {
        // Remove all elements
        this.stack = [];
    }
}

module.exports = Stack;