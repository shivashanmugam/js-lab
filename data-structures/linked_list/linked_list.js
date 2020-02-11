var START_INDEX = 0;
var Comparator = require('../util/comparotor/comparator').Comparator;

class LinkedListNode {
    constructor(element, next = null) {
        this.value = element;
        this.next = next;
    }
    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}

exports.LinkedList = class {
    constructor(comparator) {
        this.head = null;
        this.tail = null;
        this.compare = new Comparator(comparator);
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }


    append(element) {
        var newNode = new LinkedListNode(element);
        var currentNode = this.head;
        if (currentNode == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        while (currentNode.next != null) {
            currentNode = currentNode.next;
        }
        this.tail = newNode;
        currentNode.next = newNode;
        this.size++;

    }
    insertAt(index, element) {
        /* cases
        delete at start index
        delete at end index
        delete at middle
        delete at negative index 
        delete at out of bound index
        */
        var newNode = new Node(element);
        if (index == START_INDEX) { //start index
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
        } else if (index == this.size) { // end index
            this.add(element);
        } else if (index < 0 || index > this.size) {
            console.warn('insert element out of bound');
        } else {
            var currentNode = this.head;
            var previousNode;
            var currentIndex = START_INDEX;
            while (index != currentIndex) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }
            newNode.next = currentNode;
            previousNode.next = newNode
            this.size++;
        }

    }

    delete(value) {

        // delete will remove all the nodes with the matching value

        if (this.head == null) {
            return null;
        }

        let deletedNode = null;
        // deleting head 
        while (this.head && this.compare.equal(this.head.value, value)) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        var currentNode = this.head;
        // if it reaches tail node
        while (currentNode && currentNode.next) {
            if (this.compare.equal(currentNode.next.value, value)) {
                deletedNode = currentNode.next;
                currentNode.next = deletedNode.next;
            } else {
                currentNode = currentNode.next;
            }
        }

        // Incase if the tail node got deleted making the current node ( node before tail ) as tail node
        if (this.compare.equal(this.tail.value, value)) {
            this.tail = currentNode;
        }
        return deletedNode;
    }

    deleteAt(index) {
        // START 
        // END
        // MIDDLE
        // NEGATIVE INDEX
        // OUT OF BOUND INDEX
        if (index == START_INDEX) {
            this.head = this.head.next;
            this.size--;
        } else if (index < 0 || index >= this.size) {
            console.warn('Invalid index position to delete')
        } else {
            var currentNode = this.head;
            var currentIndex = START_INDEX;
            var previousNode;
            while (currentIndex != index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }
            previousNode.next = currentNode.next;
            this.size--;
        }
    }

    find({ value = undefined, callback = undefined }) {
        var currentNode = this.head;
        while (currentNode) {
            // If callback is specified then try to find node by callback.
            if (callback && callback(currentNode.value)) {
                return currentNode
            }

            // If value is specified then try to compare by value
            if (value && this.compare.equal(value, currentNode.value)) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    print() {
        var currentNode = this.head;
        console.log(currentNode.value)
        while (currentNode.next != null) {
            currentNode = currentNode.next;
            console.log(currentNode.value)
        }
        console.log('---------------------------\n\n');
    }

    toArray() {
        var currentNode = this.head;
        var array = [];
        while (currentNode != null) {
            array.push(currentNode)
            currentNode = currentNode.next;
        }
        return array;
    }

    toString(callback) {
        return this.toArray().map(node => node.toString(callback)).toString();
    }
}
