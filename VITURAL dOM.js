export default class Element{
    constructor(tag,props,children,key){
        this.tag = tag
        this.props = props
        if(Array.isArray(children)){
            this.children = children

        }else if(isString(children)){
            this.key = key
            this.children = null
        }
        if(key) this.key = key
    }
    //渲染
    render(){
        let root = this._createElement(
            this.tag,
            this.props,
            this.children,
            this.key
        )
        document.appendChild(root)
        return root
    }
    create(){
        return this._createElement(this.tag,this.props,this.children,this.key)
    }
    //创建节点
    _createElement(tag, props, child,key){
        //通过tag创建节点
        let el = document.createElement(tag)
        //设置节点属性
        for(const key in props){
            if(props.hasOwnProperty(key)){
                const value = props[key]
                el.setAttribute(key,value)
            }
        }
        if(key){
            el.setAttribute('key',key)
        }
        if(child){
            child.forEach(element => {
                let child
                if(element instanceof Element){
                    child = this._createElement(
                        element.tag,
                        element.props,
                        element.children,
                        element.key
                    )
                }else{
                    child = document.createTextNode(element)
                }
                el.appendChild(element)
            });
        }
        return el
    }
}

import {StateEnums, isString,move} from './util'
export default function diff(oldDomTree, newDomTree){
    //用于记录差异
    let patches = {}
    //一开始的索引为0
    dfs(oldDomTree,newDomTree,0,patches)
    return patches
} 

function dfs(oldNode, newNode, index,patches){
    //用于保存字数的修改
    let curPatches = []
    //需要判断三种情xi况
    //1.没有新的节点，那么什么都不用做
    //2.新的节点的tagName和‘key’和旧的不同就替换
    //3.新的节点的tagName和‘key’和旧的相同，就开始遍历子树
    if(!newNode){}
    else if(newNode.tag ===oldNode.tag && newNode.key === oldNode.key){
        //判断属性是否变更
        let props = diffProps(oldNode.props, newNode.props)
        if(props.length) curPatches.push({type:StateEnums.ChangeProps,props})
        //遍历子树

    }else{
        //节点不同需要替换
        curPatches.push({type:StateEnums.Replace,node:newNode})
    }
    if(curPatches.length){
        if(patches[index]){
            patches[index] = patches[index].concat(curPatches)
        }else{
            patches[index]  = curPatches
        }
    }

}
/**
 * 判断属性的更改也分三个步骤

    遍历旧的属性列表，查看每个属性是否还存在于新的属性列表中
    遍历新的属性列表，判断两个列表中都存在的属性的值是否有变化
    在第二步中同时查看是否有属性不存在与旧的属性列列表中
 */
function diffProps(oldProps,newProps){
    //判断props分为以下三个步骤
    //先遍历oldprops查看是否存在删除的属性
    //然后遍历newprops查看是否有属性值被修改
    //最后差看是否有属性新增
    let change = []
    for(const key in oldProps){
        if(oldProps[key] &&oldProps[key]!==newProps[key]){
            change.push(
                {
                    prop:key,
                    value:newProps[key]
                }
            )
        }else if(!oldProps[key]){
            change.push({
                prop:key,
                value:newProps[key]
            })
        }
    }
    return change
}
/*
这个算法是整个 Virtual Dom 中最核心的算法，且让我一一为你道来。 这里的主要步骤其实和判断属性差异是类似的，也是分为三步

    遍历旧的节点列表，查看每个节点是否还存在于新的节点列表中
    遍历新的节点列表，判断是否有新的节点
    在第二步中同时判断节点是否有移动
 */

 function listDiff(oldList, newList, index, patches){
     let oldKeys = getKeys(oldList)
     let newKeys = getKeys(newList)
     let changes = []
     //用于保存变更后的节点数据
     //使用该数组保存有以下好处
     //1.可以正确获得被删除节点的索引
     //2.交换节点位置只需要操作一遍DOM
     //3.用于‘diffchildren’函数中的判断，只需要遍历
     //两个树中都存在的节点，而对新增或者删除的节点来说，完全没有必要再去判断一遍
     let list = []
     oldList && oldList.forEach(item=>{
         let key = item.key
         if(isString(item)){
             key = item
         }
         //寻找新的childre中是否含有当前节点
         //没有的话要删除
         let index = newKeys.indexOf(key)
         if(index === -1){
             list.push(null)
         }else{
             list.push(key)
         }
     })
     //遍历变更后的数组
     let length = list.length
     //因为删除数组元素会更改索引的。所以从后往前删可以保证索引不变
     for(let i = length-1;i>=0;i--){
         //判断当前元素是否为空，为空表示需要删除
         if(!list[i]){
             list.splice(i,1)
             changes.push(
                 {
                     type:StateEnums.Remove,
                     index:i
                 }
             )
         }
     }
     //遍历新的list，判断是否有节点新增或移动
     //同时也对‘list’做节点新增和移动节点的操作
     newList && newList.forEach((item,i)=>{
         let key = item.key
         if(isString(item)){
             key = item
         }
         //寻找旧的children中是都含有当卡节点
         let index = list.indexOf(key)
         if(index === -1 && key ==null){
             change.push({
                 type:StateEnums.insert,
                 node:item,
                 index:i
             })
             list.splice(i,0,key)
         }else{
             //找到了，需要判断是否需要移动
             if(index!==i){
                 changes.push({
                     type:StateEnums.Move,
                     form:index,
                     to:i
                 })
                 move(list,index,item)
             }
         }
     })
     return {changes,list}
 }
 function getKeys(list){
     let keys = []
     let text
     list && list.forEach(item=>{
         let key 
         if(isString(key)){
             key = [item]
         }else if(item instanceof Element){
             key = item.key
         }
         keys.push(key)
     })
     return keys
 }

 /**
  * #遍历子元素打标识
    对于这个函数来说，主要功能就两个

    判断两个列表差异
    给节点打上标记
    总体来说，该函数实现的功能很简单
  */
function diffChildren(oldChild, newChild, index,patches){
    let{changes,list} = listDiff(oldChild, newChild,index,patches)
    if(changes.length){
        if(patches[index]){
            patches[index] = patches[index].concat(changes)
        }else{
            patches[index] = changes
        }
    }
    //记录上一个遍历过的节点
    let last = null
    oldChild && oldChild.forEach((item,i)=>{
        let child = item && item.children
        if(child){
            index = last&&last.children?index+last.children.length +1:index+1
            let keyIndex = list.indexOf(item.key)
            let node = newChild[keyIndex]
            //只遍历新旧中都存在的姐弟啊，其他新增或者删除的没必要遍历
            if(node){
                dfs(item,node,index,patches)
            }
        }else index+=1
        last = item
    })
}

/**
 * 渲染差异
通过之前的算法，我们已经可以得出两个树的差异了。既然知道了差异，就需要局部去更新 DOM 了，下面就让我们来看看 Virtual Dom 算法的最后一步骤

这个函数主要两个功能

深度遍历树，将需要做变更操作的取出来
局部更新 DOM
整体来说这部分代码还是很好理解的
 */
let index = 0
export default function patch(node, patchs){
    let changes = patchs[index]
    let childNodes = node&&node.childNodes
    //这里的深度遍历和diff重视hi一样的
    if(!childNodes) index+=1
    if(changes && changes.length && patchs[index]){
        changeDom(node,changes)
    }
    let last = null
    if(childNodes && childNodes.length){
        childNodes.forEach((item, i)=>{
            index = last&&last.children?index+last.children.length+1:index+1
            patch(item,patchs)
            last = item
        })
    }
}

function changeDom(node,changes,noChild){
    changes && changes.forEach(change=>{
        let {type} = change
        switch(type){
            case StateEnums.ChangeProps:
                let {props} = change
                props.forEach(item=>{
                    if(item.value){
                        node.setAttribute(item.prop,item.value)
                    }else{
                        item.removeAttribute(item.prop)
                    }
                })
                break
            case StateEnums.Remove:
                node.childNodes[change.index].Remove()
                break
            case StateEnums.insert:
                let dom
                if(isString(change.node)){
                    dom = document.createTextNode(chage.node)
                }else if(chage.node instanceof Element){
                    dom = chage.node.create()
                }
                node.insertBefore(dom,node.childNodes[change.index])
                break
            case StateEnums.Replace:
                node.parentNode.ReplaceChild(change.node.create(),node)
                break
            case StateEnums.Move:
                let fromNode = node.childNodes[change.form]
                let toNode = node.childNodes[change.to]
                let cloneFromNode = fromNode.cloneNode(true)
                let cloneToNode = toNode.cloneNode(true)
                node.replaceChild(cloneFromNode,toNode)
                node.replaceChild(cloneToNode,fromNode)
                break
            default:
                break

        }
    })
}
/*
Virtual Dom 算法的实现也就是以下三步

通过 JS 来模拟创建 DOM 对象
判断两个对象的差异
渲染差异
*/

let test4 = new Element('div',{class:'my-div'},['test4'])
let test5 = new Element('ul',{ class :'my-div'},['test5'])
let test1 = new Element('div',{class:'my-div'},[test4])
let test2 = new Element('div',{id:'11'},[test4,test5])
let root = test1.render()
let patchs = diff(test1,test2)
console.log(patchs)
setTimeout(() => {
    console.log('开始更新')
    patch(root,patchs)
    console.log('结束更新')
}, 1000);
