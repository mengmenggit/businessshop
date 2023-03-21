export default{
    namespaced:true,
    state: {
        count:1,
      },
      // 计算state，获取对应的值
      getters: {
        countStatus(state){
          return state.count>=1
        }
      },
      // 更新状态的方法-更新state的唯一方法，commit mutation
      mutations: {
        setcount(state,num){
          state.count=num
        },
      },
      // 可以异步操作，可以返回promise，更改的数据还是传到了mutations去更改
      actions: {
        setcountPromise(context,num){
          return new Promise((resolve,reject)=>{
            if(num>100){
              reject("值不能大于100")
            }else{
              context.commit("setcount",num)
              resolve()
            }
          })
        }
      },
}