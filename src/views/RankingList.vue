<template>
    <div class="bg">
        <TopContainer></TopContainer>
        <div class="hd">
            <div class="dim"><p STYLE="font-size:44px;font-weight: bolder;line-height: 100px;letter-spacing:10px;">排行榜</p><p STYLE="font-size:16px;letter-spacing:4px;">RANKINGLIST</p></div>
        </div>
        <div class="rank_body">
            <div class="rank_head">
                <img src="../assets/images/rank.png" style="margin-right: 20px"/>
                <p style="line-height: 32px">热门视频排行榜</p>
            </div>
            <div class="item">
                <div class="num" style="width: 6%;height: 100%;text-align: center"><img src="../assets/images/gold.png"/></div>
                <img :src="Video[0].headsrc" style="width: 188px;height: 119px;margin-right: 20px"/>
                视频标题：{{Video[0].title}}
                总播放次数:{{Video[0].play}}
            </div>
            <div class="item">
                <div class="num" style="width: 6%;height: 100%;text-align: center"><img src="../assets/images/silver.png"/></div>
                <img :src="Video[1].headsrc" style="width: 188px;height: 119px;margin-right: 20px"/>
                视频标题：{{Video[1].title}}
                总播放次数:{{Video[1].play}}
            </div>
            <div class="item">
                <div class="num" style="width: 6%;height: 100%;text-align: center"><img src="../assets/images/copper.png"/></div>
                <img :src="Video[2].headsrc" style="width: 188px;height: 119px;margin-right: 20px"/>
                视频标题：{{Video[2].title}}
                总播放次数:{{Video[2].play}}
            </div>
            <div class="item" v-for="(items,i) in sortVideo" v-if="i >= 3">
                <div class="num" style="width: 6%;height: 100%;text-align: center;font-size: 16px;font-weight: bold">{{i+1}}</div>
                <img :src="items.headsrc" style="width: 188px;height: 119px;margin-right: 20px"/>
                视频标题：{{items.title}}
                总播放次数:{{items.play}}
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import TopContainer from '../components/common/TopContainer'

    export default {
        components: {
            TopContainer
        },
        name: "RankingList",
        data() {
            return {
                Video: []
            }
        },
        computed: {
            sortVideo() {
                return sortNum(this.Video, 'play')
            }
        },
        methods: {
            getVideoList() {
                var url = "/api/getVideoList";
                this.$http.get(url, {}, {}).then(function (data) {
                    // console.log(data.body);
                    this.Video = data.body;
                }, function (response) {
                    console.log(response);
                })
            },
            show() {
                console.log(this.Video);
            }
        },
        mounted() {
            this.getVideoList();
        }
    }

    function sortNum(array, key) {
        return array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            return ((x < y) ? (x > y) ? 1 : 0 : -1)
        })
    }

</script>

<style lang="stylus" scoped>
    .hd{
        width 100%
        height 160px
        position: relative;
        background:url("../assets/images/r_bg.jpg") no-repeat top

    }
    .dim{
        width 100%
        height 160px
        background-color: rgba(0,0,0,.6);
        color white
        font-family "微软雅黑", sans-serif
        text-align center
    }
    .item{
        /*border 1px red solid*/
        width 100%
        height 150px
        margin 0 auto
        border-bottom 1px #dfdfdf solid
        padding 20px
        text-align left
        display flex
        flex-direction row
    }
    .item:hover {
        box-shadow:0px 2px 3px 2px rgba(205,205,205,0.64);
        transform:scale(1.01);
        /*background-color #fffcff*/
        transform:translateX(0);

    }
    .item:hover:before {
        opacity:0.5;
    }
    .item:before{
        opacity:0;
        transition:all 500ms cubic-bezier(0.47,0,0.745,0.715) 0s;
    }
    .rank_head{
        font-size 14px
        /*border 1px red solid*/
        text-align left
        display flex
        flex-direction row
        padding-bottom 5px
        border-bottom 1px #979797 solid
    }
    .rank_body{
        margin 20px auto
        /*border 1px red solid*/
        width 80%
    }
</style>