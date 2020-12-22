function combine(nums,target){
    let res = []
    nums.sort()
    function dfs(sum,subs,index){
        if(sum>=target){
            if(sum===target) res.push(subs.slice())
            return 
        }
        for(let i = index;i<nums.length;i++){
            if(nums[i] === nums[i-1] &&  i-1>=index) continue
            subs.push(nums[i])
            dfs(sum+nums[i],subs,i+1)
            subs.pop()
        }
    }
    dfs(0,[],0)
    return res
}
console.log(combine([10,1,2,7,6,1,5],8))