function person(){
    this.name = 'dff'
    age = 123
}
function child(){
    
}
function content(obj){
    function F(){}
    F.prototype = obj
    return new F()
}
var sub1 = new person()
var con = content(sub1)
function sub(){
    person.call(this)
}
function jisheng(obj){
    var sub = content(obj)

}
sub.prototype = con
con.constructor = sub

var sub2 = new sub()
// console.log(sub2)
sub2.age = 123
person.prototype.num  = [1,2,34]
// console.log(sub2.num)
sub2.num.push(9)
// console.log(new person().num)
person.prototype.n = 2
sub2.n = 333
// console.log(new person().n)

var sub = content(new person())
// console.log(sub.n)

function child(){

}
child.prototype = new person()
var ch = new child()
var ch2 = new child()
ch.n = 'sfdsdf'
console.log(ch2.n)
console.log(new person())