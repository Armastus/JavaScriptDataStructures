/** Linked List contains 2 properties:
 * 1. Head Property
 * 2. Tail Property**/
function LinkedList() {
    /** head and tail start null to prep them to be filled
     * with data to pull toward.
     */
    this.head = null;
    this.tail = null;
}
/** A Node contains 3 properties:
 * 1. Value property - ex: value = 7
 * 2. Next property - ex: next = nextNode
 * 3. Previous Property - ex: prev = prevNode**/
function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

/**Let's create a head value of the linked list. **/
LinkedList.prototype.addToHead = function(value) {
    /**value = our new head value
     * this.head = our next value because the new head makes this.head
     * the old head.
     * null = this.prev because our previous node is blank or does not exist.
     */
    var newNode = new Node(value, this.head, null);

    /** We have to cases to write for in order to make sure
     * that our head is set correctly.
     * 1. Head exists: If head already exists, we need to move the pointer
     * from the old head to the newNode head.
     * 2. Head does not exists: Else set tail to the newNode
     * since the head and tail are one and the same to begin with
     * when starting with a blank linked list. Also set the head
     * to equal the newNode. So,
     * this.tail and this.head = newNode;**/
    if(this.head) this.head.prev = newNode;
    else
        this.tail = newNode;
    this.head = newNode;
};

/**Let's create a tail value of the linked list. **/
LinkedList.prototype.addToTail = function(value) {
    /**value = our new head value
     * null = this.next is null
     * this.tail =  this.tail becomes our prev value because the new tail makes this.prev
     * the old tail.
     */
    var newNode = new Node(value, null, this.tail);

    /** We have to cases to write for in order to make sure
     * that our tail is set correctly.
     * 1. Tail exists: If tail already exists, we need to move the pointer
     * from the old tail to the next newNode which becomes the new tail.
     * 2. Tail does not exists: Else set head to the newNode
     * since the head and tail are one and the same to begin with
     * when starting with a blank linked list. Also set the tail
     * to equal the newNode. So,
     * this.head and this.tail = newNode;**/
    if(this.tail) this.tail.next = newNode;
    else
        this.head = newNode;
    this.tail = newNode;
};

/** Let's remove a head node **/
LinkedList.prototype.removeHead = function(){
    /** Let's setup our base condition in which the
     * linked list is empty.
     */
    if(!this.head) return null;

    /** We need to move the pointer from the current head
     * to the next node so that it becomes the new head. We
     * also need to prepare for the case where we start with only
     * one node. In that case, this.head.next and this.head.prev is actually null.
     */
    var val = this.head.value;
    this.head = this.head.next;
    if(this.head) this.head.prev = null
    else
        this.tail = null;
    return val;
};

/** Let's remove a tail node **/
LinkedList.prototype.removeTail = function() {
    /** Let's setup our base condition in which the
     * linked list is empty.
     */
    if(!this.tail) return null;

    /** We need to move the pointer from the current tail
     * to the prev node so that it becomes the new tail. We
     * also need to prepare for the case where we start with only
     * one node. In that case, this.tail.prev and this.tail.next is actually null.
     */
    var val = this.tail.value;
    this.tail = this.tail.prev;
    if(this.tail) this.tail.next = null;
    else
        this.head = null;
    return val;
};

/** Let's search a our linked list **/
LinkedList.prototype.search = function(searchValue) {
    /** Start on the currentNode, whichever it may be. In this case
     * it is the head **/
    var currentNode = this.head;

    /** While currentNode is true or NOT null.
     * Then, currentNode = the currentNode.next;**/
    while(currentNode) {
        /** If the currentNode value is equal to the searchValue
         * return the currentNode value.**/
        if(currentNode.value === searchValue) return currentNode.value;
        currentNode = currentNode.next;
    }
    return null;
};

LinkedList.prototype.indexOf = function(valueIndex) {
    var indexes = [];
    var currentIndex = 0;
    var currentNode = this.head;

    /** While currentNode is true or NOT null.
     * Then, currentNode = the currentNode.next;**/
    while(currentNode) {
        /** If the currentNode value is equal to the value
         * return the currentNode.indexOf(valueIndex).**/
        if(currentNode.value === valueIndex) {
            indexes.push(currentIndex);
        }

        currentNode = currentNode.next;
        currentIndex++;
    }
    return indexes;
};

/** Examples of how the LinkedList() and Node() functions look **/
//var LL = new LinkedList();
//Console log to view how the linked list looks.
//console.log(LL);

//var node1 = new Node(100, 'node2', 'null');
//Console log to view how the node looks.
//console.log(node1);

var ll = new LinkedList();
/** Run to view the behaviours of our head and tail node **/

/** ADD TO HEAD EXAMPLE: **/
/**When running only ll.addToHead(100) you'll see that
 * head and tail point to 100.**/
ll.addToHead(100);
ll.addToHead(200);
/**When adding another head and running it, you'll see that
 * the head points to the new node and the tail points to the
 * old one above.
 * Also, note the circular parameters consoled out indicating that
 * the pointers are referencing each other now.
 */
ll.addToTail(300);
console.log(ll);

/** REMOVE HEAD EXAMPLE: **/
//This will show the current head 200.
//console.log(ll.removeHead());

/**This should remove the head 200 and then console log the new head
 * which is 100.
 */
ll.removeHead();
console.log(ll.removeHead());

/** ADD TO TAIL EXAMPLE: **/
var myLL = new LinkedList();

myLL.addToTail(10);
myLL.addToTail(20);
myLL.addToTail(30);

/** You can add to the head from a tail function **/
//myLL.addToHead(100);
console.log(myLL);

/** REMOVE TAIL EXAMPLE: **/
/**This should remove the tail and then console log the new tail
 * which is 'one'.
 */
var llTail = new LinkedList();
llTail.addToHead('one');
llTail.addToHead('two');
llTail.addToHead('three');
console.log(llTail.removeTail());

/** SEARCH VALUE IN LINK LIST**/
var searchLL = new LinkedList();

searchLL.addToHead(123);
searchLL.addToHead(70);
searchLL.addToHead('hello');
searchLL.addToTail(19);
searchLL.addToTail('world');
searchLL.addToTail(20);

console.log(searchLL.search(70));
console.log(searchLL.search('world'));
//logs null because 10 does not exist.
console.log(searchLL.search(10));

/** SEARCH INDEXOF MATCHING VALUES IN LINKED LIST**/
var searchLLIndex = new LinkedList();

searchLLIndex.addToHead(123);
searchLLIndex.addToHead(70);
searchLLIndex.addToHead(70);
searchLLIndex.addToHead('hello');
searchLLIndex.addToTail(19);
searchLLIndex.addToTail(20);
searchLLIndex.addToTail(20);

console.log(searchLLIndex.indexOf(70));
//logs empty array because 10 does not exist.
console.log(searchLLIndex.indexOf(10));

//Cool trick to view the prev from tail and the prev prev from tail.
//console.log(myLL.tail.prev);
//console.log(myLL.tail.prev.prev);