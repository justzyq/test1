function select(arr){
    let n = arr.length
    for(let i = 0;i<arr.length;i++){
        let min = i
        for(let j = i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
 
    }
    console.log(arr)
}
arr = [1,2,3,4,8,9,4,2,1]
select(arr)