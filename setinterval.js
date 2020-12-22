function mySetInterval(fn, millisec){
    function interval(){
      setTimeout(interval, millisec);
      fn();
    }
    setTimeout(interval, millisec)
  }
  
var i = 1
function func(){
    console.log(1)
}
// func()
mySetInterval(func,100)
