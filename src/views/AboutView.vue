<template>
 <div id="dom">{{ message }}--{{num}}</div>
</template>
<script>
import {reactive,toRefs,onBeforeMount,onMounted,onBeforeUpdate,onUpdated} from "vue"
export default{
  name:"adout",
  setup(){
    const data = reactive({
      message:"welcome to my world!",
      num:0
    })
    // 数据渲染之前
    onBeforeMount(()=>{
      console.log("onBeforeMount",document.querySelector("#dom"))
    })
    // 数据渲染后
    onMounted(()=>{
      console.log("onMounted",document.querySelector("#dom"))
      setTimeout(() => {
        data.message="come in"
      }, 2000);
    })
    // dom更新前
    onBeforeUpdate(()=>{
      console.log("onBeforeUpdate")
    })
    onUpdated(()=>{
      console.log("onUpdated")
      data.num+=1;
    })
    return{
      ...toRefs(data)
    }
  }
}
</script>
