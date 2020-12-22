/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let length_dp = new Array(nums.length).fill(1),
    count_dp = new Array(nums.length).fill(1)

    for(let i = 1; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                // 后面大于前面可能是最大连续数组
                if (length_dp[i] <= length_dp[j]) {
                    //初始化的情况/前面的j所在的最长子序列大于之前存储的某个最长子序列的情况要被替换掉
                    length_dp[i] = length_dp[j] + 1
                    count_dp[i] = count_dp[j]
                }else if (length_dp[i] == length_dp[j] + 1){
                    // 说明加上这个数再是最长子序列
                    count_dp[i] += count_dp[j]
                }
            }
        }
    }
    let max = Math.max(...length_dp)
    let sum = 0
    console.log(max)
    for(let i = 0; i < count_dp.length; i++) {
        if (length_dp[i] == max) {
            sum += count_dp[i]
        }
    }
    
    return sum
    
};
console.log(findNumberOfLIS([2,2,2,2,2,3,4]))
function func(nums){
    let length_dp = new Array(nums.length).fill(1),
    count_dp = new Array(nums.length).fill(1)

    for(let i = 1; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                // 后面大于前面可能是最大连续数组
                length_dp[i] = Math.max(length_dp[j]+1,length_dp[i])
            }
        }
    }
    console.log(Math.max(...length_dp))

}
func([3,2,4,-1,0,6,2,3])
findNumberOfLIS([3,2,4,-1,0,6,2,3])