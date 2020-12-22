function quicksort(arr){
    if(arr.length<=1) return  arr
    let temp = arr[0]
    let right = []
    let left = []
    for(let i = 1;i<arr.length;i++){
        if(arr[i]<=temp){
             left.push(arr[i])
        }
        else{
             right.push(arr[i])
        }
    }
    return quicksort(left).concat(temp,quicksort(right))
}
arr = [1,2,3,9,2,4,0,6]
console.log(quicksort(arr))