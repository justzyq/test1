class publicher{
    constructor(){
        this.list = []
    }
    listen(fn){
        this.list.push(fn)
    }
    trigger(){
        for(let i = 0;i<this.list.length;i++){
            var fn = list[i]
            fn.apply(this,arguments)
        }
    }
}
   
   