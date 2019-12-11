<template>
    <div>
        <ul class="itemlist">
            <li>
                <div class="img"></div>
                <div class="intro">
                    <div class="category">默认收藏夹</div>
                    <div class="author">创建者：LL_XY106</div>
                    <div class="detail">1内容 · 公开</div>
                    <button>点我</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="stylus" scoped>
    .itemlist{
        width 910px
        height 160px
        border-bottom  1px #E4E4E4 solid
    }
    .img{
        width 188px
        height 119px
        background-color palevioletred
        border-radius 5px
        margin-right 20px
    }
    li{
        display flex
        flex-direction row
        padding 20px
    }
    .category{
        font-size 14px
        margin-bottom 20px
    }
    .author{
        font-size 12px
        color #979797
        margin-bottom 10px
    }
    button{
        width 120px
        height 30px
        background-color #00A1D6
        border: 1px solid transparent;
        border-radius: 3px;
        outline none
        padding 0
        color white
        font-size 14px
    }
    .detail{
        font-size 12px
        color #979797
        margin-bottom 20px
    }
</style>