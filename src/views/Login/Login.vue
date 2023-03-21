<template>
    <div id="login">
        <main>
            <h2>茶都商城</h2>
            <ul>
                <li><label htmlFor="">电话号</label><input v-model="loginData.phone" type="text" placeholder="请输入电话号" /></li>
                <li><label htmlFor="">密码</label><input type="text" placeholder="请输入密码" v-model="loginData.password" /></li>
                <li><el-button type="primary" class="loginBtn" :loading="loginData.loginBtnStatus" @keydown.enter="login" @click="login">登录</el-button> </li>
            </ul>
        </main>
    </div>
</template>
<script>


import {reactive,toRefs} from 'vue'
import {useStore} from "vuex"
import {useRouter} from "vue-router"
import {loginApi} from "@/util/request"
export default {
    name:'login',
    setup(){
        const store = useStore()
        const router = useRouter()
        const count = store.state.number.count
        const data=reactive({
            loginData:{
                phone:'',
                password:'',
                loginBtnStatus:false
            },
            num:count
        })
        console.log("修改前getters",store.getters["number/countStatus"])
        const login=()=>{
            // 请求后台接口
            router.push({
                path:"/"
            })
            // loginApi(data.loginData).then(res=>{
                // console.log(res)
            //     if(res.code===20000){
            // store.commit('setUserInfo',data.loginData)
            // localStorage.setItem("loginData",JSON.stringify(data.loginData))
            // router.push({
            //     path:"/"
            // })
            //     }else{
            
            //     }
            // })

            console.log("修改后getters",store.getters["number/countStatus"])
            // this.$router.push({path:'/layout'})
        }
        return{
            ...toRefs(data),
            login
        }
    },
    methods:{

    }
}
</script>
<style scoped>
#login {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    background: url(../../assets/images/tea.jpg);
    background-size: 100% 100%;
}

#login main {
    width: 540px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
}

#login main h2 {
    color: rgb(12, 87, 5);
    margin-bottom: 20px;
    text-align: center;
}

input {
    border: none;
    outline: none;
    padding-left: 10px;
}

li {
    list-style: none;
}

#login h2 {
    color: white;
    text-align: center;
    line-height: 40px;
    /* background-color: lavender; */
}

#login ul li label {
    display: inline-block;
    width: 70px;
    /* label 对齐 */
    text-align: justify;
    text-align-last: justify;
}

#login ul {
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    width: 450px;
    height: 250px;
    /* border: 1px solid #ffffff; */
    color: white;
}

#login ul li {
    line-height: 60px;
    text-align: center;
}

#login ul li input {
    margin-left: 10px;
    height: 30px;
    width: 70%;
}

#login .el-button {
    height: 40px;
    width: 90%;
    background-color: rgb(12, 87, 5);
    color: #ffffff;
    border: black 2px solid;
    outline: none;
    cursor: pointer;
}

.varify {
    display: flex;
    width: 100%;
    align-items: center;
    padding-left: 20px;
    box-sizing: border-box;
}

.varify lable {
    flex: 3;
}

.varify input {
    flex: 3;
    width: 50%;
}

.varify span {
    flex: 4;
    display: inline-block;
    background-color: azure;
}
</style>