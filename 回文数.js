var isPalindrome = function(x) {
    if(x<0) return false
    let xx= x
     let temp = 0
     while(x>0){
         temp = temp*10+x%10
         x = Math.floor(x/10)
     }
     console.log(temp)
     return temp == xx
     
 };
 console.log(isPalindrome(121))