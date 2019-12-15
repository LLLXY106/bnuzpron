<template>
    <div>
        <TopContainer></TopContainer>
        <div class="bg">
            <div class="dim"><p STYLE="font-size:44px;font-weight: bolder;line-height: 110px;letter-spacing:10px;">热门视频</p><p STYLE="font-size:16px;letter-spacing:4px;">POPULAR VIDEO</p></div>
        </div>
        <Navbar></Navbar>
        <div class="main">
            <div class="content">
                <div class="video">
                    <a>{{title}}</a>
                    <a>({{area}}>{{type}})</a>
                    <Video></Video>
                </div>
                <div class="intro">

                </div>
                <div class="other">
                    <div class="comment">

                    </div>
                    <div class="recommend">
                        <div style="margin:10px auto;font-size: 16px;font-weight: bolder">推荐视频</div>
                        <div class="item">
                            <ul class="menu">
                                <li><img src="/img/PersonalCenter/1.jpg" style="width: 240px;height: 150px" @click="video1()"></li>
                                <li><img src="/img/PersonalCenter/2.jpg" style="width: 240px;height: 150px" @click="video2()"></li>
                                <li><img src="/img/PersonalCenter/3.jpg" style="width: 240px;height: 150px"></li>
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
    import Video from '../components/VideoPage1/Video'
    import msg from '../components/VideoPage1/msg'
    export default {
        name: "VideoPage",
        data() {
            return {
                title:'【猛男版】新 宝 岛',
                area:'舞蹈',
                type:'宅舞',
            }
        },
        components: {
            TopContainer,
            Navbar,
            Video
        },
        methods:{
            video1:function () {
                msg.$emit("id","1");
            },
            video2:function () {
                msg.$emit("id","2");
            }
        }
    }
    // $(function() {
    //     var slideHeight = 10; // px 定义折叠的最小高度
    //     var defHeight = $('#wrap').height();
    //     if(defHeight >= slideHeight) {
    //         $('#wrap').css('height', slideHeight + 'px');
    //         $('#read-more').append('<a href="#">更多</a>');
    //         $('#read-more a').click(function() {
    //             var curHeight = $('#wrap').height();
    //             if(curHeight == slideHeight) {
    //                 $('#wrap').animate({
    //                     height: defHeight
    //                 }, "normal");
    //                 $('#read-more a').html('折叠');
    //             } else {
    //                 $('#wrap').animate({
    //                     height: slideHeight
    //                 }, "normal");
    //                 $('#read-more a').html('更多');
    //             }
    //             return false;
    //         });
    //     }
    // });
</script>
<style lang="stylus" scoped>
    .bg{
        width 100%
        height 170px
        position: relative;
        background:url("../assets/images/video_bg.jpg") no-repeat top

    }
    .dim{
        width 100%
        height 170px
        background-color: rgba(0,0,0,.6);
        color white
        font-family "微软雅黑", sans-serif
        text-align center
    }
    .main{
        width 100%
        height 1500px
    }
    .content{
        width 70%
        height 1500px
        margin 0 auto
        border 1px blue solid
        display flex
        flex-direction column
    }
    .video{
        width 100%
    }
    .intro{
        width 100%
        height 10%
        border 1px blue solid
    }
    .other{
        width 100%
        height 40%
        border 1px blue solid
        display flex
        flex-direction row
    }
    .comment{
        width 70%
        height 100%
        border 1px red solid
    }
    .recommend{
        width 30%
        height 100%
        border 1px yellow solid
        display flex
        flex-direction column
    }
    .menu li{
        margin-bottom 10px
    }
</style>