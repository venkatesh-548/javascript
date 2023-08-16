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
        today="smonday"
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