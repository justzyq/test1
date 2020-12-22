var reconstructQueue = function(people) {
    let ans = []
    if(!people ||!people.length) return []
    people.sort((a,b)=>{
        if(a[0] === b[0]){
            return a[1]-b[1]
        }else{
            return b[0] - a[0]
        }
    })
    console.log(people)
    people.forEach(item =>{
        console.log(ans)
        ans.splice(item[1],0,item)
    })
    return ans
  };
  console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]))