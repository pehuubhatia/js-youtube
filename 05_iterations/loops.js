//higher order loops
//for of
// const arr = [1,2,3,4]
// for(const num of arr){
//     //console.log(num);
// }

// const map = new Map()
//     map.set('IN',"india")
//     map.set('Fr',"France")

//     for(const [key,value] of map){
//         //console.log(key,value);
        
//     }
//     //object cannot be iterated like this

//     //for in
//     const name = ["pehu", "bhatia","sakshi","anahit"]
//     for(key in name){
//         console.log(key);
//         console.log(name[key])
        
//     }

//     //for each loop

//     const coding = ["js", "ruby", "java", "pythin", "cpp"]
//     coding.forEach(function (item){
//         console.log(item);
        
//     })

    //another way
// coding.forEach( (item) => {
//     console.log(item);
    
// })

//another way

// function printMe(){
//     console.log(item);
    
// }
// coding.forEach(printMe)

//filter
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=> num>5)
console.log(newNums);
//another way
const Nums = myNums.filter((num)=> {
     return num > 5 //use return
})
console.log(newNums);
