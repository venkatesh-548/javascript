//for loop

//ex-0-10-diff=1
//Syntax: for(inetialization;condition;incre/decre){
    //statements
//}
let res=" "
for(i=1;i<=10;i++){
    if(i<=9){
        res+=` ${i} ,`
    }
    else{
        res+=` ${i} `
    }
    
}
console.log(res)

//to print values from 20-0 diff 2

let resu=" "
for(i=20;i>=0;i-=2){
    if(i>0){
        resu+=`${i}, `
    }
    else{
        resu+=`${i}`
    }      
}
console.log(resu)

//to find the factorial of the num
let n=4
let fa=1
for(i=1;i<=n;i++){
    fa=fa*i   
}
console.log(`the factorial of ${n} is :`,fa)

//nested for loop
//pattern program
n=5
let result=""
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        result+=` * `
    }
    result+=`\n`
}
console.log(result)

//pattern program
n=5
result=""
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        result+=` ${j} `
    }
    result+=`\n`
}
console.log(result)

//pattern program
n=5
result=""
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        result+=` ${i} `
    }
    result+=`\n`
}
console.log(result)


//pattern
n=5
result=""
for(i=n;i>=1;i--){
    for(j=1;j<=i;j++){
        result+=` ${j} `
    }
    result+="\n"
}
console.log(result)

//pattern
n=10
res=""
for(i=n;i>=1;i--){
    for(j=1;j<=i;j++){
        res+=` ${i} `
    }
    res+='\n'
}
console.log(res)

//for in loop
colors=['red','blue','green','yellow','orange']
for(let color in colors){
    console.log(colors[color])
}


var f=[10,20,30,40]
for(let i in f)
{
    console.log(i);
}
var g=[10,20,30,40]
for (let j of g)
{
    console.log(j);
}

