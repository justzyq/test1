function find(a,b){
    let a1 = a
    let b1 = b
    while(a1!=b1){
        a1 = a1!=null?a1.next:a
        b1 = b1!=null?b1.next:b
    }
    return a1
}