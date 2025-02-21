const myNums = [1,2,3,4,5,6,7]
const newNum = myNums.map((num)=>num + 10)
console.log(newNum);

//chaining

const newNums = myNums.map((num)=> num+10).map((num) => num+11).filter((num) => num>24)
console.log(newNums);

//*****REDUCE********/

const myTotal = myNums.reduce((acc,currval)=> acc + currval, 0)
console.log(myTotal);




