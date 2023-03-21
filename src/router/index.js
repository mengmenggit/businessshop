import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
// 哈希路由和历史路由模式
import Layout from '../views/Layout/Layout'
import store from '../store/index.js'

const routes = [
  // 登陆页面
  {
    path:'/login',
    name:'login',
    component:()=>import("../views/Login/Login")
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect:'/abc',
    children:[
      {
        path:'/userList',
        name:'userlist',
        component:()=>import('../views/Layout/userList.vue')
      },
      {
        path:'/abc',
        name:'abc',
        component:()=>import('../views/Abc/ABC.vue')
      },
      {
        path:'/efg',
        name:'efg',
        component:()=>import('../views/EFG/EFG.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]
// 生成hash路由对象
const router = createRouter({
  history: createWebHistory(),
  routes
})
// router.beforeEach((to,from,next)=>{
// // to:从哪个页面？ from：到页面？ next:将要去页面？
// // 判断用户是否登录
// const uInfo = store.state.uInfo.userInfo
// // console.log("store",uInfo)
// if(!uInfo.userName){
//   if(to.path==="/login"){
//     next()
//     return
//   }
//   next("/login")
// }else{
//   next()
// }
// })
// 暴露路由对象
export default router
