/*
Linked list

A linked list is a linear data structure that includes a series of connected nodes.
Each node consists of a data value and a pointer that points to the next node. 
The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure

Random access of elements is not feasible and accessing an element has linear time complexity 

    The linked list data structure supports three main operations:
        * Insertion - to add an element at the beginning, end or at a given index in the list
        * Deletion - to remove an element given its index or value 
        * Search - to find an element given its value
        

Usage: 
    All applications of both stacks and queues are applications of linked lists
    Image viewer 

Implementation: 
    * isEmpty() - check if the list is empty
    * getSize - return the size of the list 
    * prepend() - add a node to start of the list
    * append() - add a node at the end of the list
    * insert() - add a node at a given index in the list 
    * remove() - remove a node from the list
    * search() - find an element in the list 
    * print() - print the list

 */

class Node {

    constructor(value){
        this.value = value
        this.next = null
    }

}

class LinkedList {

    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    //Big-O = O(1)
    prepend(value){
        const node = new Node(value)

        // if(this.isEmpty()){
        //     this.head = node
              
        // } else {
        //     node.next = this.head
        //     this.head = node 
        // }

        if(!this.isEmpty()){
            node.next = this.head
        }

        this.head = node
        this.size++
    }

    //Big-O = O(n) // constant time complexity requires a tail pointer as well.
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node 
        } else {
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value, index){

        if(index < 0 || index > this.size){
            console.log('invalid index')
            return 
        }
        
        if(index === 0){
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for(let i = 0; i < index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }


    }
    
    remove(){

    }

    search(){

    }

    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        } else {
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

const list = new LinkedList()
console.log('List is empty? ', list.isEmpty())
console.log('List size: ', list.getSize())
list.print()



list.insert(10, 0)
list.print()

list.insert(20, 0)
list.print()

list.insert(30, 1)
list.print()

list.insert(40, 2)
list.print()
console.log('List size: ', list.getSize())
// list.prepend(10)
// list.print()

// list.prepend(20)
// list.prepend(30)
// list.print()

// list.append(05)
// list.print()