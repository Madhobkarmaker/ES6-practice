const nums =[3, 4, 5, 7, 8, 9];
const result = [];
for(let i = 0; i < nums.length; i++){
    const result1 = nums[i] * nums[i];
    result.push(result1);
}
console.log(result);


const nums =[3, 4, 5, 7, 8, 9];
const result = nums.map(x => x * x);
console.log(result);



