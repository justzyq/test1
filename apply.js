Function.prototype.myApply =  function(context){
    var context = context || window
    context.fn = this
    if(arguments[1]){
        var result = context.fn(...arguments)
    }else{
        var result = context.fn()
    }
    delete context.fn
    return result
}