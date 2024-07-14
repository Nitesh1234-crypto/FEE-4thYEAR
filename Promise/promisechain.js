function milna(permision){
    return new Promise((resolve,reject)=>{
        if(!permision){
           return reject("ghr walo ko pata chl gya")
        }
        resolve("znmd");
    })   
}

function movie(movie){
   return new Promise((resolve,reject)=>{
      if(movie!="znmd"){
        reject("akele chla jaa")
      }
      resolve("ok")
   })
}
milna(false).then((data)=>{
    console.log(data);
  return movie(data)
}).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

