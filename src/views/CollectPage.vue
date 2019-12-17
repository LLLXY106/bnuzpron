<template>
    <div>
        <TopContainer></TopContainer>
        <div class="head"></div>
        <Navbar></Navbar>
        <div class="main">
            <Menu></Menu>
            <Itemlist></Itemlist>
        </div>
    </div>
</template>
<script type="text/javascript">
    import TopContainer from '../components/common/TopContainer'
    import Menu from '../components/CollectPage/Menu'
    import Itemlist from '../components/CollectPage/Itemlist'
    import Navbar from '../components/CollectPage/Navbar'
    export default {
        components: {
            TopContainer,
            Menu,
            Itemlist,
            Navbar
        }
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
        background: url("../assets/images/collect_bg.png") no-repeat
    }
    .main{
        display flex
        flex-direction row
        border 1px #e4e4e4 solid
        margin 10px auto
        width 1100px
        height 600px
        border-radius 5px 5px 0 0
    }
</style>