<template>
  <div class="container">
    <form>
      <div class="commonLine">
        <div class="commonInput">
          <input type="text" name="username" placeholder="请输入用户名" id="username" class="inputStyle">
        </div>
      </div>
      <!-- 间隔行 -->
      <div class="hiddenLine"></div>
      <div class="commonLine">
        <div class="commonInput">
          <input type="password" name="password" placeholder="请输入密码" id="password" class="inputStyle">
        </div>
      </div>
      <!-- 间隔行 -->
      <div class="hiddenLine"></div>
      <div class="commonLine">
        <div class="commonInput">
          <input type="password" name="passwordCheck" placeholder="请再次输入密码" id="passwordCheck" class="inputStyle">
        </div>
      </div>
      <!-- 间隔行 -->
      <div class="hiddenLine"></div>
      <div class="commonLine">
        <button type="button" class="btn-primary" @click="register">注册</button>
      </div>
      <!-- 已有账户？点击登录 -->
      <div class="commonLine">
        <a href="" class="jump2Login">已有账户？点击登录</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'registerContent',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    register:function() {
      var username = $("#username").val();
      var password = $("#password").val();
      var checkpwd = $("#passwordCheck").val();
      console.log(username,password);
      if(username == "" || password == "" || checkpwd == "") alert("请将信息补充完整");
      else if(password != checkpwd) alert("两次输入的密码不一致");

    },
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
    .hiddenLine
      width 420px
      height 40px
      margin 0 auto
    .btn-primary
      width 100%
      height 40px
      font-size 14px
      border-radius 4px
      background-color #87CEFF
    .btn-primary:hover
      background-color #B0E2FF
    .jump2Login
      width 100%
      height 40px
      line-height 40px
      float right
</style>