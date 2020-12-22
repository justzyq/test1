
function ListNode(val) {
     this.val = val;
     this.next = null;
}


var deleteDuplicates = function(head) {
    let a = new ListNode(0)
    a.next = head
    let res = a
    let b = head
    while(b.next!=null &&b!=null){
        if(a.next.val != b.next.val){
            a = a.next
            b = b.next
        }else{
            while(b.next !=null && a.next.val ==b.next.val){
                b = b.next
            }
            a.next = b.next
        }
    }
    return res.next
 }
 let res = [1,2,3,3,4,4,5]
 let node = new ListNode(res[0])
 let head = node
 for(let i = 1;i<res.length;i++){
     let temp = new ListNode(res[i])
     node.next = temp
     node = node.next
 }
 console.log(head)
 console.log(deleteDuplicates(head))