function combine(nums,target){
    let res = []
    nums.sort()
    function dfs(sum,subs,index){
        if(sum>=target){
            if(sum===target) res.push(subs.slice())
            return 
        }
        for(let i = index;i<nums.length;i++){
            subs.push(nums[i])
            dfs(sum+nums[i],subs,i)
            subs.pop()
        }
    }
    dfs(0,[],0)
    return res
}
console.log(combine([6,7,2,3],7))