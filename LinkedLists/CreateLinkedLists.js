/**
 * Created by david on 11/2/2017.
 */
function LinkedList() {
    this.length = 0;
    this.head = null;


    var Node = function (element) {
        this.element = element;
        this.next = null;
    };

    this.size = function () {
        return this.length;
    };

    this.head = function () {
        return this.head;
    };

    this.add = function (element) {
        var node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            var currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
    };

    this.remove = function (element) {
        //starts at the beginning of the head
        var currentNode = head;
        var previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        this.length--;
    };

    this.isEmpty = function () {
        return length === 0;
    };

//find the index of an element
    this.indexOf = function (element) {
        var currentNode = this.head;
        var index = -1;

        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        //return -1 just means the element is not in the linked list.
        return -1;
    };

//find the element of an index
    this.elementAt = function (index) {
        var currentNode = this.head;
        var count = 0;

        while (count < index) {
            count++;
            currentNode = currentNode.next
        }
        return currentNode.element;
    };

    this.addAt = function (index, element) {
        var node = new Node(element);

        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if (index < length) {
            return false;
        }

        if (index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        this.length++;
    };

    this.removeAt = function (index) {
        var currentNode = this.head;
        var previousNode;
        var currentIndex = 0;

        if (index < 0 || index >= this.length) {
            return null
        }

        if (index === 0) {
            head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next
        }
        this.length--;
        return currentNode.element;
    };
};

var conga = new LinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Bird');
conga.add('Fish');

console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf('Puppy'));
console.log(conga.indexOf('Bird'));
console.log(conga.removeAt(1));
console.log(conga.size());