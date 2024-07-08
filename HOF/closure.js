function outer(){
    let a=5;
    let b=10;
    function inner(){
        a++;
        b++;
        console.log(a);
        console.log(b);
    }
   return inner
}
let res1=outer();
res1();
res1();
let res2=outer();
res2();
res2();