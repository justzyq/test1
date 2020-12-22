function Person(){
    this.name='123'
    this.list  = [1,2,3,4,5]
    this.age =12
}
Person.prototype.getName = function(){
    console.log(this.name
        )
}
Person.prototype.work ='worker'

function child(){
    this.name='ch'
}
child.prototype = new Person()
var ch1 = new child()
var  ch = new child()
console.log(ch.name)
console.log(ch.age)
console.log(ch.work)
Person.prototype.getwork=function(){
    this.work = 'meiyou'
}
Person.prototype.changeage=function(){
    this.age = 123
}

ch.getwork()
console.log(ch.work)
console.log(ch1.work)
ch.changeage()
console.log(ch.age)
console.log(ch1.age)
ch1.list.push(5)

console.log(ch.list)