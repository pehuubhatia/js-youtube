//primitive
//7 types: number, string, symbol, boolean, null, undefined, BigInt

const score = 100.3
const isLoggedIn = false
const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2)
const bigNumber = 1367773344788443n//for bigint


//reference
//arrays, objects, functions

const heros = ["ironman", "batman", "shaktiman"]//array
let myObj = {
    name : "Pehu",
    age: 20,
}

const myFunc = function(){
    console.log("hello");
}