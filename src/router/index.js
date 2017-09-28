import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component:  resolve => require(['@/components/index'], resolve),
      redirect: '/home',
      children:[
        // 首页
        {
          path: '/home',
          component:  resolve => require(['@/components/home/index'], resolve)
        },
        // 信息
        {
          path: '/message',
          component:  resolve => require(['@/components/message/index'], resolve)
        },
        // 数据
        {
          path: '/data',
          component:  resolve => require(['@/components/data/index'], resolve)
        },
        // 方案
        {
          path: '/scheme',
          component:  resolve => require(['@/components/scheme/index'], resolve)
        }

      ]
    },
    {
      path: '/login',
      component:  resolve => require(['@/components/login/index'], resolve),

    },
    {
      path:"*",
      component:resolve => require(['@/components/commom/Page404'],resolve)
    }
  ]
})
