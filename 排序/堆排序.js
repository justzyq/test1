function heap(arr){

}
function build(arr,l){
    let m = Math.floor(l/2)
    for(let i = m;i>=0;i--){
        heapify(arr,l,i)
    }
}
function heapify(arr,i,n){
    let c1 = n*2+1
    let c2 = n*2+2
    let max = n
    if(c1<i && arr[c1]>arr[max]){
        max = c1;
    }
    if(c2<i && arr[c2]>arr[max]){
        max = c2;
    }
    if(max !=n){
        swap(arr,n,max);
        heapify(arr,i,max);
    }

}
function swap(arr,i,max){
    let temp = arr[i]
    arr[i] = arr[max]
    arr[max] = temp

}
function main(tree){
    let len = tree.length;
    build(tree,len);
    for (let i = len-1; i >= 0; i--) {
        swap(tree,i,0);
        heapify(tree,i,0);
    }
   console.log(tree)
}
arr = [1,2,6,4,2,67,9,42,2]
main(arr)