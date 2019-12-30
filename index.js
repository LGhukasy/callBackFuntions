// function f(cb1,cb2,cb3){
//     cb1(cb2,cb3)
// };
// function f1(cb11,cb22){
//     console.log("Hello1");
//     cb11(cb22)
// };
// function f2(cb111){
//     console.log("Hello2")
//     cb111()
// };
// function f3(){
//     console.log("Hello3")
// };
// f(f1,f2,f3)



// function f(cb){
//     let a = 15;
//     cb(a)
// };
// function f1(b){
//     console.log(b)
// };
// f(f1)



// function f(cb = f1) {
//     let a = 15;
//     cb(a)
// };
// function f1(b) {
//     b = 10;
//     console.log(b)
// };
// f();



// function f(cb=f1){
//     cb()
// };  
// function f1(cb=f2){
//     console.log("hello1");
//     cb()
// };
// function f2(){
//     console.log("Hello2")
// };
// f()



// function f(cb3, cb = f1, cb1 = f2, par) {
//     console.log(par);
//     par = 10;
//     cb(cb3)
// };
// function f1(cb11 = f2, par) {
//     console.log("Hello1");
//     cb11()
// };
// function f2() {
//     console.log("Hello2")
// };
// function f3() {
//     console.log("Hello3")
// };
// f(f3)



// function f(cb){
//     cb()
// };
// function f2(){
//     console.log("End of callbacks")
// }

// f(function(){
//     console.log("Hello1")
//     f(function(){
//         console.log("Hello2");
//         f(function(){
//             console.log("Hello3");
//             f2()
//         })
//     })
// })