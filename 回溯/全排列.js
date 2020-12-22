// var permuteUnique = function(nums) {
//     let n = nums.length
//     nums.sort()
//     let hash = new Array(n).fill(0)
//     let res = []
//     function dfs(tmp){
//         if(tmp.length===n){
//             res.push(tmp.slice())
//             return 
//         }
//         for(let i = 0;i<nums.length;i++){
//             if(hash[i]===1 ||(i>0 && !hash[i-1] && nums[i-1] == nums[i]))continue
//             hash[i] = 1
//             tmp.push(nums[i])
//             dfs(tmp)
//             hash[i] = 0
//             tmp.pop()
//         }
//     }
//     dfs([])
//     return res
// };
// console.log(permuteUnique([1,2,1]))

// let nums = [12,3,4,56]
// console.log(nums.indexOf(12))
var permute = function(nums) {
    let res = []
    function  dfs(nums,temp){
        if(temp.length==nums.length){
         
            res.push(temp.slice())
        }else{
            for(let i = 0;i<nums.length;i++){
                    if(temp.indexOf(nums[i])!=-1) continue
                    temp.push(nums[i])
                    dfs(nums,temp)
                    temp.pop()
        }
    }
       
    }
    dfs(nums,[])
    return res
};
console.log(permute([1,2,3]))
num = [1,2,3,54]
for(let i of num){
    console.log(i)
}