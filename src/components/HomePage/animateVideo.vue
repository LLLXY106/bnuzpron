<template>
    <div class="common-container">
        <div class="common-header">
            <img class="header-icon"
                 src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575301452607&di=fd956fa190bfc8fa711de3ae651a8fab&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fugc%2Fbaikepic2%2F27372%2F20160721072821-740776264.jpg%2F0"/>
            <div class="clear"></div>
            <span class="header-title">视频</span>
        </div>
        <div class="animate">
            <!-- <div class="common-video" id="test">
                <a href="#">
                    <div class="video-pic">
                        <img src="../../assets/images/test-pic.jpeg" width="200px" height="130px" alt="test-video" @click="toVideo(2)">
                    </div>
                    <p title="这是一个测测测测测测测测测测测试视频" class="video-title">这是一个测测测测测测测测测测测试</p>
                </a>
            </div> -->
            <!-- <div class="common-video" style="background-color: pink"></div>
            <div class="common-video" style="background-color: pink"></div> -->
            <commonAnimate v-for="(i,index) in tempList" :item="i" :key="index"></commonAnimate>
        </div>
        <div class="maybe-pic">
            <div class="top">
                Made by 群聊(3)
            </div>
            <div class="bottom">
                <img src="../../assets/images/natsume.gif" width="260px" height="150px">
            </div>
        </div>
    </div>
</template>

<script>
import commonAnimate from './commonAnimate'
  export default {
    name: 'AnimateVideo',
    data() {
        return {
            tempList: [
                {
                    id: 1,
                    title: 'Start: 2019.11.24 Start: 2019.11.24',
                    headsrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577347977310&di=4d21dd1480a56d990d45f2471f1ee5c2&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2F728da9773912b31b4e7df3578618367adab4e1bf.jpg',
                },
                 {
                    id: 2,
                    title: '群聊3群聊3群聊3群聊3群聊3',
                    headsrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577347573391&di=058d11933f135106bc1ca3be956f6cb6&imgtype=jpg&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2Fc28fddfdf0dc390fd7887d0e.jpg',
                },
                 {
                    id: 3,
                    title: 'End: 2019.12.26 End: 2019.12.26',
                    headsrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577348033121&di=19f4b928d19e440be91346c2c500432f&imgtype=0&src=http%3A%2F%2F00imgmini.eastday.com%2Fmobile%2F20181213%2F20181213232617_c548ef30d3480ffdbc869ae31ab57c6c_1_mwpl_05500201.jpg',
                }
            ]
        }
    },
    components: {
        commonAnimate
    },
    methods: {
      toVideo(num) {
        window.location.href = 'VideoPage?id=' + num;
        // this.$router.push({name:'VideoPage',query: {id:'1'}})
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .common-container
        width 980px
        float left
        clear both

        .common-header
            padding 0 0 15px
            height 40px

            .header-icon
                width 40px
                height 40px
                margin-right 10px
                margin-top -10px
                float left
                vertical-align center
                background url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575301452607&di=fd956fa190bfc8fa711de3ae651a8fab&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fugc%2Fbaikepic2%2F27372%2F20160721072821-740776264.jpg%2F0')

            .header-title
                font-size 24px
                line-height 24px
                font-weight 400
                margin-right 20px
                float left

        .animate
            width 720px
            height 198px //168px
            overflow hidden
            display inline

            .common-video:hover >>> .video-title
                color blue

            .common-video
                width 200px
                height 178px
                margin 0 30px 20px 0
                position relative
                font-size 12px
                overflow hidden
                float left
                border-radius 4px
                // background-color pink  //测试  显示位置

                .video-title
                    padding-top 8px
                    height 48px
                    line-height 18px
                    color black
                    font-size 14px
                    word-wrap break-word
                    word-break break-all
                    overflow hidden
                    text-align left

        // .video-title:hover
        //   color blue

        .maybe-pic
            width 260px
            float right

            .top
                height 34px
                padding 0 6px
                line-height 34px
                text-align center
                display block
                background #e5e9ef

            .bottom
                width 260px
                height 150px
                position relative
                margin-top 10px
                border-radius 4px
                overflow hidden
</style>
