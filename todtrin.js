//var a = 1
//console.log(a.toString())
//Array.toString.call()
//let arr = [1,2,3]
//console.log(arr.toString())
//console.log(Object.prototype.toString.call(arr))

var x = 2
var y = {
    x:3,
    z:(function (x){
      //  console.log(this)
        console.log("this.x",this.x)
        console.log("x",x)
        this.x *=x
        console.log("chengfa zhihou d x",this.x)
        console.log("x1:",x)
        console.log("this.x2",this.x);
        console.log("x3",x)
        x+=2
        return function(n){
           // console.log("fhunc.this,x".this.x)
            console.log("func.x",x)
            console.log("n:",n)
            this.x*n
            x+=3
            console.log(x)
        }
    })(x)
}
var m = y.z
m(4)
y.z(5)
console.log(x,y.x)
// a = [1,8,5,7]
a.sort((a,b)=>a-b)
console.log(a.sort())