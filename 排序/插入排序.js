function insert(arr){
    let n = arr.length
    for(let i = 1;i<n;i++){
        let temp = arr[i]
        let j = i
        for(;j>0;j--){
            if(arr[j-1]<=temp) break
            arr[j] = arr[j-1]
        }
      arr[j] = temp
    }
    console.log(arr)
}
arr = [1,6,3,2,1,5,7]
insert(arr)