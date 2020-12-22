function Person(name){
    this.name  = name 
}
//原型链继承
function child1(){}
child1.prototype = new Person();

//构造函数继承
function child2(){
    Person.call(this,name)
}
//组合继承
function child3(){
    Person.call(this,'jer')
}
child3.prototype = new Person()
//原型继承
function content(obj){
    function F(){}
    F.prototype = obj
    return new F()
}
var obj = new Person()
var child4 = content(obj)
//寄生式继承
function content1 (obj){
    function F(){}
    F.prototype = obj 
    return new F()
}
var obj = new Person()
function child5(){
    var child6 = content(obj)
    child5.age = 10
    return child5
}
//寄生组合继承
function content3(obj){
    function F(){}
    F.prototype = obj
    return new F()
}
var obj = content3(Person.prototype)
function child6(){
    Person.call(this)
}
child6.prototype = obj
obj.constructor = child6

