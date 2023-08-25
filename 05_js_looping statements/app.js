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
    res+=`${n} `
    n-=2
}
while((n>0))
console.log(res)


//wap to print factorial of num
n=5
i=1
let fact=1
while(i>=n){
    if(n%i==0){
        fact=fact*i
    }
    i--
}
console.log(`the factorial of 5 is ${fact}`)
console.log(fact)


//to print the characters in string
str="this is javascript"
i=0
res=''
while(i<=str.length-1){
    res+=`${str[i]} `
    i+=1
}
console.log(res)

//to print no of a's in string

st="java script is scripting language"
i=0
count=0
while(i<=st.length-1){
    if(st[i]=='a'){
        count+=1
    }
    i+=1
}
console.log(`the count of a is : ${count}`)
