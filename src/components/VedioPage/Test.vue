<template>
    <div>
        <TopContainer></TopContainer>
        <div class="detail">
<!--            <img src="/img/PersonalCenter/1.jpg" alt=""/>-->
            <videoPlayer
                    class="video-player vjs-custom-skin"
                    ref="videoPlayer"
                    :playsinline="true"
                    :options="playerOptions"
            >
            </videoPlayer>
        </div>
    </div>

</template>

<script>
    import TopContainer from '../common/TopContainer'
    import {videoPlayer} from 'vue-video-player'

    export default {
        name: "Test",
        data() {
            return {
                playerOptions: {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
                    autoplay: false, //如果true,则自动播放
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 循环播放
                    preload: 'auto',  // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{ // 播放资源和资源格式
                        type: "video/mp4",
                        // src: "http://img.ksbbs.com/asset/Mon_1703/05cacb4e02f9d9e.mp4" //你的视频地址（必填）
                        src: "/video/VideoPage/2.mp4"
                        // src: "static/media/4-课程优惠价格的模型分析以及添加测试数据.mp4"
                    }],
                    //视频封面图
                    poster: "/img/PersonalCenter/1.jpg",
                    width: document.documentElement.clientWidth, // 默认视频全屏时的最大宽度
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                },
            }
        },


        components: {
            TopContainer,
            videoPlayer
        }
    }
</script>

<style scoped>

</style>
