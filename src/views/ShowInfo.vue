<template>
    <div class="bg">
        <TopContainer></TopContainer>
        <Tabs></Tabs>
        <div class="card" style="background-color: #f6f6f6">
            <div class="head" style="width: 100%;height: 90px;">
                <img :src="this.photo"
                     style="width: 70px;height: 70px;border-radius: 35px;margin: 50px auto 0px;border: 4px white solid"/>
            </div>
            <div class="name" style="margin: 30px auto 0">
                <!--<img src="../assets/images/name.png"/>-->
                <p style="font-size: 16px;font-weight: bolder;line-height: 24px;margin: 10px auto 0;text-align: center">
                    你好，{{this.username}}</p>
            </div>
            <div style="margin: 0 auto;border: 1px #f6f6f6 solid;padding-left: 70px;padding-right: 70px;padding-bottom: 20px;background-color: white;border-radius: 8px">
                <div class="describe" style="text-align: center;margin: 10px auto 20px;display: flex;flex-direction: row">
                    <img src="../assets/images/describe.png" style="width: 20px;height: 20px;margin-right: 10px"/>
                    <p style="font-size: 12px;line-height: 24px;color: #979797">{{this.des}}</p>
                </div>
                <div class="birth" style="text-align: center;margin: 10px auto 20px;display: flex;flex-direction: row">
                    <img src="../assets/images/birth.png" style="width: 20px;height: 20px;"/>
                    <p style="font-size: 12px;line-height: 24px;margin-left: 20px">我的破壳日：{{this.birthday}}</p>
                </div>
                <div class="hobby" style="text-align: center;margin: 10px auto 20px;display: flex;flex-direction: row">
                    <img src="../assets/images/hobby.png" style="width: 20px;height: 20px;"/>
                    <p style="font-size: 12px;line-height: 24px;margin-left: 20px">我的个人爱好：{{this.hobby}}</p>
                </div>
                <p style="font-size: 12px;color: #f57097">您已成功绑定邮箱</p>
                <p style="font-size: 10px;color: #979797;">{{this.email}}</p>
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
                username: "",
                birthday: "",
                hobby: "",
                des: "",
                photo: "",
                email:"",
                isLogin: false,
            }
        },

        mounted() {

            if (this.$cookies.get("username") != null && this.$cookies.get("password") != null) {
                // console.log(this.$cookies.get("username"), this.$cookies.get("password"));
                //改变登录状态
                this.isLogin = true;
            }
            if (!this.isLogin) {
                alert("你还没有登录没有个人信息的噢~")
            } else {
                var url = "/api/showinfo";
                this.$http.post(url, {
                    username: this.$cookies.get("username")
                }, {}).then(function (data) {
                    // alert(data.body[0].username);
                    this.username = data.body[0].username;
                    this.birthday = (data.body[0].birthday).substring(0, 10);
                    this.hobby = data.body[0].hobby;
                    this.des = data.body[0].des;
                    this.photo = data.body[0].photo;
                    this.email = data.body[0].email;
                    this.$cookies.set("photo", this.photo);
                    // alert("修改成功！");
                    console.log(data.body);
                }, function (response) {
                    console.log(response);
                })
            }
        },
    }
</script>
<style lang="stylus" scoped>
    .bg {
        width: 100%;
        height: 100%;
        background-image url("../assets/images/s_bg.jpg")
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
        width 60%
        height 400px
        margin 50px auto
        /*border 1px red solid*/
        background-color rgba(255, 255, 255, .8)
        box-shadow: 2px 6px 6px #dfdfdf;
        display flex
        flex-direction column
    }

    .card img {
        width 24px
        height 24px
    }

    .head {
        background-image url("../assets/images/s_head.jpg")
    }
</style>