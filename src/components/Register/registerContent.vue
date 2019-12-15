<template>
  <div class="container">
    <form  @submit.prevent="register"  method="post">
      <!-- <form method="post"> -->
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
          <input type="submit" @click="checkUsername()" class="btn-primary" value="注册">
          <!-- <input type="submit" class="btn-primary" value="注册"> -->
        </div>
      </div>
      <!-- 已有账户？点击登录 -->
      <div class="commonLine">
        <a href="/LoginPage" class="jump2Login">已有账户？点击登录</a>
      </div>
      <!-- <div>{{msg}}</div> -->
    </form>
  </div>
</template>


<script>
//导入全局文件
import global from '../common/Global'
export default {
  name: 'registerContent',
  data() {
    return {
      status: global.status, //用户名是否被注册状态判定
      regData: {

      },
      form: {
        username: '',
        password: '',
        
      }
    }
  },
  methods: {
    //检测用户名是否被注册
    checkUsername() { 
      var username = this.regData.username;
      var url = "/api/checkUsername";
      this.$http.post(url, {
        username: username,
      },{}).then(function(data){
        let content = data.body.length;
        // var content = data.body[0].length;
        console.log("this is content: " + content);
        if(content != 0) {
          alert("用户名已被注册");
          console.log("this is status2:" + status);
          this.regData.username = "";
          this.regData.password = "";
          this.regData.checkpsw = "";
        } else {
          status = 1;
          console.log("this is status3:" + status);
        }
      },function(response){
        console.log(response);
      })
    },
    //注册事件
    register:function() {
      var username = this.regData.username;
      var password = this.regData.password;
      if(password != this.regData.checkpsw) {
        //判断两次密码输入是否一致
        alert("两次输入密码不正确");
        this.regData.username = "";
        this.regData.password = "";
        this.regData.checkpsw = "";
      } else {
        if(status) {
          var url = "/api/register";
          console.log(url);
          status = 1;
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