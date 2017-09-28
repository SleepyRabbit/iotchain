<style scoped type="text/scss" lang="scss">
  #index-wrap{
    background: #eeeeee;
    #product-content {
      width: 1000px;
      min-height: 600px;
      background: transparent;
      margin: 0 auto;
      /*border:1px solid #ffffff;*/
    }
  }


</style>
<template>
  <div id="index-wrap">

    <!--头部-->
    <v-header></v-header>
    <div style="height: 20px;"></div>
    <div id="product-content" >

      <router-view></router-view>
    </div>
    <div style="height: 20px;"></div>
    <!--尾部-->
    <v-footer></v-footer>

  </div>

</template>
<script>

  //引入通用头组件和尾组件
  import vHeader from "./commom/header"
  import vFooter from "./commom/footer"


  export default {
    data () {
      return {
        msg: ""

      }
    },
    components: {
      vHeader, vFooter
    }

  }
</script>
