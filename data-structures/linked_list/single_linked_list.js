var START_INDEX = 0;

class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(element){
        this.head = new Node(element);
        this.size = 1;
    }

    add(element){
        var newNode = new Node(element);
        var currentNode = this.head;
        while(currentNode.next != null){
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        this.size++;

    }
    insertAt(index, element){
        /* cases
        delete at start index
        delete at end index
        delete at middle
        delete at negative index 
        delete at out of bound index
        */
        var newNode = new Node(element);
        if(index == START_INDEX){ //start index
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
        } else if(index == this.size){ // end index
            this.add(element);
        } else if(index < 0 || index > this.size){
            console.warn('insert element out of bound');
        } else {
            var currentNode = this.head;
            var previousNode;
            var currentIndex = START_INDEX;
            while(index != currentIndex){
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }
            newNode.next = currentNode;
            previousNode.next = newNode
            this.size++;
        }
        
    }
    deleteAt(index){
        // START 
        // END
        // MIDDLE
        // NEGATIVE INDEX
        // OUT OF BOUND INDEX
        if(index == START_INDEX){
            this.head = this.head.next;
            this.size--;
        }else if(index < 0 || index >= this.size){
            console.warn('Invalid index position to delete')
        }else{
            var currentNode = this.head;
            var currentIndex = START_INDEX;
            var previousNode;
            while(currentIndex != index){
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }
            previousNode.next = currentNode.next;
            this.size--;
        }
    }
    print(){
        var currentNode = this.head;
        console.log(currentNode.element)
        while(currentNode.next != null){
            currentNode = currentNode.next;
            console.log(currentNode.element)
        }
        console.log('---------------------------\n\n');
    }
}

var myLinkedList = new LinkedList(1);
myLinkedList.print();
myLinkedList.add(2)
myLinkedList.print();
myLinkedList.insertAt(2,3)
myLinkedList.insertAt(0,0)
myLinkedList.print();
myLinkedList.deleteAt(4)
myLinkedList.print();