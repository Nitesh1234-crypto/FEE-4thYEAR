// console.log(this); //window

function fun(){
    console.log(this);
}
// fun(); //window
obj={
    name:"nitesh",
    getname:function(a,b){
        console.log(this.name);
        // console.log(a);
    }

}
// obj.getname("hfdsfhdsf",5)  // this-----> obj
obj2={
    name:"jhon",
   
}
obj3={
    name:"ritik"
}


obj.getname.call(obj2,"abc",473247234) // this---->obj2
// obj.getname.apply(obj3);
// obj.fun=function fun(){
//     console.log(this);
// }
let f=obj.getname.bind(obj3);
console.log(f);
// f();

// obj.fun();
function foo(cb){
    console.log("hello")
    cb()
}
foo(f)