<template>
  <div id="header">
    <div class="header-content">
      <img class="animated bounceInLeft" src="../../assets/imgs/page404.png" alt="" width="60" height="48">
      <ul class="animated bounceInDown">
        <router-link to="/home" tag="li" class="hvr-underline-from-center">首页</router-link>
        <router-link to="/data" tag="li" class="hvr-underline-from-center">数据展示</router-link>
        <router-link to="/message" tag="li" class="hvr-underline-from-center">消息展示</router-link>
        <router-link to="/scheme" tag="li" class="hvr-underline-from-center">方案</router-link>
      </ul>
      <div id="login-re">
        <router-link to="/login">登录</router-link>
        <a href="javascript:;" @click="layOut">注销</a>

      </div>

    </div>

  </div>

</template>
<script>
  export default {
    name: 'Header',
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      layOut(){
      	this.$router.push({path:"/login"})

      }
    },
    mounted () {
    }
  }
</script>
<style scoped type="text/scss" lang="scss">
  #header {
    background: rgb(57, 82, 122) !important;
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 999;
  }

  .header-content {
    width: 90%;
    height: 60px;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
  }

  .header-content h1 {
    color: #fff;
    height: 60px;
    line-height: 60px;
    // position: absolute;
    // top: 0;
    // left: 0;
    font-size: 20px;
    font-weight: 600;
  }

  .header-content ul {
    margin-left: 200px;
    width: 80%;
  }

  .header-content ul li {
    color: #fff;
    padding: 0 20px;
    height: 50px;
    line-height: 60px;
    float: left;
    text-align: center;
    cursor: pointer;
  }

  // .header-content ul .active-nav {
  //   border-bottom: 5px solid #5FB878;
  // }

  // .header-content ul li:hover {
  //   border-bottom: 5px solid #5FB878;
  //   transition: .3s;
  // }

  .header-content #login-re {
    position: absolute;
    top: 0;
    right: 0;
  }

  .header-content #login-re a {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    margin-left: 15px;
    color: #fff;
    font-size: 14px;
  }
</style>
