/*
Tower of Hanoi

The objective of the puzzle is to move the entire stack to the last rod, obeying the following rules:
    - Only one disk may be moved at a time. 
    - Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or an empty rod. 
    - No disk may be placed on a disk that is smaller 


*/

function towerOfHanoi(n, fromRod, toRod, usingRod){

    if(n == 1){
        console.log('move disc 1 from ' + fromRod +  ' to ' + toRod)
        console.log('           ')
        return
    }

    towerOfHanoi(n-1, fromRod, usingRod, toRod)
    console.log('move disc ' + n + ' from ' + fromRod + ' to ' + toRod);
    console.log('           ')
    towerOfHanoi(n-1, usingRod, toRod, fromRod)
}
// Big-O = O(2^n)

towerOfHanoi(4, 'A', 'C', 'B')