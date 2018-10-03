/** Binary search tree needs 3 parameters.
 * The node value
 * The left node
 * The right node**/
function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

/** Take the value parameter passed and place that value
 * into it's correct node of the BST.
 */

/** INSERT METHOD**/
BST.prototype.insert = function(value) {
    if(value <= this.value) {
        /** If there is no child node, place our value there. **/
        if(!this.left) this.left = new BST(value);
        /** Recursion using insert method:
         * We insert our value into the left child**/
        else this.left.insert(value);
    }else if(value > this.value) {
        /** If there is no child node, place our value there. **/
        if(!this.right) this.right = new BST(value);
        /** Recursion using insert method:
         * We insert our value into the right child**/
        else this.right.insert(value);
    }
};

/** CONTAINS METHOD**/
BST.prototype.contains = function(value) {
    if(value === this.value) return true;
    else if(value < this.value) {
        if(!this.left) return false;
        else return this.left.contains(value);
    }else if(value > this.value) {
        if(!this.right) return false;
        else return this.right.contains(value);
    }
};

/** DEPTH FIRST TRAVERSAL **/
//inorder preorder postorder
BST.prototype.depthFirstTraversal = function(iteratorFunc) {
    /** Remember that Depth First Traversal goes straight down
     * branches in order. So, first all the way down left, then
     * return to parent node until you can go down right. But remember,
     * you must go left first if possible. Google diagram if you need to
     * remember. **/

    /** Using recursion,
     * If this.left node exists, keep going down left branch recursively
     * by calling your function value 'iteratorFunc'
     * Then,
     * Go back up to Parent recursively by calling 'iteratorFunc', 'this.value'
     * Then,
     * recursively checking if you can go down right branch, this.right,
     * recursively by calling your 'iteratorFunc' **/
    if(this.left) this.left.depthFirstTraversal(iteratorFunc);
    iteratorFunc(this.value);
    if(this.right) this.right.depthFirstTraversal(iteratorFunc);
};

/** DEPTH FIRST TRAVERSAL WITH IN-ORDER**/
/** in-order: This is the same as the function above. We just pass in
 * the 'order' parameter called 'in-order' to be more descriptive of
 * how the depthFirstTraversal works**/
BST.prototype.depthFirstTraversalInOrder = function(iteratorFunc, order) {
    /** Remember that Depth First Traversal IN-ORDER goes straight down
     * branches in order. So, first all the way down left, then
     * return to parent node until you can go down right. But remember,
     * you must go left first if possible. Google diagram if you need to
     * remember. **/

    /** Using recursion,
     * If this.left node exists, keep going down left branch recursively
     * by calling your function value 'iteratorFunc'
     * Then,
     * Go back up to Parent recursively by calling 'iteratorFunc', 'this.value'
     * Then,
     * recursively checking if you can go down right branch, this.right,
     * recursively by calling your 'iteratorFunc' **/
    if(this.left) this.left.depthFirstTraversalInOrder(iteratorFunc, order);
    if(order === 'in-order') iteratorFunc(this.value);
    if(this.right) this.right.depthFirstTraversalInOrder(iteratorFunc, order);
};

/** DEPTH FIRST TRAVERSAL WITH PRE-ORDER**/
/**NOTE: PRE-ORDER is good for copying a Binary Search Tree **/
BST.prototype.depthFirstTraversalPreOrder = function(iteratorFunc, order) {
    /** Remember that Depth First Traversal PRE-ORDER first touches the parent,
     * then left, then right node. **/

    /** Using recursion
     * This method first touches this.value (parent nodes)
     * Then touches all the this.left (left nodes)
     * SKIPS 'in-order' because we won't pass that parameter into this method, we are using 'pre-order'
     * Then touches all the this.right (right nodes)**/
    if(order === 'pre-order') iteratorFunc(this.value);
    if(this.left) this.left.depthFirstTraversalPreOrder(iteratorFunc, order);
    if(order === 'in-order') iteratorFunc(this.value);
    if(this.right) this.right.depthFirstTraversalPreOrder(iteratorFunc, order);
};

/** DEPTH FIRST TRAVERSAL WITH POST-ORDER**/
/**NOTE: POST-ORDER is good for copying a Binary Search Tree **/
BST.prototype.depthFirstTraversalPostOrder = function(iteratorFunc, order) {
    /** Remember that Depth First Traversal PRE-ORDER first touches all the left nodes,
     * then all the right nodes then . **/

    /** Using recursion
     * This method first touches all the left children of each sub-tree
     * Then touches all the right children of each sub-tree (left nodes)
     * Then finally touches the parent of each sub-tree. Run this and
     * verify against the image in this folder.
     * SKIPS 'in-order' and 'pre-order' because we won't pass that parameter into this method, we are using 'post-order' **/
    if(order === 'pre-order') iteratorFunc(this.value);
    if(this.left) this.left.depthFirstTraversalPostOrder(iteratorFunc, order);
    if(order === 'in-order') iteratorFunc(this.value);
    if(this.right) this.right.depthFirstTraversalPostOrder(iteratorFunc, order);
    if(order === 'post-order') iteratorFunc(this.value);
};

/** BREADTH FIRST TRAVERSAL **/
BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
    /** We create a queue array. Which is 'fist-in, first-out' like a movie
     * theater line. :)
     * We pass into the array variable 'this'. 'this' refers to the root node
     * of our binary search tree.
     * **/
    var queue = [this];

    /** While the queue has a length **/
    while(queue.length) {

        /** This will take the root node in our queue and shift it
         * over to our 'treeNode' variable. **/
        var treeNode = queue.shift();
        /** Then run the 'iteratorFunc(50)' on the treeNode value. REPEAT **/
        iteratorFunc(treeNode);
        /** Then push both the root's children nodes into the queue variable. **/

        /** Then the left child node gets passed into
         * the iteratorFunc(30), then move it's children to the back of
         * the queue [20, 45]. We are done.**/
        if(treeNode.left) queue.push(treeNode.left);
        /** Then the right child node gets passed into
         * the iteratorFunc(70), then move it's children to the back of
         * the queue [60, 100]. We are done.**/
        if(treeNode.right) queue.push(treeNode.right);
        /** Then the queue looks like this var queue = [20, 45, 60, 100] **/
        //REPEAT this recursion over and over. Run below to view output.
    }
};

/** HOMEWORK:
 * Create two new methods.
 * One will be called 'getMinVal'
 * The other is called 'getMaxVal'
 *
 * 'getMinVal' returns the smallest value in the tree.
 * 'getMaxVal' returns the largest value in the tree.**/

BST.prototype.getMinVal = function() {
    if(this.left) return this.left.getMinVal();
    else return this.value;
};

BST.prototype.getMaxVal = function() {
    if(this.right) return this.right.getMaxVal();
    else return this.value;
}

/**This is the top of the binary search tree (50) **/
var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

/** Watch it work! **/

/** TEST INSERT METHOD **/
console.log(bst.right.left.left);
console.log(bst.left.right.left);
console.log(bst.right.right);
//Just a new line. :p
console.log("\n");

/** TEST CONTAINS METHOD **/
console.log(bst.contains(59)); //Returns true cause 59 exists in the bst.
console.log("\n");

/** TEST DEPTH FIRST TRAVERSAL METHOD **/
/** we call our BST function with 'bst' and our depthFirstTraversal method
 * while passing in the argument, which will be our function 'log'.
 * 'log' function will take in the argument 'value' which are the
 * bst.insert(value) defined right above. Now, since we are using
 * depthFirtTraversal, we should see each node consoled out in order
 * from least to greatest. **/
bst.depthFirstTraversal(log);

function log(value){
    console.log(value);
}
console.log("\n");

/** TEST DEPTH FIRST TRAVERSAL METHOD WITH IN-ORDER**/
bst.depthFirstTraversalInOrder(log, 'in-order');

function log(value){
    console.log(value);
}
console.log("\n");

/** TEST DEPTH FIRST TRAVERSAL METHOD WITH PRE-ORDER**/
bst.depthFirstTraversalPreOrder(log, 'pre-order');

function log(value){
    console.log(value);
}
console.log("\n");

/** TEST DEPTH FIRST TRAVERSAL METHOD WITH POST-ORDER**/
bst.depthFirstTraversalPostOrder(log, 'post-order');

function log(value){
    console.log(value);
}
console.log("\n");

/** TEST BREADTH FIRST TRAVERSAL METHOD **/
bst.breadthFirstTraversal(logBFT);
/** Change our function a bit to only give us the 'node.value' and not
 * the entire value.
 * Otherwise, 'value' would give us the node along with it's children.**/
function logBFT(node){
    console.log(node.value);
}
console.log("\n");

/** TEST GETMINVAL & GETMAXVAL METHOD **/
console.log('MIN: ', bst.getMinVal());
console.log('MAX: ', bst.getMaxVal());

console.log("\n");
