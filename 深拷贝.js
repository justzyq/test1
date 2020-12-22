function deepcopy(obj,copy){
    let res = Array.isArray(obj)?[]:{}
    for(let key in obj){
        if(typeof(obj[key])==='object'){
            copy[key] = deepcopy(obj[key])
        }else{
            copy[key] = deepcopy[key]
        }
    }
    return copy
}
function main3() {
    Promise.resolve(true).then(() => {
      try {
        throw new Error('then');
      } catch(e) {
        console.log (e);
      }
    })
  }
  
  main3()
// const p = new Promise((resolve,reject)=>{
//     throw new Error('dddd')

// })
// p.catch((e) => console.log(e));
  
// throw new Error
// const p2 = new Promise((reslove, reject) => {
//     if(1) {
//       throw new Error('p2 error')
//     }
//   });
  
//   p2.catch((e) => console.log('p2 error'));
