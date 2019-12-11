<template>
    <div class="nav">
        <ul class="item">
            <li>首页</li>
            <li>热门动漫</li>
        </ul>
    </div>
</template>
<style lang="stylus" scoped>
    .nav{
        width 100%
        height 55px
        background-color #f6f6f6
        border-bottom 2px #b7b7b7 solid
    }
    .item{
        display flex
        flex-direction row
        margin-left 130px
    }
    .item li{
        width 80px
        height 100%
        line-height 55px
        text-align center
        font-size 14px
    }
</style>