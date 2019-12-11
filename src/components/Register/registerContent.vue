<template>
  <div class="container">
    <form @submit.prevent="register" method="post">
      <!-- 输入用户名 -->
      <div class="commonLine">
        <div class="commonInput">
          <input type="text" name="username" placeholder="请输入用户名" id="username" class="inputStyle"  v-model="regData.username">
        </div>
      </div>
      <!-- 间隔行 -->
      <div class="hiddenLine"></div>
      <!-- 输入密码 -->
      <div class="commonLine">
        <div class="commonInput">
          <input type="password" name="password" placeholder="请输入密码" id="password" class="inputStyle"  v-model="regData.password">
        </div>
      </div>
      <!-- 间隔行 -->
      <div class="hiddenLine"></div>
      <!-- 确认密码 -->
      <div class="commonLine">
        <div class="commonInput">
          <input type="password" name="passwordCheck" placeholder="请再次输入密码" id="passwordCheck" class="inputStyle"  v-model="regData.checkpsw">
        </div>
      </div>
      <!-- 间隔行 -->
      <div class="hiddenLine"></div>
      <div class="commonLine">
        <div class="commonInput">
          <input type="submit" class="btn-primary" value="注册">
        </div>
      </div>
      <!-- 已有账户？点击登录 -->
      <div class="commonLine">
        <a href="/LoginPage" class="jump2Login">已有账户？点击登录</a>
      </div>
      <div>{{msg}}</div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'registerContent',
  data() {
    return {
      msg: '',
      regData: {

      },
      form: {
        username: '',
        password: '',
        
      }
    }
  },
  methods: {
    //提交事件
    register:function() {
      var username = this.regData.username;
      var password = this.regData.password;
      if(password != this.regData.checkpsw) {
        alert("两次输入密码不正确");
        this.regData.username = "";
        this.regData.password = "";
        this.regData.checkpsw = "";
      }else{
        var url = "/api/register";
        this.$http.post(url, {
          username: username,
          password: password
        },{}).then(function(data){
          console.log("注册成功",data.body);
          if(data.body.affectedRows>0){
            alert("注册成功");
            window.location.href = "/LoginPage";
          }
        },function(response){
          console.log(response);
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    width 980px
    margin 0 auto 
    padding 60px 0
    .commonLine
      width 420px
      margin 0 auto 
      font-size 12px
      position relative
      .commonInput
        width 100%
        font-size 14px
        display inline-block
        position relative
        .inputStyle
          width 388px
          height 40px
          line-height 40px
          padding 0 15px
          border-radius 4px
          display inline-block
          border 1px solid gray 
          font-size inherit
        .btn-primary
          width 420px
          height 40px
          line-height 40px
          font-size 14px
          padding 0 15px
          border-radius 4px
          background-color #33b4de
          display inline-block
          cursor pointer
          border 1px solid gray 
        .btn-primary:hover
          background-color #B0E2FF
    .hiddenLine
      width 420px
      height 40px
      margin 0 auto
    .jump2Login
      width 100%
      height 40px
      line-height 40px
      float right
    .jump2Login:hover
      color: blue
</style>