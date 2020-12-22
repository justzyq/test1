function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
var levelOrder = function(root) {
   
    let res = []
    if(!root) return []
    let queue = [root]
    while(queue.length>0){
        let n = queue.length
        let tmp = []
        while(n){
            let node = queue.shift()  
            tmp.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            n--
        }
      
        res.push(tmp)        
    }
    return res
    // if(!root) return []
    // let queue = [root]
    // let res = []
    // while(queue.length > 0){
    //   let len = queue.length
    //   let arr = []
    //   while(len){
    //     let node = queue.shift()
    //     arr.push(node.val)
    //     if(node.left) queue.push(node.left)
    //     if(node.right) queue.push(node.right)
    //     len--
    //   }
    //   res.push(arr)
    // }
    // return res


};
let nums = [3,9,20,null,null,15,7]
let node= new TreeNode(nums[0])
let queue = [node]
let i = 1
while(i<nums.length){
    let j = queue.length
    for(let p = 0;p<j;p++){
        let node = queue.shift()
        node.left  = new TreeNode(nums[i++])
        queue.push(node.left)
        node.right = new TreeNode(nums[i++])
        queue.push(node.right)
    }
}

function xianxu(node){
   let arr  = []
    dfs(node,arr)
    return arr
}
function dfs(node,res){
    if(!node) return 
    if(node){
        
        dfs(node.left,res)
        res.push(node.val)
        dfs(node.right,res)

        
    }
    return 
}
let num = [1,1,2,3,4,4,5,5]
function func(nums){
    let ret = 0
    for(let i of nums){
        // ret ^=nums[i]
        console.log(i)
    }
    // console.log(ret)
}
// console.log(xianxu(node))
func(num)
console.log(1^4)
console.log(8^8)