// let result=fun();
// console.log(result);
// function fun(){
//     console.log("hello")
// }
// // console.log(a);
var a=10;
function fun(){
    console.log(a);
    var a=20;
    function foo(){
        a++;
        console.log(a);
        var a=30;
    }
    foo()
}
fun();