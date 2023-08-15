/*
js operators

1 assignment operators : =
2 arithematic operators : + - / * %
3 short hand math operators : += -= /= *=
4 conditional operators : < > <= >= !=
5 unary operator: ++ -- 
6 logical operator : && || ^
7 ternary operator : questionmark:
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



