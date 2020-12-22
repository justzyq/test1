function bubble(arr){
    let n = arr.length
    for(let i = 0;i<n;i++){
        let flag = true
        for(let j = 0;j<n-1;j++){
            if(arr[j+1]<arr[j]){
                flag = false
                let t = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = t
            }
            
        }
        if(flag) break
    } 
    console.log(arr)
}
arr = [1,2,34,3,8,54,4,3]
bubble(arr)