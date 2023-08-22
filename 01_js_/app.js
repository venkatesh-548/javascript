console.log("welcome to javascript")


console.log("iam a log message");
console.info("Iam an Info message");
console.warn("iam a warning message");
console.error("Iam a error message")

let student={
    name:"venky",
    age:22,
    branch:"cse"

};
console.table(student)


let a=100;
let b=200;
let sum=a+b;
console.log("the sum of "+a+" , " +b+" is: " +sum)//ES5 
console.log(`the sum of ${a},${b} is :${sum}`) //ES6 version6