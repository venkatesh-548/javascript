//syntax
// inetialization
// while(condition){
    //statements
    //incre/decre
  //}

let i=1
while(i<=5){
    console.log("hello")
    i+=1
}

i=1
let res=""
while(i<=20){
    res+=`${i} `
    i+=1
}
console.log(res)

//wap to find sum of the digits
let n=12345
i=1
let sum=0
while(i<=n){
    let digit=n%10
    sum+=digit
    n=n/10
}
console.log(sum)



//do-while
// inetialization
// do{
//     //statements
//     //incre/decre
// }
// while(con)
  
//to print 1 - 10
i=1
n=10
res=""
do{
    res+=`${i} `
    i++
}
while(i<=n)
console.log(res)

//to print 20-0 step 2
n=20
i=0
res=""
do{
    res+=`${i} `
    i-=2
}
while((n>=i))
console.log(res)
