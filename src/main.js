// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入iview组件库
import iview from 'iview'
import 'iview/dist/styles/iview.css';
//引入layui_hxl
import 'layui_hxl/lib/css/layui.css'



Vue.use(iview)
Vue.config.productionTip = false



// 路由跳转加载 进度条

router.beforeEach((to, from, next) => {
  iview.LoadingBar.config({
    color: '#07C5ED',
    failedColor: '#f0ad4e',
    height: 3
  });
  iview.LoadingBar.start();
  next();

});

router.afterEach((to, from, next) => {
  iview.LoadingBar.finish();
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  methods: {
    //监测路由变化后对页面的一些检测
    changeInit() {
      /*
       * 1.路由跳转后页面，新开页面回到顶部
       * */
      window.scrollTo(0, 0);
    }
  },
  watch: {
    "$route": 'changeInit'
  },
});

