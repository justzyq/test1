function shell(arr){
    var len = arr.length
    var gap = Math.floor(len/2)
    while(gap>=1){
        for(let i = 0;i<len;i++){
            for(let j = i;j>=gap;j--){
                if(arr[j]<arr[j-gap]){
                    let temp = arr[j]
                    arr[j] = arr[j-gap]
                    arr[j-gap] = temp
                }
            }
        }
        gap = Math.floor(gap/2)
    }
    console.log(arr)
}
arr= [1,2,36,74,2,3,57]
shell(arr)