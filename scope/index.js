function fun(){
    let c=50
    if(true){
        var a=10;
        let b=20;
        console.log(a)
        console.log(b)
    }
    console.log(a)
    console.log(b) // error because let has block scope
    console.log(c)
}
fun()