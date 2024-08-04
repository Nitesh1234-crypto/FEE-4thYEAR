const grandfather= document.querySelector(".grandfather");
const father = document.querySelector(".father")
const mother= document.querySelector(".mother")
grandfather.addEventListener("click",function(ev){
    console.log("grandfather");
})
father.addEventListener("click",function(ev){
    console.log("father");
    ev.stopPropagation();
    
    
})
mother.addEventListener("click",function(ev){
    console.log("mother");
})
const body = document.getElementsByTagName("body")[0];
body.addEventListener("click",function(){
    console.log("body pe click hua")
})