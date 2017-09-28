<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  //重置样式
  import  './assets/css/base.css'
  //动画样式
  import  './assets/css/animate.min.css'
  //hover样式
  import  './assets/css/hover.css'
  export default {
    name: 'app'
  }
</script>

<style scoped>
  body {
    width: 100%;
    height: 100% !important;
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100%;
    /*min-height: 100%;*/
    height: 100%;
    background: transparent;
    min-width: 1100px;
  }
</style>
