
// ....uses of (new) in class......
class person {
    constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
console.log(new person("abul","baker",15000));


// .....uses of (new) in function.......

const result = function (firstName,lastName,salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
console.log(new result("abul","khoyer",15000));