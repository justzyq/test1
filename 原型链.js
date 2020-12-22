// function fn(){
//     this.x = 100
//     this.y = 200
//     this.getX = function (){
//         console.log(this.x)
//     }
// }
// fn.prototype.getX = function(){
//     console.log(this.x)
// }

// fn.prototype.getY = function (){
//     console.log(this.y)
// }

// var f1 = new fn()
// var f2 = new fn()
// console.log(f1.getX === f2.getX)
// console.log(f1.getY === f2.getY)
// function a(){
//     return ()=>{
//         return ()=>{
//             console.log(this)
//         }
//     }
// }
// a()()()
// b()
// function b(){
//     console.log("fff")
// }

// var b  = function (){
//     console.log(123)
// }

// function A(){
//     let a = 1
//     function B(){
//         console.log(a)
//     }
//     return B
// }
// A()()