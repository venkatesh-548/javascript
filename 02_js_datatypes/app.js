/* data types
data type is a type of the data which we can assign to a variable

1 number -> it contains only numbers
2 srting -> only text data
3 boolean -> true,false
4 undefined -> 
5 null

*/
//string
let employeeName="venky";
console.log(`employeeName: ${employeeName}  type of employeename:${typeof(employeeName)}`);

//number
let employeeAge=25;
console.log(`employeeAge: ${employeeAge}  type: ${typeof employeeAge}`);

//boolean
let a=10;
b=20.56;
console.log(typeof a==typeof b);
console.log(typeof a!=typeof b );

//undefined it is a default value in js

let abc; //variable declaration
console.log(`test:${abc} type:${typeof abc}`)
abc="venky"; //variable inetialization

//null dummy value
let test=null;
console.log(`test:${test} type:${typeof test}`)


let arr=[1,5,2,8,9,5,6]

let min=Math.min(...arr);
let max=Math.max(...arr)
console.log(min);
console.log(max);

let num=[1,2,3]
let sum=(a,b,c)=>a+b+c;
console.log(sum(...num));

let x=7
let y='7'
console.log(x==y);
console.log(x===y);

let array=[10, 5, 8, 12, 7, 2];
let s=array.sort()
console.log(s);
let lar=arr[0];
let slar=arr[1];

for(let i=0;i<array.length;i++)
{
    if(array[i]>lar)
    {
        lar=array[i];
    }
    else if(array[i]>slar && array[i]!==lar)
    {
        slar=array[i];
    }
}
console.log(lar);
console.log(slar);


let st='malayalam'

let res=''
for(let i=0;i<st.length;i++)
{
 res=st[i]+res;
}
if(res===st)
{
    console.log(res)
}
else{
    console.log("not a palin");
}




