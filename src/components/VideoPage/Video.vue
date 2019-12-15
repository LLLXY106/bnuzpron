<template>
    <div>
        <!--=={{id}}==-->
        <div class="v_video">
            <videoPlayer
                    class="video-player vjs-custom-skin"
                    ref="videoPlayer"
                    :playsinline="true"
                    :options="playerOptions"
            ></videoPlayer>
        </div>
    </div>
</template>

<script>
    import {videoPlayer} from 'vue-video-player'
    import msg from "./msg";

    export default {
        name: "Video",
        data() {
            return {
                id:0,
                playerOptions: {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
                    autoplay: false, //如果true,则自动播放
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 循环播放
                    preload: 'auto',  // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    flash: {hls: {withCredentials: false}},// 可以使用rtmp视频
                    html5: {hls: {withCredentials: false}},// 可以使用m3u8视频
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{ // 播放资源和资源格式
                        type: "video/mp4",
                        // src: "http://img.ksbbs.com/asset/Mon_1703/05cacb4e02f9d9e.mp4" //你的视频地址（必填）
                        // src: "/video/VideoPage/1.mp4"
                        src: ''
                    }],
                    //视频封面图
                    poster: "/img/PersonalCenter/1.jpg",
                    width: document.documentElement.clientWidth, // 默认视频全屏时的最大宽度
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: true,
                        fullscreenToggle: true // 全屏按钮
                    }
                },
            }
        },

        mounted: function () {
            var _this = this;
            msg.$on('id',function (m) {
                // _this.id = m;
                if(m === '1') {
                    // _this.poster='/img/PersonalCenter/1.jpg';
                    _this.playerOptions['sources'][0]['src'] = "/video/VideoPage/1.mp4";
                }
                else if(m === '2') {
                    // _this.poster='/img/PersonalCenter/2.jpg';
                    _this.playerOptions['sources'][0]['src'] = "/video/VideoPage/2.mp4";
                }
            })
            // this.playerOptions.poster = "/img/PersonalCenter/2.jpg";
            // this.playerOptions['sources'][0]['src'] = "/video/VideoPage/1.mp4";
            // this.src='/video/VideoPage/1.mp4'
        },


        components: {
            videoPlayer
            // getUserType () {
            //     let userType = parseInt(this.userInfo.userType);
            //     let videoSrc = ""
            //     if(userType === 1){
            //         videoSrc = "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
            //     }else if (userType === 2){
            //         videoSrc = "http://www.17sucai.com/preview/501914/2017-08-04/%E9%A1%B5%E9%9D%A2/media/mov_bbb.mp4"
            //     }
            //     return videoSrc;
            // }
        },

        methods: {

            // showVideo (bol) {
            //     let myPlayer = this.$refs.videoPlayer.player;
            //     if( bol ) {
            //         myPlayer.src(this.getUserType); //根据userType的不同展示不同的视频地址
            //         return false
            //     };
            // }
        }
    }
</script>

<style lang="stylus" scoped>
    .v_video{
        /*border: 1px red solid;*/
        margin-left: 100px;
        padding-top:90px;
    }
</style>
