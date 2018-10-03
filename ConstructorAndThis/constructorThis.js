function User(firstName, lastName, age, gender) {
    /** 'this' refers to the object that will be created by the constructor function**/
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
};

var user1 = new User('John', 'Smith', 26, 'male');
var user200 = new User('Jill', 'Robbinson', 25, 'female');

console.log(user1);
console.log(user200);