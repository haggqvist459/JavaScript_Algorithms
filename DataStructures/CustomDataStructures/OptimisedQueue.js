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
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    
    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    dequeue(){
        const item = this.items[this.front]
        if(!item){
            return
        }
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        console.log(this.items)
    }

}

const queue = new Queue()
console.log(queue.isEmpty()) // true

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.size())
queue.print()

console.log(queue.dequeue()) // 10
console.log(queue.peek()) // 20
