<template>
    <div>
        <TopContainer></TopContainer>
        <div class="bg">
            <div class="dim"><p STYLE="font-size:44px;font-weight: bolder;line-height: 110px;letter-spacing:10px;">热门动漫</p><p STYLE="font-size:16px;letter-spacing:4px;">POPULAR ANIME</p></div>
        </div>
        <Navbar></Navbar>
        <div class="main">
            <div class="title">—— 最热漫画 ——<br>Most hot Anime</div>
            <div class="content" style="font-family: 幼圆">
                <div class="item1">
                    <div class="words1"><p style="font-size: 14px">{{cartoon[0].title}}</p><p style="text-align: left;line-height:16px;font-size: 12px; text-indent:2rem">{{cartoon[0].introduce}}</p></div>
                    <div class="pic1"><a href="https://manga.bilibili.com/detail/mc25717?from=manga_rank"><img :src="cartoon[0].img" style="max-height: 100%;max-width: 100%"/></a></div>
                </div>
                <div class="item2">
                    <div class="pic2"><a href="https://manga.bilibili.com/detail/mc27355?from=manga_rank"><img :src="cartoon[1].img" style="max-height: 100%;max-width: 100%"/></a></div>
                    <div class="words2"><p style="font-size: 14px">{{cartoon[1].title}}</p> <p style="text-align: left;line-height:16px;font-size: 12px; text-indent:2rem">{{cartoon[1].introduce}}</p></div>
                </div>
                <div class="item3">
                    <div class="words3"><p style="font-size: 14px">{{cartoon[2].title}}</p><p style="text-align: left;line-height:16px;font-size: 12px; text-indent:2rem">{{cartoon[2].introduce}}</p></div>
                    <div class="pic3"><a href="https://manga.bilibili.com/detail/mc27384?from=manga_serach"><img :src="cartoon[2].img" style="max-height: 100%;max-width: 100%"/></a></div>
                </div>
               <div class="item4">
                   <div class="pic4"><a href="https://manga.bilibili.com/detail/mc26431?from=manga_rank"><img :src="cartoon[3].img" style="max-height: 100%;max-width: 100%"/></a></div>
                    <div class="words4"><p style="font-size: 14px">{{cartoon[3].title}}</p><p style="text-align: left;line-height:16px;font-size: 12px; text-indent:2rem">{{cartoon[3].introduce}}</p></div>
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
        },
        data() {
            return {
                cartoon: []
            }
        },
        mounted(){
            var url = "/api/hot";
            this.$http.get(url, {
            }, {}).then(function (data) {
                this.cartoon = data.body;
                console.log(data.body);
            }, function (response) {
                console.log(response);
            })
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