function check(num){
    return (num>0) &&((num&(num-1))==0)
}

const data = [
    { id: 56, parentId: 62 },
    { id: 81, parentId: 80 },
    { id: 74, parentId: null },
    { id: 76, parentId: 80 },
    { id: 63, parentId: 62 },
    { id: 80, parentId: 86 },
    { id: 87, parentId: 86 },
    { id: 62, parentId: 74 },
    { id: 86, parentId: 74 },
  ];
  
// let root
// data.forEach(el => {
//   // 判断根节点
//   if (el.parentId === null) {
//     root = el;
//     return;
//   }
//   // 用映射表找到父元素
//   const parentEl = data[idMapping[el.parentId]];
//   // 把当前元素添加到父元素的`children`数组中
//   parentEl.children = [...(parentEl.children || []), el];
// });
// console.log(root)
// function convert(list) {
// 	const res = []
// 	const map = list.reduce((res, v) => (res[v.id] = v, res), {})
// 	for (const item of list) {
// 		if (item.parentId === 0) {
// 			res.push(item)
// 			continue
// 		}
// 		if (item.parentId in map) {
// 			const parent = map[item.parentId]
// 			parent.children = parent.children || []
// 			parent.children.push(item)
// 		}
// 	}
// 	return res
// }
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
// const idMapping = list.reduce((acc, el, i) => {
   
//   acc[el.id] = i;
//   return acc;
// }, {});
function covert(list){
    const map = list.reduce((acc,el,i)=>(
        acc[el.id] = i,acc
        
    ),{})
    console.log(map)
    // const map = list.reduce((acc, el, i) => {
    //     console.log(el,i,'o')
    //   acc[el.id] = i;
    //   return acc;
    // }, {});
    let res = []
    list.forEach(element => {
        if(element.parentId==0){
            res.push(element)
            return 
        }
        if(element.parentId in map){
            let parent =list[map[element.parentId]]
            // console.log(parent)
            parent.children = parent.children||[]
            parent.children.push(element)
            console.log(parent.id)
            console.log(parent.children)
        }
        
    });
    return res
}
res = covert(list)
// for(let i of res){
//     console.log(i)
//     if(res.children){
//        console.log(res.children)
    
        
//     }
// }
console.log(res)

