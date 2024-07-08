function download(URL,cb){ //URL---> http://www.movies.com/kalki.mp4
    let a=URL.split(":")[0]
    if(a!="http"){
        return cb("Invalid url",null)
    }
    setTimeout(()=>{
        let dfile=URL.split("/").pop();
        console.log(dfile);
        cb(null,dfile)
    },3000)
    

          
}

function compress(file,cb){
    //kalki.mp4---->kalki.zip
    setTimeout(()=>{
        let movie=file.split(".")[0];
        let compfile= movie+".zip";
        console.log(compfile);
        cb(null,compfile);
    },1000)
   

}

function upload(cfile,cb){
    setTimeout(()=>{
        let newURL="http://www.chitkara.com/" +cfile
        cb(null,newURL)
    },5000)
     
}

let response=download("http://www.movies.com/kalki.mp4",function(err,data){
    if(err) return err;
        compress(data,function(err,data){
            if(err) return err;
            console.log("hi");
            upload(data,function(err,data){
                console.log
                console.log("file uploaded at" +" "+data);
                return "done";
            })
        })
})
console.log(response);