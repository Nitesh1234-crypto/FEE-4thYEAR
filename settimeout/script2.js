console.log("10")

let a1=setTimeout(function(){
    console.log("50")
},5000)
let a2=setTimeout(function(){
    console.log("60")
},3000)

let a3 =setTimeout(function(){
    console.log("70")
},2000)

clearTimeout(a1);

console.log("20")

console.log(a1,a2,a3)