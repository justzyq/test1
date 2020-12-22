var maxProfit = function(prices) {
    let n = prices.length
    const dp = new Array(n).fill(new Array(2).fill(0))
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    for(let i = 1;i<prices.length;i++){
        dp[i][0] =  Math.max(dp[i-1][0],dp[i-1][1]+prices[i])
        dp[i][1] = Math.max(dp[i-1][0]-prices[i], dp[i-1][1])
    }
    return dp[prices.length-1][0]
};

console.log(maxProfit([7,1,5,3,6,4]))
var maxProfit = function(prices, fee) {
    let n = prices.length
    const dp = new Array(n).fill(new Array(2).fill(0))
    dp[0][0] = 0
    dp[0][1] = -prices[0]-fee
    for(let i = 1;i<n;i++){
        dp[i-1][1] =  Math.max(dp[i-1][1],dp[i-1][0] - prices[i] - fee)
        dp[i-1][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
    }
    return dp[n-1][0]
};