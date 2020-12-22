//传入一个object
export default function combineReducers(reducers){
    //获取该object的key值
    const reducerKeys = Object.keys(reducers)
    //过滤后的reducers
    const finalReducers = {}
    //获取每一个key对应的value
    //在开发环境下判断是不是undefined
    //然后将值类型是函数的值放入finalreducers
    for(let i = 0;i<reducerKeys.length;i++){
        const key = reducerKeys[i]
        if(ProcessingInstruction.env.NODE_ENV !=='production'){
            if(typeof reducers[key] === undefined){
                warning("err")
            }
        }
        if(typeof reducers[key] === 'function'){
            finalReducers[key] = reducers[key]
        }
    }
    //拿到过滤后的reducers的key值
    const finalReducersKeys = Object.keys(finalReducers)
    //在开发环境下判断，保存不期望key的缓存可以用下面做警告
    if (process.env.NODE_ENV !== 'production') {
        unexpectedKeyCache = {}
      }
    
      let shapeAssertionError
      try {
        // 该函数解析在下面
        assertReducerShape(finalReducers)
      } catch (e) {
        shapeAssertionError = e
      }
      // combineReducers 函数返回一个函数，也就是合并后的 reducer 函数
      // 该函数返回总的 state
      // 并且你也可以发现这里使用了闭包，函数里面使用到了外面的一些属性
      return function combination(state = {}, action) {
        if (shapeAssertionError) {
          throw shapeAssertionError
        }
        // 该函数解析在下面
        if (process.env.NODE_ENV !== 'production') {
          const warningMessage = getUnexpectedStateShapeWarningMessage(
            state,
            finalReducers,
            action,
            unexpectedKeyCache
          )
          if (warningMessage) {
            warning(warningMessage)
          }
        }
        //state是否改变
        let hasChanged = false
        //改变后的state
        const nextState = {}
        for(let i = 0;i<finalReducersKeys.length;i++){
            //拿到相应的key
            const key = finalReducersKeys[i]
            //获得key对应的reducer函数
            const reducer = finalReducers[key]
            //states树下key是与finreducers下的key相同的
            //所以你在combinereducers中传入的key即代表了各个reducer和state
            const previousStateForKey = state[key]
            //然后执行reducr函数获取该key值对应的state
            const nextStateForKey = reducer(previousStateForKey, action)
            //判断state的值，undefined的话就报错
            if(typeof nextStateForKey === 'undefined'){
                const err = getundefinde(key,action)
                throw new Error(err)
            }
            //然后将value塞进去
            nextState[key] = nextStateForKey
            //如果state改变
            hasChanged = hasChanged ||nextStateForKey !=previousStateForKey

        }
        //只要state改变过就返回新的state
        return hasChanged?nextState:state
    }
}
// 这是执行的第一个用于抛错的函数
function assertReducerShape(reducers) {
    //将conbinereducers中的参数遍历
    Object.keys(reducers).forEach(key=>{
        const reducer = reducers[key]
        //给她传入一个action
        const initialState = reducer(undefined,{type:ActionType.INIT})
        //如果得到的state为undefined就报错
        
    })
}