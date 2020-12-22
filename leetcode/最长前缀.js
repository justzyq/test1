function func(strs){
    let str = strs[0]
    let res = str
    for(let i = 1;i<strs.length;i++){
        let j = 0
        for(;j<str.length&& j<strs[i].length;j++){
            if(strs[i][j] != str[j])  break
        }
        console.log(j)
        res = res.substr(0,j)
        if(res == "") return res
    }
    return res
}
console.log(func( ["aaa","aa","aaa"]))
// let len = strs.length
// if(len == 0 ) return ""
// let ans = strs[0]
// for(let i = 1;i<len;i++){
//     let j = 0
//     for(;j<ans.length && j<strs[i].length;j++){
//         if(ans[j]!=strs[i][j]) break
//     }
//     ans = ans.substr(0,j)
//     if(ans=="") return ans
// }
// return ans
console.log("aaaa".substr(0,5))