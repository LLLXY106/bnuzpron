<template>
    <div class="nav">
        <ul class="item">
            <li>主页</li>
            <li>动态</li>
            <li>收藏</li>
            <li>订阅</li>
            <li>设置</li>
        </ul>
        <ul class="data">
            <li>关注数</li><span>0</span>
            <li>粉丝数</li><span>0</span>
        </ul>
    </div>
</template>
<style lang="stylus" scoped>
    .nav{
        display flex
        flex-direction row
        width 1100px
        height 65px
        border 1px #e4e4e4 solid
        margin 0 auto
        background-color white
        border-radius 0 0 5px 5px
    }
    .item{
        display flex
        flex-direction row
        margin-right 500px
    }
    .item li{
        width 80px
        height 65px
        line-height 65px
    }
    .data{
        display flex
        flex-direction row
    }
    .data li{
        width 80px
        height 65px
        line-height 65px
        font-size 12px
        color #979797
    }
    .data span{
        height 65px
        line-height 65px
        font-size 16px
        color palevioletred
    }
</style>