let obj={
    name:"nitesh",
    
}
let obj2={
    "dsfskjdf":8324,
    __proto__:obj
}
// obj.__proto__=obj2;
// console.log(obj2);

// let obj3= Object.create(obj2)
// console.log(obj3);
console.log(Object.getPrototypeOf(obj2))
Object.setPrototypeOf(obj,{"fdsff":2364326432});
console.log(obj);
// console.log(obj.__proto__)

function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
   
}
Person.prototype.getFullName=function(){
    console.log(this.firstName +" "+ this.lastName)
}
function EMP(){

}
EMP.prototype.getEMPID= function(){
    let id= Math.random();
    // console.log(id);
    return id;
}
Person.prototype.__proto__=EMP.prototype;

let p1= new Person("Nitesh","Singh");
let p2= new Person("Ritik", "Kumar");
console.log(p1.getFullName()); 
console.log(p1.getEMPID())
let str="abc";
// console.log(str.toUpperCase())
// Object.prototype.age=22;
// console.log(p1.age);

// let str =new String();
// console.log(str)
// let a = new Number();
// console.log(a);
// let arr= new Array();
// console.log(arr);)