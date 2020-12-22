function zimu(strs){
    let hash = new Map()
        
    // for(let i = 0; i < strs.length; i++) {
    //     let str = strs[i].split('').sort().join()
    //     if(hash.has(str)) {
    //         let temp = hash.get(str)
    //         temp.push(strs[i])
    //         hash.set(str, temp)
    //     } else {
    //         hash.set(str, [strs[i]])
    //     }
    // }
    // let hash = new Map()
    for(let i = 0;i<strs.length;i++){
        let str = strs[i].split('').sort().join()
        if(hash.has(str)) {
            let tmp = hash.get(str)
            tmp.push(strs[i])
            hash.set(str, tmp)
        } else {
            hash.set(str, [strs[i]])
            
        }
    }
    // return [...hash.values()]
    return [...hash.values()]

}
console.log(zimu(["eat", "tea", "tan", "ate", "nat", "bat"]))

console.log(Array.prototype.slice.call([1,2,3,54,56]))