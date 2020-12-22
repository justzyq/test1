var num = 10
var obj = {num:20}
obj.fn = (function (num){
    console.log(this)
    console.log(this.num ===num)
    this.num = num*3
    num++
    return function(n){
        console.log("this.num",this.num)
        this.num+=n
        num++
        console.log(num)
    }
})(obj.num)

var fn = obj.fn
fn(5)
console.log(num)
obj.fn(10)
console.log(num,obj.num)
