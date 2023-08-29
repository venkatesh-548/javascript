//if-else statements

let time=-23;
message=''
if(time>=0 && time<=12){
    message="good morning"
}
else if(time>12 && time<=15){
    message="good afternoon"
}
else if(time>15 && time<=19){
    message='good evening'
}
else if(time>19 && time<=23){
    message="good night"
}
else{
    message="enter valid time"
}
console.log(message)

//switch statement

let day=new Date().getDay();
let today=''
day=5
switch(day){
    case 0:
        today="sunday"
        break;
    case 1:
        today="monday"
        break;
    case 2:
        today="tuesday"
        break;
    case 3:
        today="wednesday"
        break;
    case 4:
        today="thursday"
        break;
    case 5:
        today="friday"
        break;
    case 6:
        today="saturday"
        break;
    default:
        today="enter valid day"
}
console.log(`today is:${today}`)

//check what color we are enterd 
let col=prompt("enter a color")
let color=col.toLocaleLowerCase()
if(color==='red'){
    console.log(`yes the user enter color is: ${color} `)
}
else if(color==="green"){
    console.log(`yes the user enter color is: ${color} `)
}
else if(color==="blue"){
    console.log(`yes the user enter color is: ${color} `)
}
else{
    console.log(`enter a valid color`)
}

//wap to check the number is positive or not if positive check even or not  
let num=prompt("enter a number")
if(num>0){
    if(num%2==0){
        console.log("the number is even")
    }
    else{
        console.log("the number is odd")
    }
}
else{
    console.log("the number is negative")
    
}

col=prompt("enter color:")
color=col.toLocaleLowerCase()
switch(color){
    case "red":
    console.log(`yes the user enter color is: ${color} `)
    break
    case "blue":
    console.log(`yes the user enter color is: ${color} `)
    break
    case "green":
    console.log(`yes the user enter color is: ${color} `)
    break
    default:
    console.log(`enter a valid color`)
}


for(i=10;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
}

