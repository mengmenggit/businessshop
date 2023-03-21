<template>
    <div>
        <!-- 欢迎页面 -->
    <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">HOME</el-breadcrumb-item>
    <el-breadcrumb-item
      ><a href="/">ROLE MANAGEMENT</a></el-breadcrumb-item>
    <el-breadcrumb-item>ACCOUNT MANAGEMENT</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="detailInfo">
    <div class="input_box">
    <!-- 搜索栏 -->
    <el-input
      v-model="search"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <el-select v-model="select" placeholder="Select" style="width: 115px">
          <el-option label="Restaurant" value="1" />
          <el-option label="Order No." value="2" />
          <el-option label="Tel" value="3" />
        </el-select>
      </template>
      <template #append>
        <el-button @click="searchData"><el-icon><Search /></el-icon></el-button>
      </template>
    </el-input>
    <el-button class="addbutton" type="primary" plain @click="addUserHandle">新增用户</el-button>  
    </div>
    <!-- 信息表格栏 -->
    <el-table :data="courseList" style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="title" label="Nick Name" width="180" />
    <el-table-column prop="teacherId" label="couch" width="180" />
    <el-table-column prop="subjectId" label="Subject" width="180" />
    <el-table-column prop="price" label="Price" />
    <el-table-column prop="lessonNum" label="Lesson Num" width="120"/>
    <el-table-column prop="commentCount" label="Criticle"/>
    <el-table-column prop="cover" label="Image" >
        <template #default="scope">
        <img class="img" :src="scope.row.cover"  alt="">
        </template>
    </el-table-column>
    <el-table-column prop="gmtCreate" label="Time" width="180" />
  </el-table>
  <el-pagination background layout="prev, pager, next,jumper,->,total" :total="total" />
    <addCourse :dialogVisible="dialogVisible"></addCourse>
</div>
    </div>
</template>
<script>
import {reactive,toRefs} from 'vue'
import {searchList} from "@/util/request"
import addCourse from "./component/addCourse.vue"
export default{
    name:"roles",
    setup() {
       const data = reactive({
        search:"",
        select:"",
        dialogVisible:true,
        courseList:[],
        total:0
       })
       const searchData=()=>{
        searchList(data).then(res=>{
            // console.log(res)
            data.courseList=res.data.rows
            data.total=res.data.total
        })
       }
       const addUserHandle=()=>{

       }
    //    方法初始化
    searchData()
        return{
            searchData,
            ...toRefs(data)
        }
    },
}
</script>
<style>
.detailInfo{
    background-color: #fff;
}
.input_box{
    display: flex;
    width: 90%;
    padding: 20px;
    margin-top: 10px;
}
.addbutton{
    margin-left:10px;
}
.img{
    width: 50px;
    height: 50px;
}
.el-pagination{
    padding: 20px 10px;
}
</style>