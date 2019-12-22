<template>
    <div class="bg">
        <TopContainer></TopContainer>
        <Tabs></Tabs>
        <h1>修改头像</h1>
    </div>
</template>
<script type="text/javascript">
    import Tabs from '../components/InfoCardPage/Tabs'
    import TopContainer from '../components/common/TopContainer'
    export default {
        components: {
            Tabs,
            TopContainer
        },
    }
</script>
<style lang="stylus" scoped>
    .bg {
        width: 100%;
        height: 100%;
        background-image url("../assets/images/photo_bg (2).jpg")
        background-size cover
        background-repeat repeat
        background-position center 0
        position fixed
        top 0
        left 0
        min-width 1000px
        z-index -10
        zoom 1
    }
</style>