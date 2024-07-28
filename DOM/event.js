// //click event

// // const btn= document.querySelector(".btn");
// // console.log(btn)
// // btn.addEventListener("click",function(){
// //     changefirsttask()
// // })


// // function changefirsttask(){
// //     const ul=document.getElementsByTagName("ul")[0];
// //     let firstchild= ul.firstElementChild;
// //     console.log(firstchild)
// //     // firstchild.style.background="red"
// //     firstchild.classList.toggle("bg")

// // }


// const grandfather= document.querySelector(".grandfather");
// const father = document.querySelector(".father")
// const mother= document.querySelector(".mother")
// grandfather.addEventListener("click",function(ev){
//     console.log(ev.target);
// })
// father.addEventListener("click",function(ev){
//     console.log(ev.target);
//     ev.stopPropagation()
// })
// mother.addEventListener("click",function(ev){
//     console.log(ev.target);
// })
// const body = document.getElementsByTagName("body")[0];
// body.addEventListener("click",function(){
//     console.log("body pe click hua")
// })

const postContainer= document.querySelector(".post-container");
postContainer.addEventListener("click",function(ev){
    console.log(ev.target.classList.contains("like"));
    //like--->likecount++;
    if(ev.target.classList.contains("like")){
        console.log("likecount++")
    }
})