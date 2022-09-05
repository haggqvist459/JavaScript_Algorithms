/*
Queue

The queue data structure is a sequential collection of elements that follows the principle of First in First out. (FIFO)
The first element inserted into the queue is the first element to be removed.
    A queue of people. People enter the queue at one end (rear/tail) and leave the queue from the other end (front/head).

Queue is an abstract data type. It is defined by its behaviour rather than being a mathematical model. 
    A queue is a list, what makes it a queue is how it behaves. 

The queue data structure supports two main operations.
    * Enqueue, which addds an element to the rear/tail of the collection
    * Dequeue, which removes an element from the front/head of the collection

Implementation: 
    * enqueue(element) - add an element to the queue 
    * dequeue() - remove the oldest element from the queue
    * peek() - get the value of the element at the front of the queue without removing it 
    * isEmpty() - check if the queue is empty
    * size() - get the number of elements in the queue
    * print() - visualise the elements in the queue
    
*/

class Queue {

    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }

    isEmpty(){
        return this.items.length === 0 // returns true or false
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
    }

}

const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.size())
queue.print()

console.log(queue.dequeue())
console.log(queue.peek())