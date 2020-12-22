arr = [1,2,3,3,4,5,5,6]
arr1= [1,2,3,4]
// arr.forEach((element,index) => {
//   console.log(index,element)  
// });
// res  = arr.map((value,index)=>{
//     return value*2
// })
// console.log(res)

var intersection = function(nums1, nums2) {
    let res = []
    for(let i of nums1){
        // console.log(i)
        if(nums2.indexOf(i)!==-1){
            if(res.indexOf(i)===-1)
            res.push(i)
        }
    }
    return res
};
// console.log(intersection(arr,arr1))
function one(arr){
    res = []

    for(let i = 0;i<arr.length;i++){
        // res = 0
        flag = true
        for(let j = 0;j<arr.length;j++){
            if(i==j) continue
            if(arr[j] === arr[i]) flag =false
        }
        if(flag===true)
        res.push(arr[i])
    }
    console.log(res)
}
one(arr)
