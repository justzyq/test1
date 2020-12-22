class Promise{
    constructor(fn){
        this.state = 'pending'
        this.reason = undefined
        this.value = undefined
        let resolve = value=>{
            if(this.state==='pending'){
                this.state = 'fullfiled'
                this.value = value
            }
        }
        let reject = value =>{
            if(this.state === 'pending'){
                this.state = 'reject'
                this.reason = value
            }
        }
        try{
            fn(resolve,reject)
        }catch(e){
            reject(e)
        }
    }
    then(onFulled,onRejected){
        switch(this.state){
            case 'fullfilled':
                onFulled(this.value)
                break
            case 'rejected':
                onRejected(this.reason)
                break
            default:
                break
        }
    }
}
Promise.all = function (arr){
    let result  = []
    let i = 0
    return new Promise(function(resolve,reject){
        for(let val of arr){
            Promise.resolve(val).then(function(res){
                result[i++] = res
                if(i === arr.length){
                    return resolve(result)
                }
            },function(err){return reject(err)})
        }
    })
}


class Promise{
    constructor(fn){
        this.status ='pending'
        this.reason = undefined
        this.value =undefined
        let reslove = value=>{
            if(this.status =='pending'){
                this.status = 'fullfilled'
                this.value = value
            }
        }
        let reject = reason =>{
            if(this.status ==='pending'){
                this.status = 'reject'
                this.reason = reason
            }
        }
        try{
            fn(resolve,reject)
        }catch(e){
            reject(e)
        }
    }
    then(onfullfiled,onRejected){
        switch (this.status){
            case 'fullfilled':
                onfullfiled(this.value)
                break
            case 'reject':
                onRejected(this.reason)
                break
            default:
                break
        }

    }
}

Promise.all=function(arr){
    let result =[]
    let cnt = 0
    let len =arr.length
    return new Promise(function(resolve,reject){
        for(let val of arr){
            Promise.resolve(val).then(function(res){
                result.push(res)
                cnt++
                if(cnt==len){
                    return reslove(result)
                }
            },function(e){return reject(e)})
        } 
    })
}
function debounce(fn,wait){
    let time =null
    return function (){
        if(time!==null) clearTimeout(time)
        time = setTimeout(()=>{
            fn.apply(arguments)
        },wait)
    }
}

function throttle(fn,wait){
    let canrun = true
    return function(){
        if(!canrun) return
        canrun = false
        
    }
}