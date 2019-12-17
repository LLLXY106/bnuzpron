<template>
    <div>
        <div class="menu">
            <div class="title">我的创建</div>
            <ul class="itemlist">
                <li>默认收藏夹</li>
                <li>专栏收藏夹</li>
                <li>图片收藏夹</li>
                <li>视频收藏夹</li>
            </ul>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
    .menu{
        width 190px
        height 600px
        border-right  1px #e7e7e7 solid
        border-radius 5px 0 0 0
    }
    .title{
        width: 100%;
        height: 50px;
        line-height: 50px;
        color #979797
        font-size 20px
        text-align center
        /*border: 1px solid orange*/
        margin 0 auto
    }
    .itemlist li{
        list-style: none;
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #f6f6f6;
        margin-bottom: 2px;
        line-height: 50px;
        cursor:pointer;
        font-size 14px
    }
</style>