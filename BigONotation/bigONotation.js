/** CONSTANT RUNTIME
 * Big O Notation: "O(1)"
 * **/

function log(array) {
    console.log(array[0]);
    console.log(array[1]);
    console.log("\n");
}

log([1, 2, 3, 4]);
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("\n");

/** LINEAR RUNTIME
 * Big O Notation: "O(n)"
 * **/

function logAll(array) {
    for(var ii = 0; ii < array.length; ii++) {
        console.log(array[ii]);
    }
}

logAll([1, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 5, 6]);
logAll([1, 2, 3, 4, 5, 6, 7]);
console.log("\n");

/** EXPONENTIAL RUNTIME
 * Big O Notation: "O(n^2)"
 * **/

function addAndLog(array) {
    for(var ii = 0; ii < array.length; ii++) {
        for(var jj = 0; jj < array.length; jj++) {
            console.log(array[ii] + array[jj]);
        }
    }
}

addAndLog(['A', 'B', 'C']);  // 9 pairs logged out
addAndLog(['A', 'B', 'C', 'D']);  // 16 pairs logged out
addAndLog(['A', 'B', 'C', 'D', 'E']);  // 25 pairs logged out

/** LOGARITHMIC RUNTIME
 * Big O Notation: "O(log n)"
 * **/

function binarySearch(array, key) {
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;

    while(low <= high) {
        mid = Math.floor((low + high) / 2);
        element = array[mid];

        if(element < key) {
            low = mid + 1;
        }else if(element > key) {
            high = mid - 1;
        }else{
            return mid;
        }
    }
    return -1;
}

console.log(binarySearch([2, 3, 5, 7, 12, 16, 36, 39, 42, 56, 71], 7));