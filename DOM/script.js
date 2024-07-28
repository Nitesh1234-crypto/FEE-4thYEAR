// let header= document.getElementById("header");
// let para=document.getElementsByClassName("para")[0];
// let h= document.querySelector("#header");
let p= document.querySelector(".para");
// let ps=document.querySelectorAll(".para")[1];
let body = document.getElementsByTagName("body")[0];
// let parent= document.getElementById("parent");
let btn= document.querySelector(".btn")
let ul=document.getElementsByTagName("ul")[0];
// console.log(body);


//html properties
/*
1. innerhtml
2.innerText
3.textContent
*/
// let inner= body.innerHTML
// console.log(inner);
// // body.innerHTML="<h1>set using dom</h1>"
// console.log(h.innerText)
// h.innerText="header form js"
// console.log(p.textContent)
// p.textContent="paragraph from js"

// console.log(ps.innerText)
// console.log(ps.textContent);

// // console.log(parent.innerText);
// // console.log(parent.textContent);

// //getattributes

// console.log(p.getAttribute("class"))

// //setAttribute

// p.setAttribute("id","pdhsahff")
// console.log(p);


// /*classList
// */
// para.classList.add("para5")

// function display(){
//    header.classList.toggle("hide") 
// }
btn.addEventListener("click",function(){
    clearInterval(id)
})

let arr=["red","orange","pink","grey","green","blue","brown","black","yellow","purpules"]
function changebackgroud(){
    value=Math.floor(Math.random()*10);
    console.log(value);
    color= arr[value];
    console.log(color);
    body.style.background=color
}

// let id=setInterval(changebackgroud)

/*parent
child
siblings
*/
console.dir(p)
p.remove()

//remove();

//append
//appendChild

//adding element to html
/*
1. create a new element using createElement
2. insert content using either innerhtml or inntext
3. append the newly created element into the container using appendchild or append
*/

function addtodo(){
    let li = document.createElement("li");
    li.innerHTML=` <h1 id="3" class="title">todo1</h1>
            <div>
                <button></button>
                <button></button>
                <button>delete</button>
            </div>`
    ul.appendChild(li);
    
}
addtodo()
