// Function.prototype.mycall = function(context){
//     context = context || windows
//     context.fn = this
//     var args = [...arguments].slice(1)
//     var result = context.fn(this,args)
//     delete context.fn
//     return result 
// }
// let xhr = new XMLHttpRequest()
// let url = "dddd"
// xhr.onreadystatechange = function(){
//     if(xhr.status ==200 && xhr.readyState == 4){
//         console.log(xhr.responseText)
//     }
// }
// xhr.open('get',url,true)
// xhr.send(null)

// var newscript = document.createElement('script')
// newscript.src = "http://www.baidu.com/su?wd=java&cb =foo"
// document.body.appendChild(newscript)

function call(){
    let context = context||window
    let args = [...arguments].slice(1)
    context.fn = this
    let result = context.fn(this,args)
    delete context.fn
    return result
}
