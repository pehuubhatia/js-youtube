//singleton
//object.create

//object literals
const mysym = Symbol("key1");
const JsUser = {
    name: "pehu",
    age: 20,
    location: "chandigarh",
    email: "pehu@google.com",
    [mysym]: "mykey1",
    "full name" : "Pehu Bhatia"
} 
// console.log(JsUser["name"]);
// console.log(JsUser[mysym]);
// Object.freeze(JsUser)
// JsUser.name = "bhatia"
// console.log(JsUser);
JsUser.greeting = function(){
    console.log("hello user");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello user ,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




