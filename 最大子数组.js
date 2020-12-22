function sub(nums){
    let  res = nums[0]
    let m = nums[0]
    for(let i = 1;i<nums.length;i++){
        res=Math.max(res+nums[i],nums[i])
        if(res>m)m = res
    }
    return res
}
console.log(sub([2,2,-1,-4,2,4,5]))

function maxsub(arr){
    var dp = new Array(arr.length).fill(0)
    dp[0] = arr[0]
    max = arr[0]
    for(let i = 1;i<arr.length;i++){
        dp[i] = Math.max(dp[i-1]+arr[i],arr[i])
        if(dp[i]>max)max = dp[i]
    }
    console.log(max)
}
maxsub([1,2,3,-4,5,-7,9,19,23])
