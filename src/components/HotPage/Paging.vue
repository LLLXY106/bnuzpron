<template>
    <div class="container">
        <div class="page">
            <router-link to="/HotPage"><button style="margin-left: 30px">1</button></router-link>
            <router-link to="/LatestPage"><button>2</button></router-link>
            <router-link to="/WrapperPage"><button>3</button></router-link>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
    .container{
        width 100%
        height 50px
        /*border 1px red solid*/
    }
    .page{
        width 200px
        display flex
        flex-direction row
        margin 0 auto 20px
        /*border 1px red solid*/
    }
    .page button{
        width 30px
        height 30px
        margin-right 30px
        background-color white
        border-radius: 3px;
        outline none
        padding 0
        border: 1px solid #979797
        cursor pointer
    }
</style>