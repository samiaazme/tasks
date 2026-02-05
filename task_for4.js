/***

Generate a multiplication table for number 9

 */
const num = 9;
console.log('---Multiplication Table for Number 9---');
for (let i = 1; i<=10; i++)
{
    let result = num * i;
    console.log(num ,'*', i, '=',result);
}