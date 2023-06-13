// //q1
// function a()
// {
//     console.log("smile")
// }
// a();

// // //q2
// function b()
// {
//     var a=3,b=4,total
//     total=a+b
//      console.log("sum of",a,",",b,"is",total)
// }
// b();

// //q3
// const arrow = () => {
//     console.log("Hello World");
// }
// arrow();

//q4
// var x=21
// var girl =function()
// {
//     console.log(x)
//     var x=20
// }
// girl();


//q5
// var x=21
// girl();
// console.log(x)
// function girl()
// {
//     console.log(x)
//     var x=20
// }


//q6

// var x=21
// a()
// b()
// function a()
// {
//     x=20
//     console.log(x)
// }
// function b()
// {
//      x=40
//     console.log(x)
// }

//q7

// function fact(n)
// {
//      if(n==0)
//      {
//         return 1
//      }
//      else{
//         return n* fact(n-1)
//      }
// }
// console.log(fact(5))



//q11

// function FindSum(a,b)
// {
//     return a+b
// }
// function DisplayData(data,batch)
// {
//     console.log(`i am from ${data} and My batch is EA${batch} `)
// }
// DisplayData("Prepbyte",FindSum(10,9))


//q22
// Abc()
// const Abc=function()
// {
//     let value=20
//     console.log(value)
// }

//q33
// var a=10;
// (function ()
// {
//     console.log(a)
//     var a=20;
// })
// ();

//q44
const greet=function(name)
{
    return function(m){
       console.log(`hi ${name},${m}`);
    }
}
const greet_message=greet(`ea23`);
greet_message("welcome")




