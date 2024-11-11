function clock(){
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let div1= document.querySelector("#hours").innerHTML=hours
let div2=document.querySelector("#minutes").innerHTML=check(minutes);
let div3=document.querySelector("#second").innerHTML=check(seconds);
setTimeout(clock,1000)
}
function check(i){
    if(i<10){
        i= "0"+i;
    };
    return i;
}