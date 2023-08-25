//java script array
//--> an array is an indexed  collection of elements(objects/strigs/array/boolean/number)
//array index starts from 0
let num=[10,20,30,40,'10','hai']
console.log(num)
console.log(typeof num)

//to access the elements of an array by index value
console.log(num[5])//hai
//access non existing values
console.log(num[6])//undefined

//iteration of the elements

let colors=["white","black","red","green","blue","yellow"]
for(let i=0;i<=colors.length-1;i++)
{
    console.log(colors[i])
}

colors=["white","black","red","green","blue","yellow"]
let res=""
for(let i=0;i<=colors.length-1;i++)
{
    res+=`${colors[i]} - `
}
console.log(res)

//for in loop form ES5 version onwards
colors=["white","black","red","green","blue","yellow"]
result=""
for(let index in colors){
    result+=`${colors[index]} `
}
console.log(result)

//for of from ES6 version onwards
res=""
colors=["white","black","red","green","blue","yellow"]
for(let color of colors){
    res+=`${color} `
}
console.log(res)

//accessing no of objects from array
let employees=[
    {
        id:1,
        name:"venky",
        age: 45,
        designation:"manager"
    },
    {
        id:2,
        name:"jfvnj",
        age: 37,
        designation:"tl"
    },
    {
        id:3,
        name:"cclk",
        age: 29,
        designation:"dev"
    },
    {
        id:4,
        name:"lkcn",
        age: 25,
        designation:"te"
    },
    {
        id:5,
        name:"klm",
        age: 25,
        designation:"B A"
    }

]
    //accessing the all elements
console.log(employees)

// accessing single person 
console.log(employees[3])
// accessing single person data
console.log(employees[0].name)


//iterating employees
res=""
wap=""
for(employee of employees){
    res+=`${employee.name} `
    wap+=`${employee.age} `

}
console.log(res)
console.log(wap)

//filtering of the data
res=[]
for(let employee of employees){
    if(employee.age<30){
        res.push(employee)
    }
}
console.log(res)


