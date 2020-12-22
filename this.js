const obj  = {
    name:"a",
    getname:function(){
        console.log(this.name)
    }
}
var getname = obj.getname
getname()
var getname = obj.getname.bind(obj)
getname()
getname.call(obj);
console.log(this)
getname.call(this);

//  var aa=10;
//  (function(){
//      if(nb ==null)
//           console.log("hello world"+aa);
//     else{
//         console.log("?????")
//     }
//  })();
// let a = 20;
// var b = 30;
// console.log(a, b, c, window.a, window.b, window.c, window.d);
// var c = 40;
// let d = 50;
// function func(arr){
//     let res = []
//     for (let i = 0;i<arr.length;i++){
//         if(res.indexOf(arr[i]) === -1){
//             res.push(arr[i])
//         }
//     }
    
// }