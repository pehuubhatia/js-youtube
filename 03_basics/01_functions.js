function calculateCartPrice(...num1){
return num1;
}
//console.log(calculateCartPrice(200,300,400,5000,2000));

const user = {
    username: "pehu",
    price: 199
}
function handelObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handelObject(user)
handelObject({
    username: "bhatia",
    price: 399
})
