<template>
    <div>
        <TopContainer></TopContainer>
        <div class="bg">
            <div class="dim"><p STYLE="font-size:44px;font-weight: bolder;line-height: 110px;letter-spacing:10px;">最新动漫</p><p STYLE="font-size:16px;letter-spacing:4px;">POPULAR ANIME</p></div>
        </div>
        <Navbar></Navbar>
        <div class="main">
            <div class="title">—— 最新漫画 ——<br>Latest hot Anime</div>
            <div class="content" style="font-family: 幼圆">
                <div class="item1">
                    <div class="words1"><p style="font-size: 14px">《虚构推理》</p><p style="text-align: left;line-height:16px;font-size: 12px; text-indent:2rem">成为“妖怪”们智慧之神的少女岩永琴子对樱川九郎一见钟情，而樱川九郎居然是一个连“妖怪”也畏惧三分的男人！？机缘巧合下两人成为恋人，一起探索这个城市里关于妖怪的故事。</p></div>
                    <div class="pic1"><a href="https://manga.bilibili.com/detail/mc26431?from=manga_rank"><img src="../assets/images/new_p1.jpg" style="max-height: 100%;max-width: 100%"/></a></div>
                </div>
                <div class="item2">
                    <div class="pic2"><a href="https://manga.bilibili.com/detail/mc27357?from=manga_serach"><img src="../assets/images/new_p2.jpg" style="max-height: 100%;max-width: 100%"/></a></div>
                    <div class="words2"><p style="font-size: 14px;">《Dimension》</p> <p style="text-align: left;line-height:16px;font-size: 12px; text-indent:2rem">故事发生在2072年，21世纪最大的发现与发明——次元间电磁诱导装置，通称【线圈】。通过线圈，人类获得了无穷无尽的能量。通过不断朝小型进化的线圈自由地获得电力已经成为可能，这个发明正推动着整个世界，开启了崭新的时代。</p></div>
                </div>
                <div class="item3">
                    <div class="words3"><p style="font-size: 14px">《碧蓝航线》</p><p style="text-align: left;line-height:16px;font-size: 12px; text-indent:2rem">将军武舰船等二次元少女拟人化之后，由玩家自由搭配操作完成的一款游戏。本作为各位画家，参考游戏《碧蓝航线》的世界观而创作的一些描述战舰们日常生活的小剧场。</p></div>
                    <div class="pic3"><a href="https://manga.bilibili.com/detail/mc27328?from=manga_index"><img src="../assets/images/new_p3.jpg" style="max-height: 100%;max-width: 100%"/></a></div>
                </div>
                <div class="item4">
                    <div class="pic4"><a href="https://manga.bilibili.com/detail/mc25813?from=manga_serach"><img src="../assets/images/new_p4.jpg" style="max-height: 100%;max-width: 100%"/></a></div>
                    <div class="words4"><p style="font-size: 14px">《异常生物见闻录》</p><p style="text-align: left;line-height:16px;font-size: 12px; text-indent:2rem">一个普通房东郝仁家中住入狼人与吸血鬼妹子，还被脱线女神拉入神秘组织四处拯救外星生物。意外的是，一切似乎在万年前被冥冥之中安排妥当，而能够解决一切的脱线女神却在为年终奖奔波……</p></div>
                </div>
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
        background:url("../assets/images/new_bg.jpg") no-repeat top

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
        width 70%
        height 80%
        margin 0 auto
        /*border 1px blue solid*/
        display flex
        flex-direction row
    }
    .item1,.item2,.item3,.item4{
        width 25%
        height 100%
        border 1px #f6f6f6 solid
        letter-spacing 2px
        margin-right 10px
        padding 15px
        box-shadow: 2px 2px 4px #bababa;
        color #979797
    }
    .words1,.words3{
        width 100%
        height 30%
        /*border 1px green solid*/
    }
    .pic1,.pic3{
        width 100%
        height 70%
        /*border 1px green solid*/
    }
    .words2,.words4{
        margin-top -20px
        width 100%
        height 30%

        /*border 1px green solid*/
    }
    .pic2,.pic4{
        width 100%
        height 65%
        /*border 1px green solid*/
    }
</style>