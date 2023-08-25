//java script functions
//-----------------------------

//-->it is a block of statements which taken in a set parameters and does some process and returns the result
//-->functins can be used for the reusability of the code
// to print 0-10 diff 1
//if we want print like this then we write program without function is 
let n=10
let i=1
res=""
while(i<=n){
    res+=`${i} `
    i+=1   
}
console.log(res)
n=10
i=1
res=""
while(i<=n){
    res+=`${i} `
    i+=1   
}
console.log(res)
n=10
i=1
res=""
while(i<=n){
    res+=`${i} `
    i+=1   
}
console.log(res)

//functions can be used for the reusability of the code and it reduce the lines of code
//with functions if you want how many times then that much of times you calll a function
//here lines of code is reduced
function printNumbers(i,n){
// n=15
// i=1
res=""
while(i<=n){
    res+=`${i} `
    i+=1   
}
console.log(res)
}
printNumbers(1,20)//function call
printNumbers(21,40)

function number(m,n,inc){
    res=""
    for(let i=m;i<=n;i+=inc){
        res+=`${i} `
    }
    console.log(res)
}
number(20,30,2)

//we can declare the function in 2 types
//normal function with out parameters

function greet(){
    console.log("hello Js")
}
greet()

//function Exploration
let greetMe=function(){
    console.log("hello ")
}
greetMe()


//function with parameters
message=''
let wishMe=function(name,age){
    message+=`you are ${name} and age ${age}`
    console.log(message)
}
wishMe('venky',22)

//function with the return type here it delare and return the result

let sum=function(a,b){
    result=2*(a+b)
    return result
}
let output=sum(10,20)
console.log(output)

//check the number is prime or not

n=7
i=1
msg=""
let count=0
while(i<=n){
    if(n%i===0){
        count+=1
    }
    i+=1
}
if(count==2){
    msg=`${n} is prime`
}
else{
    msg=`${n} is not prime`

}
console.log(msg)

//fabinocci series 
n=5
let n1=0
let n2=1
msg="0 1"
i=1
while(i<=n){
    let n3=n1+n2
    n1=n2
    n2=n3
    msg+=`  ${n3} `
    i+=1
}
console.log(msg)

//sum of digits in js
n=467
i=1
let ld
sum=0
while(i<=n){
    ld=(n%10)
    sum+=ld
    n=Math.floor(n/10)
}
console.log(sum)


//strong number

n=145
t=n
s=0
ld
msg=""
while(n>0){
    ld=n%10
    i=1
    let fact=1
    while(i<=ld){
        fact=fact*i
        i+=1
    }
    s+=fact
    n=Math.floor(n/10)
}
console.log(s)
if(t==s){
msg=`${t} is a strong number`
}
else{
msg=`${t} is not a strong number`
}
console.log(msg)

//check friendly pair or not

n1=6
s=0
i=1
msg=""
while(i<=n1){
    if(n1%i==0){
        s+=i
    }
    n2=28
    d=0
    j=1
    while(j<=n2){
        if(n2%j==0){
            d+=j
        }
        j+=1
    }i+=1
}
if(s/n1==d/n2){
    msg=`${n1},${n2} are friendly pair`
}
else{
    msg=`${n1},${n2} are not a friendly pair`
}
console.log(msg)


//function with object as parameter
let objectName=function(obj){
    console.log(obj)
}
objectName({"name":'venky',"age":23})
//we also call it as
let object={
    "brand":'apple',
    color:'silver',
    price:35000
}
objectName(object)

//function with an array parameter

let funcArray=function(array){
res=""
for(let index in array){
    res+=`'INDEX' : ${index} ==> value: ${array[index]}\n`
}
console.log(res)
}
funcArray([10,20,30,40])

a=[10,20,'hai','bye',{a:100,b:200}]
funcArray(a)

//function inside an object
let student={
    firstname:'Arjun',
    lastname:'Reddy',
    fullname: function(){
        return 'Arjun Reddy'
    }
}
console.log(student.firstname)
console.log(student.lastname)
console.log(student.fullname)
//so we call function as
console.log(student.fullname())


//nested function a function is calling inside another function

let outerfun=function(){
    console.log('Iam an outer Function')
    let innerfun=function(){
        console.log("Iam an inner function")
    }
innerfun()
}
outerfun()

//twisted function  

let twistedFun=function(){
    let name='john'
    let printStudent=function(){
        student={
            name:'venky',
            age:23,
            course:'cse'
        }
        return student
    }
    return printStudent
}
outerFun=twistedFun()
innerFun= outerFun()
console.log(innerFun.student)


