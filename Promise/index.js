// function Sum(a,b){
//   return  new Promise(function(resolve,reject){
//            // code to do something
//            let flag=false;
//            if(flag){
//            return reject("pitaji nhi manne!!")
//           }
//            let result=a+b
//            resolve(result);     
//     })
// }

// console.log(Sum(5,4));
// Sum(5,4).then(function(data){
//     console.log(data);
// },function(err){
//     console.log(err);
// })

function Sum(a,b){
    return  new Promise((resolve,reject)=>{
             // code to do something
             let flag=false;
             if(flag){
             return reject("pitaji nhi manne!!")
            }
                let result=a+b
                resolve(result);       
      })
  }

setTimeout(()=>{
    console.log("hello");
})
 
Sum(5,6).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})

console.log("hi");
console.log("bye")