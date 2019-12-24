<template>
    <div class="bg">
        <TopContainer></TopContainer>
        <Tabs></Tabs>
        <div class="card">
            <div class="card_head">
                <p style="font-size: 14px;font-family: 幼圆;line-height: 45px">编辑我的资料</p>
            </div>
            <div class="card_body">
                <div>
                    <p style="margin-bottom: 10px">修改绑定电话：</p><input name="phone" v-model="modifyData.phone" placeholder="新的电话"/>
                </div>
                <div>
                    <p style="margin-bottom: 10px">修改绑定邮箱</p><input name="email" v-model="modifyData.email" placeholder="新的邮箱"/>
                </div>
                <div>
                    <p style="margin-bottom: 10px">我的签名：</p><input name="des" v-model="modifyData.des" placeholder="输入你的个性签名吧^_^" style="width: 300px;height: 100px"/>
                </div>
                <div style="text-align: center">
                <button @click="modify">保存修改</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Tabs from '../components/InfoCardPage/Tabs'
    import TopContainer from '../components/common/TopContainer'
    export default {
        components: {
            Tabs,
            TopContainer
        },
        data() {
            return {
                modifyData: {},
                form: {
                    phone: '',
                    email: '',
                    des: '',
                }
            }
        },

        methods: {
            modify() {
                if (!this.isLogin) {
                    alert("你还没有登录不能修改信息噢~")
                } else {
                    var url = "/api/modifyinfo";
                    var phone = this.modifyData.phone;
                    var email = this.modifyData.email;
                    var des = this.modifyData.des;
                    alert("保存成功！");
                    this.$http.post(url, {
                        phone: phone,
                        email: email,
                        des: des,
                        username: this.$cookies.get("username")
                    }, {}).then(function (data) {
                        alert("保存成功！");
                        console.log(data);
                    }, function (response) {
                        console.log(response);
                    })
                }
            }
        },
        mounted(){
            if (this.$cookies.get("username") != null && this.$cookies.get("password") != null) {
                // console.log(this.$cookies.get("username"), this.$cookies.get("password"));
                //改变登录状态
                this.isLogin = true;
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .bg {
        width: 100%;
        height: 100%;
        background-image url("../assets/images/m1_bg.jpg")
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

    .card {
        width 30%
        height 70%
        /*margin-top 50px*/
        margin-left 250px
        margin-top 30px
        border 1px #f6f6f6 solid
        box-shadow: 2px 6px 6px #dfdfdf;
        display flex
        flex-direction column
    }

    .card_head {
        width 80%
        height 10%
        margin 0 auto
        border-bottom 1px #e45686 solid
        text-align left
        color #e45686
    }

    input {
        width 60%
        height 30px
        border: none;
        outline: none;
        border-radius 5px
        background-color #f6f6f6
        padding-left 10px
        font-size 12px
    }

    .item {
        width 80%
        margin 20px auto
        text-align left
    }

    .item div {
        margin-bottom 20px
        width 100%
    }

    button {
        border none
        outline none;
        border-radius 5px
        background-color #f59db4
        margin 0 auto
        color #fff
        width 100px
        height 30px
    }
    .card_body div{
        width 80%
        font-size 14px
        margin 20px auto
        text-align left
    }
</style>