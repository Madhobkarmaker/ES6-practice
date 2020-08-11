let start = new Date();
console.log(start);
let sum = 0;
for(let i = 0; i < 100000000; i++){
    sum = sum + 3;
}
let end = new Date();
console.log(end, end-start, sum);