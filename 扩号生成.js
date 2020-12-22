function genkuohao(n){
    if(!n)  return [];
    let res = []
    function dfs(subs,left,right,n){
        if(left===n&&right===n){
            res.push(subs)
        }
        if(left<right){
            return;
        }
        left<n &&dfs(subs+'(',left+1,right,n)
        right<n &&dfs(subs+')',left,right+1,n)
    }
    dfs("",0,0,n)
    return res
}
// console.log(genkuohao(2))


function shengchengkuohao(n){
    if(!n) return []
    let res = []
    function dfs(subs,left,right,n){
        if(left ===n && right===n){
            res.push(subs)
        }
        if(left<right) return 
        left<n&&dfs(subs+'(',left+1,right,n)
        right<n&&dfs(subs+')',left,right+1,n)
    }
    dfs("",0,0,n)
    console.log(res)
}
shengchengkuohao(3)
function panduan(str){
    let map = new Map()
    map.set("(",")")
    map.set("[","]")
    map.set("{","}")
    var stack =[]
    for(let i = 0;i<str.length;i++){
        if(map.has(str[i])){
            stack.push(str[i])
        }else{
            let temp = stack[stack.length-1]
            if(map.get(temp)==str[i]){
                stack.pop()
            }else{
                return false
            }
        }
    }
    return stack.length==0
}
console.log(panduan("(]"))
