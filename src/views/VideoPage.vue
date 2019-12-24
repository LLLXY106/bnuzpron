<template>
    <div style="font-family: 幼圆">
        <TopContainer></TopContainer>
        <div class="bg">
            <div class="dim"><p STYLE="font-size:44px;font-weight: bolder;line-height: 110px;letter-spacing:10px;">
                热门视频</p>
                <p STYLE="font-size:16px;letter-spacing:4px;">POPULAR VIDEO</p></div>
        </div>
        <Navbar></Navbar>
        <div class="main">
            <div class="content">
                <div class="video" style="text-align: left;font-size: 18px;box-shadow: 0px 2px 3px 2px rgba(205, 205, 205, 0.64);">
                    <div style="margin: 15px auto;">
                        <a style="font-weight: bold">{{title}}</a>&nbsp;
                        <a>{{area}}&nbsp;>&nbsp;{{type}}</a>
                        <button style="width:70px;height:18px;margin-left:30px;cursor:pointer;font-size: 12px;border:none;outline:none;border-radius:5px;background-color:#f59db4;color:#fff">点我收藏</button>
                    </div>
                    <Video></Video>
                </div>
                <div class="intro">
                    <div style="width:20%;padding-left: 10px;border:1px #f6ce7e solid;border-radius: 5px;margin: 10px">
                        <el-rate
                                v-model="value"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                        </el-rate>
                    </div>
                    <div style="padding: 10px"><p style="text-align: left">{{this.introduce}}</p></div>
                </div>
                <div class="other">
                    <div class="comment">
                        <div class="comment_head" style="font-size: 14px">
                            <p style="margin: 20px 0px;font-size: 16px;color: #fa8580;font-weight: bold">{{this.comment.length}}评论</p>
                            <span style="vertical-align: top">我的评论：</span>
                            <textarea type="text" v-model="textarea" style="font-size: 14px;border:0;border-radius:5px;background-color:rgba(242,242,242,0.98);width: 100%;height: 60px;padding: 10px;resize: none;"></textarea>
                            <button @click="submit">提交评论</button>
                            <!--<hr style="height:10px;border:none;border-top:10px groove skyblue; margin-top: 5px"/>-->
                            <hr>
                            <p style="font-size: 16px;margin:10px auto;font-weight: bold;color: #737373">全部评论：</p>
                        </div>
                        <!--<div ><button @click="getComment">test</button>展开评论</div>-->
                        <div class="comment_body" v-for="(items,index) in comment" v-if="items.fatherfloor==0">
                            <div class="left">
                                <div class="head_img" style="margin: 10px 0">
                                    <img src="/img/PersonalCenter/head.jpg" style="width: 50px;height: 50px"/>
                                </div>
                                <div style="margin-bottom: 10px">{{items.username}}</div>
                            </div>
                            <div class="right">
                                <div class="comment_content">
                                    <p style="text-align: left;margin-top: 15px;font-size: 14px;line-height: 24px">
                                        {{items.comment}}
                                    </p>
                                    <div>
                                        <i class="fa fa-commenting-o" aria-hidden="true"
                                           style="color:rgb(188,188,188);margin-right: 8px;cursor:pointer;"
                                           @click="toggle(index)"><span style="margin-left: 10px;font-size: 12px;color: #409EFF">全部回复</span></i>
                                    </div>
                                </div>
                                <div>
                                    <transition name="fade">
                                        <div v-show="items.isshow" style="padding-left: 10px;">
                                            <div v-for="i in comment" v-if="i.fatherfloor==1&&i.floor==items.floor" style="background-color: #f6f6f6;border-radius: 5px;margin-bottom: 10px;padding: 5px">
                                                <span style="color:#f57097">{{i.username}}</span> : {{i.comment}}
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="recommend">
                        <div style="margin:10px auto;font-size: 16px;font-weight: bolder">推荐视频</div>
                        <div class="item">
                            <ul class="menu">
                                <li><img src="/img/PersonalCenter/1.jpg" style="width: 70%;height: 10%">
                                    <div style="text-align: left;margin: 0 auto;width: 70%;color: #979797;font-size: 12px">
                                        <p>【天气之子】新海诚新作天气之子（Weathering with you 天気の子） 的特别长剪</p>
                                    </div>
                                </li>
                                <li><img src="/img/PersonalCenter/2.jpg" style="width: 70%;height: 10%">
                                    <div style="text-align: left;margin: 0 auto;width: 70%;color: #979797;font-size: 12px">
                                        <p>看完天气之子，我被这首歌洗脑了！简直有毒！！</p>
                                    </div>
                                </li>
                                <li><img src="/img/PersonalCenter/3.jpg" style="width: 70%;height: 10%">
                                    <div style="text-align: left;margin: 0 auto;width: 70%;color: #979797;font-size: 12px">
                                        <p>【官方】《天气之子》主题曲《爱能做到的还有什么》MV（演唱：RADWIMPS）</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import TopContainer from '../components/common/TopContainer'
    import Navbar from '../components/HotPage/Navbar'
    import Video from '../components/VideoPage/Video'

    export default {
        name: "VideoPage",
        data() {
            return {
                id: this.$route.query.id,
                title: '',
                area: '',
                type: '',
                comment: [],
                value: 3.5,
                textarea: '',
                isLogin: false
            }
        },

        components: {
            TopContainer,
            Navbar,
            Video
        },

        methods: {
            // 获取评论
            getComment() {
                var url = "/api/getVideoComment";
                this.$http.get(url, {
                    params: {
                        id: this.id
                    }
                }, {}).then(function (data) {
                    console.log(data.body);
                    this.comment = data.body;
                }, function (response) {
                    console.log(response);
                })
            },
            // 获取视频数据
            getVideo() {
                var url = "/api/getVideo";
                this.$http.get(url, {
                    params: {
                        id: this.id
                    }
                }, {}).then(function (data) {
                    console.log(data);
                    this.title = data.body[0].title;
                    this.area = data.body[0].area;
                    this.type = data.body[0].type;
                    this.introduce = data.body[0].introduce;
                }, function (response) {
                    console.log(response);
                })

                var url2 = "api/addPlay";
                this.$http.get(url2, {
                    params: {
                        id: this.id
                    }
                })
            },

            // 让隐藏的楼中楼显示
            toggle(index) {
                let newComment = this.comment[index];
                newComment.isshow = !this.comment[index].isshow;
                Vue.set(this.comment, index, newComment);
            },

            // 提交评论
            submit() {
                if (!this.isLogin) {
                    alert("你还没有登录不能发布评论噢~")
                } else {
                    var url = "/api/addVideoComment";
                    this.$http.post(url, {
                        id: this.id,
                        username: this.$cookies.get("username"),
                        textarea: this.textarea
                    }, {}).then(function (data) {
                        alert(data.body);
                        window.location.reload();
                    })
                }
            }

            // //被遗弃的事件总线hhh
            // video1:function () {
            //     msg.$emit("id","1");
            // },
            // video2:function () {
            //     msg.$emit("id","2");
            // }
        },

        mounted() {
            // 跳转到此页面时根据id加载页面内容
            this.getComment();
            this.getVideo();

            //通过Cookies判断登录状态
            if (this.$cookies.get("username") != null && this.$cookies.get("password") != null) {
                // console.log(this.$cookies.get("username"), this.$cookies.get("password"));
                //改变登录状态
                this.isLogin = true;
            }
        }
    }


</script>
<style lang="stylus" scoped>

    .fade-enter-active {
        transition: opacity 1s; //类名：隐藏到显示过程所需要的时间
    }

    .fade-enter { // 类名:初始化状态
        opacity: 0;
    }

    .bg {
        max-width 100%
        max-height 100%
        width 100%
        height 170px
        position: relative;
        background: url("../assets/images/v_bg1.jpg") no-repeat top
    }

    .dim {
        width 100%
        height 170px
        background-color: rgba(0, 0, 0, .6);
        color white
        font-family "微软雅黑", sans-serif
        text-align center
    }

    .main {
        margin-top 20px
        width 100%
        height 1500px
        background-color white
    }

    .content {
        width 70%
        /*height 1500px*/
        margin 0 auto
        display flex
        flex-direction column

    }

    .video {
        width 100%
    }

    .intro {
        width 100%
        height 12%
        display flex
        flex-direction column
        text-align left
        box-shadow: 0px 2px 3px 2px rgba(205, 205, 205, 0.64);
        margin-bottom 20px
    }

    .other {
        width 100%
        height 40%
        display flex
        flex-direction row
        font-size 12px
        box-shadow: 0px 2px 3px 2px rgba(205, 205, 205, 0.64);
    }

    .comment {
        width 70%
        height 100%
        margin 0 10px 0 0
    }

    .recommend {
        width 30%
        height 100%
        /*border 1px yellow solid*/
        display flex
        flex-direction column
        border-left  1px #f6f6f6 solid

    }

    .menu li {
        margin-bottom 10px
    }

    .comment_head {
        width 100%
        height 80px
        /*border-bottom 1px #979797 solid*/
        font-size 18px
        text-align left
        padding-left 20px
        /*margin 0 auto*/
        margin-bottom 100px
    }

    .comment_head button {
        font-size 12px
        border none
        outline none;
        border-radius 5px
        background-color #f59db4
        color #fff
        width 70px
        height 20px
        margin-bottom 25px
    }

    .comment_body {
        width 100%
        display flex
        flex-direction row
        border-bottom 1px rgba(126, 140, 141, 0.25) solid
        /*border-top 1px red solid*/
    }

    .left {
        display flex
        flex-direction column
        width 20%
        padding-left 20px
        /*border 1px red solid*/
        margin-top 30px
    }

    .comment_content {
        display flex
        flex-direction column
        /*border 1px red solid*/
        margin-top 30px
    }

    .icon {
        text-align left
        padding-top 5px
        padding-left 20px
        margin-bottom 10px
    }

    .right {
        width 100%
        /*border 1px red solid*/
        text-align left
    }
</style>

