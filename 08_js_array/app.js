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


//array methods

//concat method
//this method is used to concat the two arrays

let a=[10,20,30,"hai"]
let b=[40,50]
a=a.concat(b)
console.log(a);
console.log(b.concat(a,b));
console.log(b.concat(100));

//indexOf/lastindexof
//used to know the index of the each element

let x=[100,200,300,100,400,500]
console.log(x.indexOf(100));
console.log(x.indexOf(500));
console.log(x.indexOf(100,2)); //2 is position it is optional default it is 0
console.log(x.lastIndexOf(100));
console.log(x.lastIndexOf(200));


//includes()

let y=[10,20,30,40,50,10]
console.log(y.includes(10));
console.log(y.includes(100));
console.log(y.includes(10,2));
console.log(y.includes(20,2));


//push()

b=[1,2,3,4,5]
c=b.push(10)
console.log(b);
console.log(c);

//unshift()

b=[1,2,3,4,5]
c=b.unshift(10)
console.log(b);
console.log(c);

//pop()

a=["h","e","l","l","o"]
console.log(a.pop());
console.log(a);

//shift()

a=["h","e","l","l","o"]
console.log(a.shift());
console.log(a);

//slice()
x=[10,20,30,40,50,60]
console.log(x.slice(1,5));
console.log(x.slice());
console.log(x.slice(1,));
console.log(x.slice(5));
console.log(x.slice(1,-1));
console.log(x.slice(-1,5));

//splice()
x=[1,2,3,4,5]
console.log(x.splice(1,2,10,100));
console.log(x);
console.log(x.splice(4,1,10,100,200));
console.log(x);

//join()

a=["h","e","l","l","o"]
console.log(a.join());
console.log(a.join(" "));
console.log(a.join(""));

//reverse()

a=[1,2,3,4,5,6]
console.log(a.reverse());
console.log(a);
console.log(a.reverse());
console.log(a);

//map()

y=["1",2,"hello",true]
z=y.map(function add(a)
{
    console.log(a);
    return a+10
})
console.log(z);

a=[1,2,3,4,"hai",6,7,8]
z=a.map(function(p,q)
{
    console.log(p);
    console.log(q);
    return p+q
})
console.log(z);

b=["a","b","c","d","e"]
f=b.map(function(p,q,r,s)
{
    console.log(p);
    console.log(q);
    console.log(r); 
    console.log(s);

}
)
console.log(b);


b=["a","b","c","d","e"]
f=b.map((p,q)=>
{
    console.log(p);
    console.log(q);

})

a=[10,20,30]
z=a.map((a)=>
{
    console.log(a);
    return 100
})
console.log(z);


a=[10,20,30]
z=a.map((a)=>
{
    console.log(a);
})
console.log(z);


//filter()

a=[10,12,13,14,15]
b=a.filter(x=>
    {
        console.log(x);
        return x>2
    })
console.log(b);

a=[10,12,13,14,15]
b=a.filter(x=>
    {
        console.log(x);
        return 10
    })
console.log(b);

a=[10,12,13,14,15]
b=a.filter(x=>
    {
        console.log(x);
        return 10
    })
console.log(b);

//foreach()

a=["hai",1,true,200]
b=a.forEach((p,q,r)=>
{
    console.log(p);
    console.log(q);
    console.log(r);
    return 100

})
console.log(b);



