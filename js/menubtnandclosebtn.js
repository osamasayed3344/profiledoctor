const btnmenu =document.getElementById("menubtn");

btnmenu.onclick=function(){
    document.querySelector("nav").style.display="block";
}

const btnclose=document.getElementById("closebtn");

btnclose.onclick=function(){
    document.querySelector("nav").style.display="none";
}