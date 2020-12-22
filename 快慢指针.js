
var detectcycle = function (head){
    let slow = head
    let low = head
    while(fast !==null && fast.next !==null){
        slow =slow.next
        fast = fast.next.next
        if(slow == fast){
            fast = head
            while(slow!=fast){
                slow = slow.next
                fast = fast.next
            }
            return slow
        }
    }
    return null
}

//求第一个公共系节点
var getcommon =  function (heada,headb){
    let node1 = heada,node2 = headb
    while(node1!==node2){
        node1 = node1!==null?node1.next :headb
        node2 = node2!==nulll?node2.next:heada
    }
    return node1
}