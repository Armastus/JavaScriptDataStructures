/** Hash Tables:
 * A hash table will consist of at least 3 types of functions:
 * insert function
 * get function
 * hash function
 * **/

/** We need 2 constructor functions:
 * 1. The table itself.
 * 2. For the nodes we will be putting into our hash table.**/

/** Constructor to setup the Hash Table. **/
function HashTable(size) {
    /** this.buckets defines where the data of our hash table gets stored.
     * We are saying; Make a new Array() of whatever (size) we want
     * and assign it to our buckets 'this.buckets' **/
    this.buckets = Array(size);
    /** this.numBuckets will keep track of how many buckets we have
     * in our hash table.
     */
    this.numBuckets = this.buckets.length;
}

/** COOL! Test to see our HashTable be created with (size) of buckets **/
var myHT = new HashTable(30);
console.log(myHT);
console.log('\n');

/** Constructor function for each piece of data, or Hash Node. **/
function HashNode(key, value, next) {
    //Key parameter
    this.key = key;
    //Value parameter
    this.value = value;
    //Next parameter or if no next parameter 'NODE' it is set to null.
    this.next = next || null;
}

/** HASH METHOD **/
/** This will take our key property and hash it into one of our
 * nodes in our hash table. **/
HashTable.prototype.hash = function(key) {
    /** We need to turn our key property into a number. So
     * we use our charCodeAt method on each character of our key
     * property and add it to our total.**/
    var total = 0;
    for(var ii = 0; ii < key.length; ii++) {
        total += key.charCodeAt(ii);
    }

    /** This is really cool! We then take our total and modulus
     * it to our this.numBuckets, or the size of our buckets.
     * So, if we divide any number by our buckets length, the remainder
     * will never go past the total available buckets. **/
    var bucket = total % this.numBuckets;
    return bucket;
};

/** TEST HASH METHOD **/
/** If we pass in 30 (buckets) then we take our value ('Becca')
 * and convert it to a number with .charCodeAt which is then divided
 * by our total number of buckets, we get a remainder of 12. So,
 * 'Becca' would get stored into bucket number 12 of 30.**/
var myHT = new HashTable(30);
console.log(myHT.hash('Becca'));
console.log('\n');

/** INSERT METHOD **/
/** This will take a 'key' and 'value' pair and turn them into a
 * hash node and place that node into a correct bucket into our
 * hash table. **/
HashTable.prototype.insert = function(key, value) {
    /** Let's place where our hash node, this.hash(key) will be
     * placed in our buckets. **/
    var index = this.hash(key);
    console.log('INDEX: ', index);
    /** To place our hash node into our buckets we need to check if
     * the buckets is empty or if it is not empty.
     * So, if there is nothing in our 'this.buckets' at our given
     * [index], then we will make a node and put it in our empty bucket.
     */
    if(!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
    /** Otherwise, we will place our node into the end of our chain of nodes
     * in that bucket(LinkedList). So using a while loop, we take
     * our currentNode and while there is a currentNode.next, meaning
     * until we get to a null currentNode.next we make
     * the that currentNode equal to the currentNode.next. **/
    else {
        var currentNode = this.buckets[index];
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        /** Then we make currentNode.next = our new HashNode(key, value). **/
        currentNode.next = new HashNode(key, value);
    }
};

/** TEST INSERT METHOD **/
var myHT = new HashTable(30);

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');

console.log(myHT.buckets);
console.log("\n");

/** INSERT METHOD AND UPDATE NODES**/
/** This will take a 'key' and 'value' pair and turn them into a
 * hash node and place that node into a correct bucket into our
 * hash table. **/
HashTable.prototype.insert = function(key, value) {
    /** Let's place where our hash node, this.hash(key) will be
     * placed in our buckets. **/
    var index = this.hash(key);
    console.log('INDEX: ', index);
    /** To place our hash node into our buckets we need to check if
     * the buckets is empty or if it is not empty.
     * So, if there is nothing in our 'this.buckets' at our given
     * [index], then we will make a node and put it in our empty bucket.
     */
    if(!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
    /** UPDATE SECTION:
     * This else if statement checks if this.buckets[index] is equal to key
     * and if it is, we equal this.buckets[index] to the value passed in, in
     * order to update the first node in the bucket. **/
    else if(this.buckets[index].key === key) {
        this.buckets[index].value = value;
    }
    /** Otherwise, we will place our node into the end of our chain of nodes
     * in that bucket(LinkedList). So using a while loop, we take
     * our currentNode and while there is a currentNode.next, meaning
     * until we get to a null currentNode.next we make
     * the that currentNode equal to the currentNode.next. **/
    else {
        var currentNode = this.buckets[index];
        /** NOTE: Our while statement only checks the currentNode.next
         * and not the actual currentNode.**/
        while(currentNode.next) {
            /** UPDATE SECTION:
             * What we do is if the currentNode.next.key is equal to
             * the key passed in, then we want to make the
             * currentNode.next.value = value. **/
            if(currentNode.next.key === key) {
                currentNode.next.value = value;
                /** We 'return' to stop this method, otherwise we update
                 * our node and then create another node at the end of
                 * the linkedList**/
                return;
            }
            currentNode = currentNode.next;
        }
        /** Then we make currentNode.next = our new HashNode(key, value). **/
        currentNode.next = new HashNode(key, value);
    }
};

/** TEST INSERT AND UPDATE METHOD **/
var myHT = new HashTable(30);

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');
//Update emails.
myHT.insert('Dean', 'deanmachine@gmail.com');
myHT.insert('Megan', 'megansmith@gmail.com');
myHT.insert('Dane', 'dane1010@outlook.com');

console.log(myHT.buckets);
console.log("\n");

/** GET METHOD **/
HashTable.prototype.get = function(key) {
    var index = this.hash(key);
    /** If the current bucket at the index is empty
     * return null. **/
    if(!this.buckets[index]) return null;
    /**  **/
    else {
        /** Make a variable, currentNode, equal to the first node in our bucket.
         * **/
        var currentNode = this.buckets[index];
        /** While we are at the currentNode **/
        while(currentNode) {
            /** If the currentNode.key equals the key we passed in, then
             * we return the currentNode.value. **/
            if(currentNode.key === key) return currentNode.value;
            /** Move to the next node and keep looping through until
             * we reach null at currentNode.next. **/
            currentNode = currentNode.next;
        }
        /** If we go through our whole array and find no matching keys then
         * we simply return null. **/
        return null;
    }
};

var myHT = new HashTable(30);
myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');
myHT.insert('Dean', 'deanmachine@gmail.com');
myHT.insert('Megan', 'megansmith@gmail.com');
myHT.insert('Dane', 'dane1010@outlook.com');

/** Log out our peoples emails. **/
console.log(myHT.get('Dean'));
console.log(myHT.get('Megan'));
console.log(myHT.get('Dane'));
console.log("\n");

/** RETRIEVE ALL METHOD **/
HashTable.prototype.retrieveAll = function() {
    var allNodes = [];
    /** Loop through all our buckets. **/
    for(var ii = 0; ii < this.numBuckets; ii++) {
        var currentNode = this.buckets[ii];
        /** While there is a currentNode **/
        while(currentNode) {
            /** Push our currentNode into our allNodes array. **/
            allNodes.push(currentNode);
            /** Move to the next node and keep looping through until
             * we reach null at currentNode.next. **/
            currentNode = currentNode.next;
        }
    }
    return allNodes;
};

/** TEST RETRIEVE ALL METHOD **/
var myHT = new HashTable(30);

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');
myHT.insert('Dean', 'deanmachine@gmail.com');
myHT.insert('Megan', 'megansmith@gmail.com');
myHT.insert('Dane', 'dane1010@outlook.com');
myHT.insert('Joe', 'joey@facebook.com');
myHT.insert('Samantha', 'sammy@twitter.com');

console.log(myHT.retrieveAll());
