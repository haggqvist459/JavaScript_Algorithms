/*
Stack

The stack data structure is a sequential collection of elements that follows the principle of Last In First Out (LIFO)
The last element inserted into the stack is the first element to be removed.
    A stack of plates, the last plate placed on top of the stack is also the first plate removed from the stack.

Stack is an abstract data type. It is defined by its behavior rather than being a mathematical model. 
    A stack is simply a list and what makes it a stack is how it behaves. 

The stack data structure supports two main operations: 
    * Push, which adds an element to the collection
    * Pop, which removes the most recently added element from the collection 

    Usage
        Browser history tracking
        Undo operation when typing
        Expression conversions
        Call stack used in JavaScript runtime. 


Implementation:
    push(element) - add an element to the top of the stack
    pop() - remove the top most element from the stack
    peek() - get the value of the top element without removing it
    isEmpty() - check if the stack is empty
    size() - get the number of elements in the stack
    print() - visualize the elements in the stack


*/


class Stack {

    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length - 1] //gives us the last element of the array, which is the top element of the stack
    }

    isEmpty(){
        return this.items.length === 0 // will return true or false 
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
    }
}

const stack = new Stack()
console.log(stack.isEmpty())

stack.push(20)
stack.push(30)
stack.push(40)
console.log(stack.size()) 
stack.print()

console.log(stack.pop()) //40
console.log(stack.peek()) //30