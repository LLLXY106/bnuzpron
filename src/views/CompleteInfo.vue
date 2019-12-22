<template>
    <div>
    <TopContainer></TopContainer>
    <div class="bg">
        <div class="form_body">
            <div class="form_head">
                <p style="line-height: 28px;font-size: 18px;font-family: 幼圆">完善个人资料</p>
                <p style="line-height: 25px;font-family: -apple-system">- Modify your information -</p>
            </div>
            <div class="form_item">
                <div class="form_item_child">
                    <!--<p>修改用户名: </p>-->
                    <div><i class="fa fa-user-o" aria-hidden="true" style="font-size: 24px;margin-right: 5px"></i>
                        <input type="text" name="username" placeholder="请输入用户名" v-model="infoData.username"/>
                    </div>
                    <!--<p>你的生日: </p>-->
                    <div><i class="fa fa-table" aria-hidden="true" style="font-size: 24px;margin-right: 5px"></i>
                        <input type="date" name="birthday" placeholder="你的生日" v-model="infoData.birthday"/>
                    </div>
                    <!--<p>你的爱好: </p>-->
                    <div><i class="fa fa-heart-o" aria-hidden="true" style="font-size: 24px;margin-right: 5px"></i>
                        <input type="text" name="hobby" placeholder="你的爱好" v-model="infoData.hobby"/>
                    </div>
                    <!--<p>联系方式: </p>-->
                    <div><i class="fa fa-phone" aria-hidden="true" style="font-size: 24px;margin-right: 5px"></i>
                        <input type="text" name="phone" placeholder="联系方式" v-model="infoData.phone"/>
                    </div>
                    <!--<p>邮箱地址: </p>-->
                    <div><i class="fa fa-envelope-o" aria-hidden="true" style="font-size: 24px;margin-right: 5px"></i>
                        <input type="text" name="email" placeholder="邮箱地址" v-model="infoData.email"/>
                    </div>
                    <!--<div><i class="fa fa-envelope-o" aria-hidden="true" style="font-size: 24px;margin-right: 5px"></i>-->
                        <!--<input type="text" name="description" placeholder="个性签名" v-model="infoData.description"/>-->
                    <!--</div>-->
                    <div class="btn" @click="save">
                        <button>保存信息</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script type="text/javascript">
    import TopContainer from '../components/common/TopContainer'
    export default {
        components: {
            TopContainer
        },
        data(){
            return{
                infoData: {

                },
                form: {
                    username: '',
                    birthday: '',
                    hobby:'',
                    phone:'',
                    email:'',
                }
            }
        },
        methods:{
            save(){
                var url = "/api/userinfo";
                var username=this.infoData.username;
                var birthday= this.infoData.birthday;
                var hobby=this.infoData.hobby;
                var phone=this.infoData.phone;
                var email=this.infoData.email;
                console.log("url");
                alert("保存成功！");
                this.$http.post(url, {
                    username: username,
                    birthday: birthday,
                    hobby:hobby,
                    phone:phone,
                    email:email
                }, {}).then(function (data) {
                    alert("保存成功！");
                    console.log(data);
                }, function (response) {
                    console.log(response);
                })
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .bg{
        width:100%;
        height:100%;
        background-image  url("../assets/images/m_bg.jpg")
        background-size cover
        background-repeat repeat
        background-position center 0
        position fixed
        top 0
        left 0
        min-width 1000px
        z-index -10
        zoom 1
    }
    .form_body{
        width 35%
        height 500px
        /*border 1px red solid*/
        margin 70px auto
        background-color rgba(255,255,255,.6)
        -moz-box-shadow: 2px 2px 8px #909090;
        -webkit-box-shadow: 2px 2px 8px #b9b9b9;
        box-shadow: 2px 8px 8px #dfdfdf;
    }
    .form_head{
        width 100%
        height 12%
        /*border 1px red solid*/
        border-bottom 1px #d4d4d4 solid
    }
    .form_item{
        width 80%
        height 80%
        text-align left
        margin 30px auto 0
    }
    .form_item_child div{
        display flex
        flex-direction column
    }
    input{
        width 100%
        height 30px
        border: none;
        outline: none;
        border-radius 5px
        /*background-color #f6f6f6*/
        padding-left 10px
        font-size 12px
    }
    .form_item p{
        margin 10px 10px
    }
    .form_item div{
        display flex
        flex-direction column
        margin-bottom  30px
        /*border 1px red solid*/
    }
    .form_item_child div{
        display flex
        flex-direction row
    }
    button{
        border: none;
        outline: none;
        background: linear-gradient(left ,#5CADAD,#408080);
        margin 0 auto
        width 300px
        height 30px
        border-radius 5px
    }
</style>