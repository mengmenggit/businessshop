<template>
     <div class="common-layout">
    <el-container>
      <el-header class="flex-float">
      <div class="flex">
        <img class="logo" src="@/assets/logo.png" alt="">
        <h4>商铺管理系统</h4>
      </div>
      <el-button type="info" plain @click="loginOut">退出</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">
           <el-menu
           background-color="none"
           text-color="#fff"
           :router="true"
           >
            <el-sub-menu index="1">
                <template #title>
                    <el-icon><User /></el-icon>
                <span>角色管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/abc">角色列表</el-menu-item>
          </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon><MessageBox /></el-icon>
                <span>账号管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/efg">账号列表</el-menu-item>
          </el-menu-item-group>
            </el-sub-menu>
           </el-menu>
        </el-aside>
        <el-main>
            <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import store from '@/store'
import {useStore} from "vuex"
import {useRouter} from "vue-router"
import {reactive,toRefs} from 'vue'
export default{
    name:'layout',
    setup(){
        const store = useStore()
        const router = useRouter()
        const data = reactive({

        })
        const loginOut=()=>{
          localStorage.removeItem("loginData")
          store.commit('setUserInfo',{});
          router.push({path:'/login'})
        }
        return{
            ...toRefs(data),
            loginOut
        }
    }
}
</script>
<style scoped>
.el-header{
    background: rgb(83, 82, 82);
    display: flex;
    padding: 0 20px 0 20px;
    align-items: center;
}
.el-aside{
    display: flex;
    flex-direction: column;
    background: rgb(83, 82, 82);
}
.el-aside a{
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #ffffff;
    text-decoration: none;
}
.el-aside a:hover{
    background-color: rgb(44, 44, 44);
}
.el-container{
    height: 100vh;
    overflow: hidden;
}
.el-main{
    background-color: #E9EEF3;
}
.logo{
    width: 30px;
    height: 30px;
}
</style>