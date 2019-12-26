<template>
    <div class="bg">
        <TopContainer></TopContainer>
        <Tabs></Tabs>
        <div class="card">
            <div class="name">
                <img src="../assets/images/name.png"/>
                <p style="font-size: 18px;font-weight: bolder;line-height: 24px;margin-left: 20px">你好，{{this.username}}</p>
            </div>
            <div class="birth">
                <img src="../assets/images/birth.png"/>
                <p style="font-size: 12px;line-height: 24px;margin-left: 20px">{{this.birthday}}</p>
            </div>
            <div class="hobby">
                <img src="../assets/images/hobby.png"/>
                <p style="font-size: 12px;line-height: 24px;margin-left: 20px">{{this.hobby}}</p>
            </div>
            <div class="describe">
                <img src="../assets/images/describe.png"/>
                <p style="font-size: 12px;line-height: 24px;margin-left: 20px">{{this.des}}</p>
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
                username:"",
                birthday:"",
                hobby:"",
                des:"",
                isLogin: false,
            }
        },

        mounted() {

            if (this.$cookies.get("username") != null && this.$cookies.get("password") != null) {
                // console.log(this.$cookies.get("username"), this.$cookies.get("password"));
                //改变登录状态
                this.isLogin = true;
            }
            if(!this.isLogin){
                alert("你还没有登录没有个人信息的噢~");
            }else{
                var url = "/api/showinfo";
                this.$http.get(url, {
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
    .bg{
        width:100%;
        height:100%;
        background-image  url("../assets/images/show_bg.jpg")
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
    .card{
        width 40%
        height 65%
        margin 80px auto
        /*border 1px red solid*/
        background-color rgba(255,255,255,.8)
        box-shadow: 2px 6px 6px #dfdfdf;
        display flex
        flex-direction column
    }
    .card div{
        border-bottom  1px #b9b9b9 solid
        width 80%
        text-align left
        padding-left 20px
        padding-bottom 5px
        margin 20px auto 10px
        display flex
        flex-direction row
    }
    .card img{
        width 24px
        height 24px
    }
</style>