//API ---->path---->https://jsonplaceholder.typicode.com/users
//fetch

fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
   return data.json();
})
.then((data)=>{
  console.log(data);
})
.catch(err=>{
    console.log(err);
})