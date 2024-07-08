function getData(){
    console.log("getting data from server")
}
let search = document.getElementById("search");
function closure(){
let id;
return function debounce(){
    if(id!="undefined"){
        clearTimeout(id);
    }
    id=setTimeout(getData,1000)
}
}
let result=closure()


search.addEventListener("input",result)