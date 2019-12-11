<template>
    <div>
        <TopContainer></TopContainer>
        <div class="bg">
            <div class="dim"><p STYLE="font-size:44px;font-weight: bolder;line-height: 110px;letter-spacing:10px;">热门动漫</p><p STYLE="font-size:16px;letter-spacing:4px;">POPULAR ANIME</p></div>
        </div>
        <Navbar></Navbar>
        <div class="main">
            <div class="title">—— 最热漫画 ——<br>Most hot Anime</div>
            <div class="content">
                <div class="item1">
                    <div class="words1"><p style="font-size: 14px">《鬼灭之刃》</p><p style="text-align: left;line-height:16px;font-size: 12px; text-indent:2rem">卖炭少年·炭治郎，他那平凡而幸福的日常生活，在家人遭到恶鬼袭击的那一天发生剧变。母亲与四个弟妹惨遭杀害，而与他一起生还的妹妹：祢豆子亦异变成凶暴的鬼</p></div>
                    <div class="pic1"><a href="https://manga.bilibili.com/detail/mc25717?from=manga_rank"><img src="../assets/images/hot_p1.jpg" style="max-height: 100%;max-width: 100%"/></a></div>
                </div>
                <div class="item2">
                    <div class="pic2"><a href="https://manga.bilibili.com/detail/mc27355?from=manga_rank"><img src="../assets/images/hot_p2.jpg" style="max-height: 100%;max-width: 100%"/></a></div>
                    <div class="words2"><p style="font-size: 14px">《堀与宫村》</p> <p style="text-align: left;line-height:16px;font-size: 12px; text-indent:2rem">看似很时尚，却是持家女的堀京子，与看似是阴暗的宅男，其实是满身的刺青和大量耳洞时尚形象的宫村伊澄相遇，于是两人有着对方秘密的生活开始。</p></div>
                </div>
                <div class="item3">
                    <div class="words3"><p style="font-size: 14px">《潘多拉之心》</p><p style="text-align: left;line-height:16px;font-size: 12px; text-indent:2rem">四大公爵家贝萨流士家的下一任当家奥兹·贝萨流士，在15岁的成人仪式时，被阿比斯的使者流放至阿比斯这个黑暗监狱中。之后，奥兹在比斯茨中与被称作“染血黑兔”的锁链 “爱丽丝”相遇</p></div>
                    <div class="pic3"><a href="https://manga.bilibili.com/detail/mc27384?from=manga_serach"><img src="../assets/images/hot_p3.jpg" style="max-height: 100%;max-width: 100%"/></a></div>
                </div>
               <div class="item4">
                   <div class="pic4"><a href="https://manga.bilibili.com/detail/mc26431?from=manga_rank"><img src="../assets/images/hot_p4.jpg" style="max-height: 100%;max-width: 100%"/></a></div>
                    <div class="words4"><p style="font-size: 14px">《文豪野犬》</p><p style="text-align: left;line-height:16px;font-size: 12px; text-indent:2rem">中岛敦被赶出孤儿院，即将饿死在横滨时，遇到了投河自尽的太宰治。敦声称自己一直被猛虎追赶，太宰便借机让其协助武装侦探社找寻“食人虎”。最终，“食人虎”的真面目令人咋舌</p></div>
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
        background:url("../assets/images/hotbg.png")no-repeat

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
        height 70%
        /*border 1px green solid*/
    }
</style>