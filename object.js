const students = [
    {name : "madhob", age : 41, phone : "01751108133"},
    {name : "manik",  age : 30, phone : "01750108133"},
    {name : "modon",  age : 25, phone : "01752108133"},
    {name : "motin",  age : 35, phone : "01753108133"},

]

const result1 = students.map(s => s.name);
const result2 = students.filter(s => s.age < 35);
const result3 = students.find(s => s.age < 35);

console.log(result1);
console.log(result2);
console.log(result3);