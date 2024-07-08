// var name="xyz"
let obj={
    name:"nitesh",
    getName:()=>{
        console.log(typeof this.name);
    }
}
obj.getName();

let obj2={
    name:"Nitesh",
    getName:function(){
        //this-->obj2
       let foo=()=>{
        console.log(this.name);
       }
       foo();
    }
}
obj2.getName();