function starter(cb){
    console.log("starter start....")
    setTimeout(()=>{
        console.log("starter khtm ho gya drinks le aau....")
        cb();
    },2000)
    
}

function drinks(cb){
    console.log("pinna shuru");
    setTimeout(()=>{
       console.log("drinks khtm main course lau....")
       cb();
    },1000)
}

function mainCourse(cb){
    console.log("panner butter masala");
    setTimeout(()=>{
        console.log("mithe mai lau kuch....");
        cb()
    },5000)
}

function sweet(cb){
    console.log("ice-cream aa gayi");
    setTimeout(()=>{
        console.log("pet bhar gya...bill kon pay krega");
        cb()
    },3000)
}

function bill(cb){
    console.log("jisne jada pii hai vo pay krega");
    cb()
}
// starter(drinks);
// starter(function(){
//     drinks(function(){
//         mainCourse(function(){
//             sweet(function(){
//                   bill(function(){
//                     console.log("ghar chalte hai");
//                   })
//             })
//         })
//     })
// })
// starter(function(){
//     mainCourse(function(){
//         sweet(function(){
//               bill(function(){
//                     console.log("ghar chalte hai");
//               })
//         })
//     })
// })
 
