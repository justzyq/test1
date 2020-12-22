Function.prototype.mybind = function(context){
    var _this = this
    var args = [...arguments].slice(1)
    return function F(){
        if(this instanceof F){
            return _this(...args,...arguments)
        }else{
            return _this.apply(context,args.concat(...arguments))
        }
        
    }
}
var containsNearbyDuplicate = function(nums, k) {
    for(let i = 0;i<nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            if(nums[i] == nums[j] && i !=j){
                console.log(j,i)
                if(j-i<k){
                   
                    return true
                }
            }
        }
    }
    return false
};
console.log(containsNearbyDuplicate([1,2,3,1,2,3],2))