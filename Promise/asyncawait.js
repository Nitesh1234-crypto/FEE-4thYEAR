function download(URL){ //URL---> http://www.movies.com/kalki.mp4
    return new Promise((resolve,reject)=>{
        let a=URL.split(":")[0]
        if(a!="http"){
            return reject("Invalid url")
        }
        setTimeout(()=>{
            let dfile=URL.split("/").pop();
            resolve(dfile)
        },3000)      
    })
  
}

function compress(file){
    //kalki.mp4---->kalki.zip
    return new Promise((resolve,reject)=>{
        if(!file){
           return reject("file doesnot exit")
        }
        setTimeout(()=>{
            let movie=file.split(".")[0];
            let compfile= movie+".zip";

            resolve(compfile);
        },1000)

    })

}

function upload(cfile){
    return new Promise((resolve,reject)=>{
        if(!cfile){
            return reject("No file to upload")
        }
        setTimeout(()=>{
            let newURL="http://www.chitkara.com/" +cfile
            resolve(newURL)
        },5000)
    })
    
     
}
// download("http://kalki.mp4").then((data)=>{
//     return compress(data)
// })
// .then((data)=>{
//   return upload(data)
// })
// .then((data)=>{
//    console.log(data)
// })
// .catch(err=>console.log(err));

//async/await
async function uploadzip(){
    try {
        let data=await download("http://kalki.mp4")
        let cfile= await compress(data);
        let newURL= await upload(cfile);
        return newURL;
    } catch (error) {
        console.log(error)
    }
    

}
uploadzip().then((value)=>{
    console.log(value)
})
// console.log(p)
// setTimeout(()=>{
// console.log(p);
// },10000)


// async function wait(){
//     setTimeout(()=>{
//         console.log("you are right")
//     },2000)
// }
// async function ok(){
//     c wait();
//     console.log("hi");
// }
// ok()

