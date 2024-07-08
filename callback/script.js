function starter(cb){
    console.log("starter start....")
    setTimeout(()=>{
        console.log("starter khtm ho gya drinks le aau....")
        cb(mainCourse); //drinks()
    },2000)
    
}

function drinks(cb){
    console.log("pinna shuru");
    setTimeout(()=>{
       console.log("drinks khtm main course lau....")
       cb(sweet) //maincourse()
    },1000)
}

function mainCourse(cb){
    console.log("panner butter masala");
    setTimeout(()=>{
        console.log("mithe mai lau kuch....");
        cb(bill) // sweet()
    },5000)
}

function sweet(cb){
    console.log("ice-cream aa gayi");
    setTimeout(()=>{
        console.log("pet bhar gya...bill kon pay krega");
        cb();
    },3000)
}

function bill(){
    console.log("jisne jada pii hai vo pay krega");
}
starter(drinks);
// drinks();
// mainCourse();
// sweet();
// bill();