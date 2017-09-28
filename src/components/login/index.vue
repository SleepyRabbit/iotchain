<style type="text/scss" scoped lang="scss">
  body {
    width: 100%;
    height: 100%;
  }

  #login {
    width: 100%;
    height: 100%;
    min-width: 1100px;
    background: url("../../assets/imgs/login-background.jpg") no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;

    .login-form-content {
      position: relative;
      width: 1100px;
      min-height: 600px;
      margin: 0 auto;
      .login-form {
        position: absolute;
        right: 0;
        top: 150px;
        padding: 20px;
        width: 300px;
        height: 300px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
        border: 1px solid rgba(255, 255, 255, .2);
        background-clip: padding-box;
        background: rgba(0, 0, 0, .2);
        border-radius: 2px;
        h2 {
          font-weight: 600;
          font-size: 20px;
          text-align: center;

        }

      }

    }

  }

</style>
<template>
  <div id="login">

    <div class="login-form-content">
      <div class="login-form animated jello">
        <h2>登 录</h2>
        <div style="height: 10px;"></div>
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <div style="height: 10px;"></div>
          <FormItem>
            <Button style="width: 100%;background:#009688;" type="primary" @click="handleSubmit('formInline')">登录
            </Button>
          </FormItem>
        </Form>

      </div>

    </div>


  </div>
</template>
<script>

  export default ({
    data () {

      //自定义的验证规则
      const checkUsername = (rule, value, callback) => {

        if (!value) {

          return callback(new Error('用户名不能为空'));

        }
        setTimeout(() => {

          if (!/^[a-z][a-z\d]{4,14}$/.test(value)) {

            callback(new Error('用户名为5-15位数字、字母组成'));

          } else {

            callback();

          }

        }, 200);

      };

      //      验证密码的正则
      const checkPassword = (rule, value, callback) => {

        if (!value) {

          return callback(new Error('密码不能为空'));

        }
        setTimeout(() => {

          if (!/^[a-z][a-z\d]{4,14}$/.test(value)) {

            callback(new Error('密码为5-15位数字、字母组成'));

          } else {

            callback();

          }

        }, 200);

      };


      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            {required: true, message: '请填写用户名', trigger: 'blur'},
            {validator: checkUsername, trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {validator: checkPassword, trigger: 'blur'}
          ]
        }
      }

    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Notice.success({
              title: "登陆成功",
              duration: 1
            });

            this.$router.push({path: "/home"})

          } else {
            //提示信息
            this.$Notice.error({
              title: "请输入正确的用户信息",
              duration: 1
            })
          }
        })
      },
      keyUpEnter: function () {
        const _this = this;
        document.onkeypress = function (event) {
          if (event.which == 13) {
            _this.handleSubmit('formInline')
          }
        }
      }
    },
    mounted () {

    },
    created (){
      //键盘事件
      this.keyUpEnter();
    }
  })

</script>
