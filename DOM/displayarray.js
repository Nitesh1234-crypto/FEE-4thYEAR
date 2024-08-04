//[{id:"1",title:"fsdf",desc:"fdf"},{},{},{}]
//todo input lena hai ,array mai add krna hai then dom pe show krna hai
let todos =[{"title":"game","description":"school se anne ke bd 2 ghnte game khelunga"}];
let todoContainer=document.querySelector(".todo-container");
function showtodo(todo){ //function to display single todo
   let title= todo.title;
   let desc= todo.description;
   let div = document.createElement("div");
   div.innerHTML=` <h1>${title}</h1>
            <p>${desc}</p>`
    todoContainer.appendChild(div);
}
function displayAllTodo(arr){ //function to display all todos
    todoContainer.innerHTML="";
    arr.forEach(ele => {
        showtodo(ele)
    });
}
displayAllTodo(todos);

let form= document.querySelector("#add-todo-form")
console.log(form);
form.addEventListener("submit",function(e){ //take user input and add into array of todos
    e.preventDefault();
    let title= document.querySelector(".title");
    let desc= document.querySelector(".desc");
    let newTodo= {title:title.value,description:desc.value}
    todos.push(newTodo);
    displayAllTodo(todos);
})


