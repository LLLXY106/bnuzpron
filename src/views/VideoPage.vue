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
                <div class="video">
                    <a>{{title}}</a>
                    <a>{{area}}>{{type}}</a>
                    <Video></Video>
                </div>
                <div class="intro">
                </div>
                <div class="other">
                    <div class="comment">
                        <div class="comment_head">
                            <p style="margin: 20px 0px">56 评论</p>
                            <p>全部评论</p>
                        </div>
                        <!--<div ><button @click="getComment">test</button>展开评论</div>-->
                        <div class="comment_body" v-for="(items,index) in comment" :key="items" v-if="items.fatherfloor==0">
                            <div class="left">
                                <div class="head_img" style="margin: 10px 0">
                                    <img src="/img/PersonalCenter/head.jpg" style="width: 50px;height: 50px"/>
                                </div>
                                <div style="margin-bottom: 10px">{{items.username}}</div>
                            </div>
                            <div class="right">
                                <div class="comment_content">
                                    <p style="text-align: left;margin-left: 20px;margin-top: 15px;font-size: 14px;line-height: 18px">
                                        {{items.comment}}</p>
                                    <i class="fa fa-commenting-o" aria-hidden="true"
                                       style="color:rgb(188,188,188);margin-right: 8px;cursor: pointer"
                                       @click="toggle(index)"></i><span
                                        style="font-size: 14px;margin-right: 15px"></span>
                                    <div v-show="items.isshow">
                                        <div v-for="i in comment" v-if="i.fatherfloor==1&&i.floor==items.floor">
                                            {{i.username}}:{{i.comment}}
                                        </div>
                                    </div>
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
        comment: []
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
        border 1px blue solid
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
        border 1px red solid
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
        width 90%
        height 80px
        border-bottom 1px #979797 solid
        font-size 18px
        text-align left
        padding-left 20px
        margin 0 auto
    }

    .comment_body {
        width 95%
        display flex
        flex-direction row
        border-bottom 1px rgba(126, 140, 141, 0.25) solid
        margin 0 auto
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
    }

    .icon {
        text-align left
        padding-top 5px
        padding-left 20px
        margin-bottom 10px
    }
</style>

