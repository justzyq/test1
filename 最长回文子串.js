function huiwen(s){
    let n = s.length
    let  res = ''
    let dp = Array.from(new Array(n),()=>new Array(n).fill(0))
    for(let i = 0;i<n;i++){
        for(let j = i;j>=0;j--){
            dp[j][i] = s[i]===s[j]&&(i-j<2|| dp[j+1][i-1])
            if(dp[j][i]&& i-j+1>res.length) res=s.substring(j,i+1)
        }
    }
    console.log(dp)
    console.log(res)
}

huiwen('abbabbba')