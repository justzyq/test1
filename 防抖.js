function debounce(fn,delay){
    let time = null
    return function(){
        clearTimeout(time)
        time = setTimeout(() => {
            fn.apply(this,arguments)
        }, delay);
    }
}
function throttle(fn,dalay){
    let canrun  = true
    return function(){
        if(!canrun) return 
        run = false
        setTimeout(() => {
            fn.apply(this,arguments)
        }, delay);
    }
}