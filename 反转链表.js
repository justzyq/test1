function fz(head){
    let cur = head
    let pre = null
    while(cur){
        let tmp =  cur.next
        cur.next = pre
        pre = cur
        cur = tmp
    }
    return pre
}