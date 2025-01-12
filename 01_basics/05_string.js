const name = "pehu"
const repoCount = 50
console.log(name + repoCount + "value");//not recommended
console.log(`helllo my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('pehu-bhatia-com')
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,2)//initial 2 characters
console.log(newString);

const anotherString = gameName.slice(-10, 4)
console.log(anotherString);

const stringTwo = "    pehu.   "
console.log(stringTwo);
console.log(stringTwo.trim());

const url = "pehu@20bhatia"
console.log(url.replace('@20', '-'))
console.log(url);

console.log(url.includes('pehu'))
console.log(gameName.split('-'));








