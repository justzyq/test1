// function create(){
//     let obj = new Object()
//     let con = [].shift.call(arguments)
//     obj.__proto__ = Con.prototype
//     let result = con.apply(obj,arguments)
//     return typeof result==='object'?result:obj

// }
function mynew(fn,args){
    var obj =new Object()
    obj.__proto__ = fn.prototype
    var result = fn.apply(obj)
    return typeof result =='Object'?reslut:obj
}

function f(){
    this.a = 1
    
}
var obj = mynew(f)
// console.log(obj)
var obj = Object.create({})//
console.log(obj.__proto__==Object.prototype)
var obj1  = new Object()
console.log(obj1.__proto__==Object.prototype)//继承了原型连
/*
Object.create(arg, pro)创建的对象的原型取决于arg，arg为null，
新对象是空对象，没有原型，不继承任何对象；arg为指定对象，
新对象的原型指向指定对象，继承指定对象*/
function create(proto){
    function F(){}   
    F.prototype = proto
    return new F()
}
function mynew(){
    let args = [].shift.call(arguments)
    let constructor = args.shift()
    let context = Object.create(constructor.prototype)
    let result = constructor.apply(context, args)
    return typeof result === 'object' ?result:context
}
