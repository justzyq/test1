var findSubsequences = function(nums) {
    let res = []
    let len = nums.length
    let set = new Set()
    function dfs(start,temp){
        if(temp.length>=2){
            let str = temp.toString()
            if(!set.has(str)){
                res.push(temp.slice())
                set.add(str)
            }
                
        }
        for(let i = 0;i<len;i++){
            if(i !==start){
                let pre = temp[temp.length-1]
                let cur = nums[i]
                if(temp.length==0||pre<=cur){
                    temp.push(nums[i])
                    dfs(i+1,temp)
                    temp.pop()
                }
            }
        }
        
    }
    dfs(0,[])
    return res
};
console.log(findSubsequences([4,3,2,5]))