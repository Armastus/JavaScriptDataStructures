// funciton func() {
//     if (/*base case*/){
//         return something;
//     }else{ //recursive case. Calls itself.
//         func();
//     }
// }


/**CALL STACK
 * num = 1
 *      return 1    factorial(1)
 * num = 2
 *      return 2 * factorial(1)     factorial(2)
 * num = 3
 *      return 3 * factorial(2)     factorial(3)
 * num = 4
 *      return 4 * factorial(3)     factorial(4)
 ***/
function recursion(num) {
    if(num === 1) {
        return num;
    }else{
        return num * recursion(num - 1);
    }
}

console.log(recursion(10));