var wordPattern = function(pattern, s) {
    let pat = pattern.toString().split("")
    let str = s.toString().split(" ")
    let map = new Map()
   
    for(let i = 0;i<pat.length;i++){
     
        // console.log(map.keys())
        if(map.has(pat[i])){
            if(map.get(pat[i])!=str[i]) return false
        }else{
            for(let m of map.values()){
                if(str[i] == m) return false
            }
            map.set(pat[i],str[i])
        }
    }
    return true
};
console.log(wordPattern("abba","dog cat cat dog"))