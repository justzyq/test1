function Publisher(){
    this.subscrible  = []
}
Publisher.prototype.deliver =  function(data){
    this.subscrible.forEach(function(fn){
        fn(data)
    });
    return this;
}
Func