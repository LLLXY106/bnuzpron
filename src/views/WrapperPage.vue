<template>
    <div>
        <TopContainer></TopContainer>
        <div class="bg">
            <div class="dim"><p STYLE="font-size:44px;font-weight: bolder;line-height: 110px;letter-spacing:10px;">最热壁纸</p><p STYLE="font-size:16px;letter-spacing:4px;">POPULAR ANIME</p></div>
        </div>
        <div class="main">
            <div class="title">—— 动漫壁纸 ——<br>Anime Wallpapers</div>
            <div class="content">
                <div class="left">
                    <div class="row">
                        <div style="width: 33.3%;height: 100%"><img src="../assets/images/wrapper1.jpg" style="max-height: 100%;max-width: 100%"/></div>
                        <div style="width: 33.3%;height: 100%"><img src="../assets/images/wrapper2.jpg" style="max-height: 100%;max-width: 100%"/></div>
                        <div style="width: 33.3%;height: 100%"><img src="../assets/images/wrapper3.jpg" style="max-height: 100%;max-width: 100%"/></div>
                    </div>
                    <div class="bottom" style="width: 100%;height:58%;margin-top: 5px;"><img src="../assets/images/wrapper4.jpg" style="max-height: 100%;max-width: 100%"/></div>
                </div>
                <div class="right"><img src="../assets/images/wrapper5.jpg" style="max-height: 100%;max-width: 100%"/></div>
            </div>
        </div>
        <Paging></Paging>
    </div>
</template>
<script type="text/javascript">
    import TopContainer from '../components/common/TopContainer'
    import Navbar from '../components/HotPage/Navbar'
    import Paging from '../components/HotPage/Paging'
    export default {
        components: {
            TopContainer,
            Navbar,
            Paging
        }
    }
</script>
<style lang="stylus" scoped>
    .bg{
        width 100%
        height 170px
        position: relative;
        background:url("../assets/images/wrapper_bg.jpg") no-repeat top

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
        height 600px
    }
    .title{
        width 300px
        height 50px
        /*border 1px red solid*/
        margin 20px auto
        font-size 14px
        font-family "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "微软雅黑", sans-serif
        line-height 20px
    }
    .content{
        display flex
        flex-direction row
        width 70%
        height 80%
        margin 0 auto
        /*border 1px blue solid*/
    }
    .row{
        display flex
        flex-direction row
        width 100%
        height 42%
        /*border 1px blue solid*/
    }
    .right{
        width 25%
        height 100%
        /*border 1px blue solid*/
    }
    .left{
        display flex
        flex-direction column
        width 75%
        height 100%
        /*border 1px blue solid*/
        margin-right 5px
    }
</style>