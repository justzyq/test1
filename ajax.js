var xhr =new XMLHttpRequest()
xhr.open('get',URL)//第三个参数是 不是异步
xhr.onreadystatechange = function(){
    if(this.readyState==4 && this.status ==200){
        console.log(xhr.responseText)
    }
}
xhr.send(null)


function ajax(options){
    var xhr = new XMLHttpRequest()
    params = optios.data
    xhr.onreadystatechange = function(){
        if(xhr.readyState = 4 && this.status == 200){
            console.log(xhr.responseText)
        }
    }
    if(options.type == 'get'){
        xhr.open('get',options.url+params)
        xhr.send(null)
    }else{
        xhr.open('post',url)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencodede")
        xhr.send(params)
    }

    // xhr.send(null)
}