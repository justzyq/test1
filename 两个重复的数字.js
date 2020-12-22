var singleNumbers = function(nums) {
    let cnt = 0
    for(let i of nums){
        cnt^=i
    }
    let res = 1
    while((res&cnt)==0){
        res<<=1
    }
    console.log(res)
    let a = 0
    let b = 0
    for(let i of nums){
        if((i&res)==0){
            a^=i
        }else{
            b^=i
        }
    }
    return [a,b]
   
};
// console.log(singleNumbers([1,2,10,4,1,4,3,3]))
console.log(1&3)