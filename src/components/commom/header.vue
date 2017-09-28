<template>
  <div id="header">
    <div class="header-content">
      <h1>Vue开发模板</h1>
      <ul>

        <router-link to="/home" tag="li" active-class="active-nav">首页</router-link>
        <router-link to="/data" tag="li" active-class="active-nav">数据展示</router-link>
        <router-link to="/message" tag="li" active-class="active-nav">消息展示</router-link>
        <router-link to="/scheme" tag="li" active-class="active-nav">方案</router-link>

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
    background: #009688 !important;
    width: 100%;
    height: 60px;
  }

  .header-content {
    width: 1000px;
    height: 60px;
    margin: 0 auto;
    position: relative;
  }

  .header-content h1 {
    color: #fff;
    height: 60px;
    line-height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 20px;
    font-weight: 600;
  }

  .header-content ul {
    margin-left: 200px;
    width: 80%;
    height: 60px;
    line-height: 60px;
    background: #009688 !important;
  }

  .header-content ul li {
    color: #fff;
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    float: left;
    text-align: center;
    border-bottom: 5px solid #009688;
    cursor: pointer;
  }

  .header-content ul .active-nav {
    border-bottom: 5px solid #5FB878;
  }

  .header-content ul li:hover {
    border-bottom: 5px solid #5FB878;
    transition: .3s;
  }

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
