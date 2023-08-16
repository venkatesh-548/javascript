/*
js operators

1 assignment operators : =
2 arithematic operators : + - / * %
3 short hand math operators : += -= /= *=
4 conditional operators : < > <= >= !=
5 unary operator: ++ -- 
6 logical operator : && || ^
7 ternary operator : ?:
8 equality operator == ===

 */
//assignment operators

let test=10
console.log(test)

//arithematic operators
let a=60;
b=20
console.log(`the sum is:${a+b}`)
console.log(`the sub is:${a-b}`)
console.log(`the mul is:${a*b}`)
console.log(`the div is:${a/b}`)

let num=12;
if(num%2 == 0) {
    console.log(`${num} is even`)
}
else{
    console.log(`${num} is odd`)
}


let num1=13;
if(num1%2 == 0) {
    console.log(`${num1} is even`)
}
else{
    console.log(`${num1} is odd`)
}


//short hand math operators

let x=10;
let y=20;
let add=0
// add=add+x+y
add+=x+y
console.log(add)

//conditional operators

let marks=25
if(marks>=35){
    console.log(`passed`)
}
else{
    console.log(`failed`)
}

//unary operator

let p=10;
p=p+1;//11
p+=1 //11+1 12
p++ //12+1 13
p-- //13-1 12
console.log(`p is:${p}`)


// logical operators

//&& and  || or ^ xor

let q=24
if(q>0 && q%2==0){
    console.log(`${q} is even number`)
}
else{
    console.log(`${q} is odd number`)
}

let inRelation=false
let parentsAgreed=false
if(inRelation || parentsAgreed){
    console.log("they get married soon")
}
else{
    console.log("wait untill the parents agreed")
}

//ternary operator
//syntax:  (condition) ? true : false;

marks=40;
message='';
(marks>=35) ?  message='you clera the exam' : message='you failed the exam'
console.log(message)

//equality operator: == it can perform conversion and equality operation,
// === it performs only equality


let s=10;
let t='10';
if(s==t){
    console.log("both are equal")
}
else{
    console.log("both are not equal")
}

s=10;
t='10';
if(s===t){
    console.log("both are equal")
}
else{
    console.log("both are not equal")
}




