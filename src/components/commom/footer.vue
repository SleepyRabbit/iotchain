
<template>
  <div id="footer" >
    <p>我是尾部</p>

  </div>

</template>
<script>
  export default {
    name: 'Footer',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style scoped type="text/scss" lang="scss">
  #footer{
    height: 60px;
    width: 100%;
    background: #009688!important;

  }
  #footer p{
    text-align: center;
    color:#fff;
    line-height: 60px;
  }

</style>

