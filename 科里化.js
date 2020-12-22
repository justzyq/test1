
function sum(a,b){
    return a+b
}

function curry(func){
    return function curried(...args){
        if(args.length>=func.length){
            return func.apply(this, args)
        }else{
            return function(...args2){
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

let cursum = curry(sum)
console.log(cursum(1)(2)(3)(4))
console.log(cursum(12))
console.log(cursum(1)(3))