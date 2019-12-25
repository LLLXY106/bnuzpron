<template>
    <div>
        <TopContainer></TopContainer>
        <div class="head">
            <div class="dim">
                <p STYLE="font-size:36px;font-weight: bolder;line-height: 110px;letter-spacing:10px;">我的收藏</p>
                <p STYLE="font-size:16px;letter-spacing:4px;">MY FAVORITE</p></div>
        </div>
        <Navbar></Navbar>
        <div class="main">
            <DefaultMenu></DefaultMenu>
            <Itemlist v-if="true"></Itemlist>
            <PicItemlist v-if="false"></PicItemlist>
        </div>
    </div>
</template>
<script type="text/javascript">
    import TopContainer from '../components/common/TopContainer'
    import DefaultMenu from '../components/CollectPage/DefaultMenu'
    import Itemlist from '../components/CollectPage/Itemlist'
    import PicItemlist from '../components/CollectPage/PicItemlist'
    import Navbar from '../components/CollectPage/Navbar'
    export default {
        components: {
            TopContainer,
            DefaultMenu,
            Itemlist,
            PicItemlist,
            Navbar
        },
    }
</script>

<style lang="stylus" scoped>
    .head{
        width 1100px
        height 200px
        /*border 1px red solid*/
        margin 0 auto
        max-width: 100%;
        max-height: 100%;
        background: url("../assets/images/c_bg.jpg") no-repeat top
    }
    .dim{
        width 1100px
        height 200px
        background-color: rgba(0,0,0,.6);
        color white
        font-family "微软雅黑", sans-serif
        text-align center
    }
    .main{
        display flex
        flex-direction row
        border 1px #e4e4e4 solid
        margin 10px auto
        width 1100px
        border-radius 5px 5px 0 0
    }
</style>