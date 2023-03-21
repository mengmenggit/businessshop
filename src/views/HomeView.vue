<template>
<!-- <h1>hellow world!!!</h1>
<p v-text="name"></p>
<p>{{name}}</p>
<p>{{age}}</p>
<p v-html="info"></p>
<p v-bind:data="dataVal">拥有属性data</p>
<p :class="{'red':isRed}">it's red</p>
<ul>
  <li v-for="(item,index) in userList">{{item.name}}-{{item.age}}-{{ index }}</li>
</ul> -->

<!-- <el-checkbox-group v-model="checkList" @change="handelchose">
    <el-checkbox v-for="(item) in checked" :label="item.check" :checked="item.check==1? true:false" true-label="1" false-label="0">{{item.label}}</el-checkbox>
    <el-checkbox label="Option B" />
    <el-checkbox label="Option C" />
  </el-checkbox-group> -->
<el-checkbox-group @change="submit">
  <!-- <el-checkbox v-for="item in al" v-model="item.check" :label="item.check" :checked="item.check==1?true:false" ture_label="1" false-label="2">{{item.label}}</el-checkbox> -->
</el-checkbox-group>
  <el-checkbox v-for="item in al" v-model="item.check" :label="item.check" :checked="item.check==1?true:false" true-label="1" false-label="2">{{item.label}}</el-checkbox>
  <!-- <el-checkbox v-model="al[0].check" :label="al[0].check" :checked="al[0].check==1? true:false" true-label="1" false-label="2" @change="alchange(e)">ok</el-checkbox><br> -->
  <!-- <el-checkbox v-model="al[1].check" :label="al[1].check" :checked="al[1].check==1? true:false" true-label="1" false-label="2" @change="alchange(e)">fine</el-checkbox><br> -->
<el-button @click="submit">submit</el-button>
</template>

<script>
import {reactive,toRefs} from "vue"
export default{
  name:"home",
  setup(){
    const data = reactive({
      name:"chanyeol",
      age:30,
      info:"<i>我是斜体字<i/>",
      dataVal:2,
      isRed:true,
      checkList:[],
      al:[
        {label:'ok',check:2},
        {label:'fine',check:2},
        {label:'good',check:2},
        {label:'nice',check:2},
      ],
      // bu:2,
      checked:[
        {label:'chanyeol',check:2},
        {label:'sehun',check:2},
        {label:'baekyun',check:2},
      ],
      Option:false,
      userList:[
        {
          name:"sehun",
          age:29,
        },
        {
          name:"sehun",
          age:29,
        },
        {
          name:"sehun",
          age:29,
        },
        {
          name:"sehun",
          age:29,
        },
        {
          name:"sehun",
          age:29,
        },
      ]
    })
    // const handelchose=(val,item)=>{
    //   console.log(val,item)
    // }
    // const submit=(){
    //   console.log(this)
    // }
    return{
      // data
      ...toRefs(data),
      // handelchose,
      // submit
    }
  },
  methods:{
    handelchose(val){
      console.log(val)
    },
    submit(){
      // console.log(this.al)
      this.checkList.push(this.al[0].check,this.al[1].check,this.al[2].check,this.al[3].check,)
      console.log(this.checkList)
    },
    alchange(e){
      console.log(this.al)
    }
  }
}
</script>
<style scoped>
.red{
  color: red;
}
</style>
