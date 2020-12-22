var minDistance = function(word1, word2) {
    let m = word1.length
    let n = word2.length
    // let dp = new Array(m + 1).fill(new Array(n+1).fill(0))
    let dp = new Array(m + 1)
    for (let i = 0; i < m + 1; i++) {
        dp[i] = new Array(n + 1).fill(0)
    }
    // dp[0][0...n2]的初始值
    for (let j = 1; j <= n; j++) {
        dp[0][j] = j;
    }
    // dp[0...n1][0] 的初始值
    for (let i = 1; i <= m; i++) {
        dp[i][0] = i;
    }
    console.log(dp)
    for(let i = 1;i<=m;i++){
        for(let j = 1;j<=n;j++){
            if(word1.charAt(i-1) == word2.charAt(j-1)){
                dp[i][j] = dp[i-1][j-1]
            }else{
                dp[i][j] = Math.min(dp[i-1][j],dp[i-1][j-1],dp[i][j-1])+1
            }
         }
    }
    console.log(dp)
    return dp[m][n]
};

console.log(minDistance('horse','ros'))