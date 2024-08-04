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




const postContainer= document.querySelector(".post-container");
postContainer.addEventListener("click",function(ev){
    console.log(ev.target);
    // console.log(ev.target.classList.contains("like"));
    //like--->likecount++;
    if(ev.target.classList.contains("like")){
        console.log("likecount++")
    }
    if(ev.target.classList.contains("comment")){
        console.log("comment++")
    }
    if(ev.target.classList.contains("share")){
        console.log("share++")
    }
})

/*
1.title input box se uthau aur form ke submit hone pe post container mai add kro new post ko
*/

const form= document.querySelector("#post-add-form");
const input= document.querySelector("#post-title")

form.addEventListener("submit",function(ev){
    ev.preventDefault();
    addpost();
})
function addpost(){
  const value= input.value;
  let div= document.createElement("div");
  div.innerHTML=` <div class="profile">
                <span class="profile-image">profile-image</span>
                <span class="profile-name">profile name</span>
            </div>
            <div class="title">
               ${value}
            </div>
            <div class="post-image">
                <img src="" alt="post-image">
            </div>
            <div class="buttons">
                <button class="like">like</button>
                <button class="comment">comment</button>
                <button class="share">share</button>
            </div>`
    postContainer.appendChild(div);
        
}