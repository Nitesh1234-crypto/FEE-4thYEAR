function fun(a){ //HOF
    console.log("hello");
    return a;
}

function foo(){ //callback
    console.log("bye");
}
let res=fun(foo);
res();