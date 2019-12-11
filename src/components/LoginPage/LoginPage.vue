<template>
    <div class="main_body">
        <div class="bg"></div>
        <div class="login_body">
            <div class="login_form">
                <div class="name">手机/昵称/邮箱<input type="text"  class="userName" id="userName" placeholder="用户名" v-model="userName"></div>
                <!--<span>{{userName}}</span>-->
                <div class="pwd">请输入密码<input type="password"  class="passWord" id="passWord" placeholder="密码" v-model="password"></div>
                <!--<span>{{password}}</span>-->
                <span class="forget">忘记密码?</span>
                <button class="login_btn" v-on:click="login" round :loading="isBtnLoading">登录</button>
                <div class="icon">
                        <i class="fa fa-wechat" style="color: #00ad19;font-size: 24px;margin-top: 30px;margin-right: 30px"></i>
                        <i class="fa fa-qq" style="color: #0078d7;font-size: 24px;margin-right: 30px"></i>
                        <i class="fa fa-weibo" style="color: #ea4335;font-size: 24px"></i>
                </div>
                <div class="hint" style="font-size: 14px;color: #979797;margin-top: 15px;margin-bottom: 10px">- 第三方登录 -</div>
                <div class="registered"><a href="/registerPage" style="font-size: 14px;color:palevioletred;margin-left:260px">还没有账号?立即注册</a></div>
            </div>
            <div class="QRcode_body">
                <div class="QRcode_img">
                    <img src="../../assets/images/QRcode.png"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userName: '',
                password: '',
                isBtnLoading: false
            }
        },
        created () {
            if(JSON.parse(localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
                this.userName = JSON.parse( localStorage.getItem('user')).userName;
                this.password = JSON.parse( localStorage.getItem('user')).password;
            }
        },
        computed: {
            btnText() {
                if (this.isBtnLoading) return '登录中...';
                return '登录';
            }
        },
        methods: {
            login() {
                if(this.userName!="" && this.password!=""){
                    return;
                }else{
                    alert("用户名或密码不能为空！");
                    return;
                }
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .bg{
        width:100%;
        height:155px;
        background: url("../../assets/images/header2.png") no-repeat top;

    }
    .login_body{
        display flex
        flex-direction row
        height 440px
        /*border 1px red solid*/
    }
    .login_form{
        display flex
        flex-direction column
        width 50%
        height 430px
        border 1px #ffe7ec solid
        margin-top 10px
        margin-left 40px
        border-radius 10px
    }
    .name{
        margin-top 15%
        margin-bottom 5%
    }
    .userName{
        margin-left 5px
        border: 1px solid #ccc
        padding: 7px
        border-radius: 7px
        padding-left:5px;
    }
    .pwd{
        margin-left 25px
        margin-bottom 20px
    }
    .passWord{
        margin-left 5px
        border: 1px solid #ccc;
        padding: 7px 0px;
        border-radius: 7px;
        padding-left:5px;
    }
    .forget{
        font-size 12px
        color #979797
        margin-left 270px
        margin-bottom 15px
        cursor pointer
    }
    .login_btn{
        width 300px
        height 30px
        margin-left 180px
        cursor pointer
        color #fff
        border none
        border-radius: 7px
        background-color #59bde9
        font-size 16px
        display inline-block
    }
    .QRcode_body{
        width 45%
        height 440px
        /*border 1px blue solid*/
    }
    .QRcode_img{
        width 500px
        height 400px
        /*border 1px blue solid*/
        margin-top 40px
    }
    .QRcode_img img{
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }
    .icon{
        width 60%
        border-bottom  1px #f6f6f6 solid
        padding-bottom 20px
        margin 0 auto
    }
</style>
