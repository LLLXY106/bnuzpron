<template>
    <div>
        <TopContainer></TopContainer>
        <div class="bg">
            <div class="dim"><p STYLE="font-size:44px;font-weight: bolder;line-height: 110px;letter-spacing:10px;">
                热门视频</p>
                <p STYLE="font-size:16px;letter-spacing:4px;">POPULAR VIDEO</p></div>
        </div>
        <Navbar></Navbar>
        <div class="main">
            <div class="content">
                <div class="video" style="text-align: left;font-size: 18px;">
                    <div style="margin: 15px auto">
                        <a>{{title}}</a>&nbsp;
                        <a>{{area}}&nbsp;>&nbsp;{{type}}</a>
                    </div>
                    <Video></Video>
                </div>
                <div class="intro">
                    <el-rate
                            v-model="value"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                    </el-rate>

                </div>
                <div class="other">
                    <div class="comment">
                        <div class="comment_head" style="font-size: 14px">
                            <p style="margin: 20px 0px;font-size: 14px;color: #fa5a57">{{this.comment.length}}评论</p>
                            <span style="vertical-align: top">我的评论：</span><textarea type="text"
                                                                                    style="font-size: 14px;border:0;border-radius:5px;background-color:rgba(242,242,242,0.98);width: 380px;height: 60px;padding: 10px;resize: none;"/>
                            <button>提交评论</button>
                            <p style="font-size: 14px;margin:0px auto">全部评论</p>
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
                                    <p style="text-align: left;margin-top: 15px;font-size: 14px;line-height: 18px">
                                        {{items.comment}}
                                    </p>
                                    <div>
                                        <i class="fa fa-commenting-o" aria-hidden="true"
                                           style="color:rgb(188,188,188);margin-right: 8px;cursor: pointer"
                                           @click="toggle(index)"></i>
                                    </div>
                                </div>
                                <div>
                                    <transition name="fade">
                                        <div v-show="items.isshow" style="background-color: #f6f6f6;border-radius: 5px;padding-left: 10px">
                                            <div v-for="i in comment" v-if="i.fatherfloor==1&&i.floor==items.floor">
                                                {{i.username}}:{{i.comment}}
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
                                <li><img src="/img/PersonalCenter/1.jpg" style="width: 90%;height: 20%"></li>
                                <li><img src="/img/PersonalCenter/2.jpg" style="width: 90%;height: 20%"></li>
                                <li><img src="/img/PersonalCenter/3.jpg" style="width: 90%;height: 20%"></li>
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
                value: 3.4
            }
        },

        components: {
            TopContainer,
            Navbar,
            Video
        },

        methods: {
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
                }, function (response) {
                    console.log(response);
                })
            },

            toggle(index) {
                let newComment = this.comment[index];
                newComment.isshow = !this.comment[index].isshow;
                Vue.set(this.comment, index, newComment);
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
        width 100%
        height 170px
        position: relative;
        background: url("../assets/images/video_bg.jpg") no-repeat top

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
        width 100%
        height 1500px
    }

    .content {
        width 70%
        height 1500px
        margin 0 auto
        border 1px blue solid
        display flex
        flex-direction column
    }

    .video {
        width 100%
    }

    .intro {
        width 100%
        height 10%
        /*border 1px blue solid*/
    }

    .other {
        width 100%
        height 40%
        border 1px blue solid
        display flex
        flex-direction row
    }

    .comment {
        width 70%
        height 100%
        /*border 1px red solid*/
    }

    .recommend {
        width 30%
        height 100%
        /*border 1px yellow solid*/
        display flex
        flex-direction column
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
        margin-bottom 60px
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
    }

    .comment_content {
        display flex
        flex-direction column
        /*border 1px red solid*/
    }

    .icon {
        text-align left
        padding-top 5px
        padding-left 20px
        margin-bottom 10px
    }
    .right{
        width 100%
        /*border 1px red solid*/
        text-align left
    }
</style>

