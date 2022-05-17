var name = window. prompt("Enter your name: "); 
let name1 = name.toUpperCase();

const cont=document.querySelector(".conten");
cont.innerText+=` ${name1}!`;



const button=document.querySelector(".btnGre");
const wrapper=document.querySelector(".popup-wrapper")
const xxx = document.querySelector(".popup-close")
button.addEventListener("click",()=>{
  wrapper.style.display="block";
});

xxx.addEventListener("click",()=>{
  wrapper.style.display="none";
});

wrapper.addEventListener("click",()=>{
  wrapper.style.display="none";
});
 
var email=document.forms["formm"]["email"];
var date=document.forms["formm"]["date"];
var time=document.forms["formm"]["time"];

const button2=document.querySelector(".btnYel");
const wrapper2=document.querySelector(".popup-wrapper2")
const xxx3 = document.querySelector(".popup-close2")

button2.addEventListener("click",()=>{
  wrapper2.style.display="block";
});

wrapper2.addEventListener("click",()=>{
  wrapper2.style.display="none";
});

wrapper2.addEventListener("click",()=>{
  wrapper2.style.display="none";
});





var resultt=document.querySelector(".ressult");
console.log(resultt.innerHTML);
console.log(resultt.innerText);


function sendContact(){
  var dateCho=date.value;
  var timeCho=time.value;
  resultt.innerText=`I am going to kill you ${name1} on ${dateCho} at ${timeCho} `;
  
}


