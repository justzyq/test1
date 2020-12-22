function deepcopy(obj,copyobj){
    var copyobj = copyobj||{}
    for(var keys in obj){
        if(obj.hasOwnProperty(keys)){
            console.log(typeof(obj[keys]))
            if(typeof(obj[keys]) === 'object'){
                if(Array.isArray(obj[keys]))
                    copyobj[keys] = []
                else{
                    copyobj[keys] = {}
                }
              
                deepcopy(obj[keys],copyobj[keys])
            }
            else{
                copyobj[keys] = obj[keys]
            }
        }
    }
    return copyobj
}

var obj = {
    a:{b:3},
    c:3,
    d:[1,2,3,54]
}
var copyobj = {}

deepcopy(obj,copyobj)
console.log(copyobj)