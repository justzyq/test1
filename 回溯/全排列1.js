function pailie(nums){
    let res = []
    let hash  = new Array(nums.length).fill(0)
    function dfs(tmp){
        if(tmp.length === nums.length){
            res.push(tmp.slice())
            return 
        }
        for(let i = 0;i<nums.length;i++){
            if(hash[i] === 1) continue
            tmp.push(nums[i])
            hash[i] =1
            dfs(tmp)
            hash[i] = 0
            tmp.pop()
        }
    }
    dfs([])
    return res 
}
console.log(pailie([1,1,2,3]))