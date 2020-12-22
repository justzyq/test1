
// // console.log(bibao()())
// function bibao1(){
//     var a = 2
//     return function(){
//         return a 
//     }
   
// }
// console.log(bibao1()())
function fn(i){
    return function(n){
        console.log(n+(i++))
    }
}

var f = fn(10)
f(20)
fn(20)(40)
fn(30)(50)
f(30)
function fn(i){
    return function(n){
        console.log(n+(--i))
    }
}
var f = fn(2)
f(3)//4
fn(4)(5)//8
fn(6)(7)//12
f(8)//8
