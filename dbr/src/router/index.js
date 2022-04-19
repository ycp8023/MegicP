import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import user from "@/store/user"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/center',
    name: 'Center',
    component: () => import(/* webpackChunkName: "about" */ '../views/Center.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/models',
    name: 'Models',
    component: () => import(/* webpackChunkName: "about" */ '../views/Models.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 判断访问页面若需要登录且当前未登录，则拦截至登录路由
router.beforeEach((to,from, next) => {
  // 通过Vuex获取用户登录信息
  const userInfo =user.getters.getUser(user.state());

  // 若前往的是登录路由，则保存当前路由到 preRoute 的键值对中，以便登录成功后跳转
  if (to.path === '/login'){
    localStorage.setItem("preRoute",router.currentRoute.fullPath);
  }
  // 若用户未登录且访问的页面需要登录，则跳转至登录页面
  if(!user.userInfo && to.meta.requireAuth) {
    next ({
      name:'Login',
    })
  }
  next()
})

export default router
