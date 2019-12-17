<template>
    <div>
        <TopContainer></TopContainer>
        <div class="main">
            <div class="tabs">
                <Tabs></Tabs>
            </div>
            <div class="right">
                <div class="nav"></div>
                <div class="top">
                    <div class="head-img"><img src="/img/PersonalCenter/head.jpg"/></div>
                    <div class="img-left">
                        <div class="name"><span>LLL_XY106</span></div>
                        <div class="intro"><span>升级会员专享更多特权嗷</span></div>
                    </div>
                    <div class="btn">
                        <button>开通会员</button>
                        <button>赠送</button>
                    </div>
                </div>
                <div class="middle">
                    <Middle></Middle>
                </div>
                <div class="buttom"></div>
            </div>
        </div>
    </div>

</template>
<style lang="stylus" scoped>
    .main {
        margin: 30px auto 0;
        width: 70%;
        height: 800px;
        /*border: 1px solid black;*/
        display: flex;
        flex-direction: row;
        /*box-shadow:0 0 5px #000 inset;*/
        -moz-box-shadow: 2px 2px 8px #909090;
        -webkit-box-shadow: 2px 2px 8px #909090;
        box-shadow: 2px 2px 8px #909090;
    }

    .tabs {
        width: 20%;
        height: 100%;
        border-right: 1px solid #f5f5f5;
        /*border: 1px solid red;*/
    }

    .right {
        width: 80%;
        height: 100%;
        /*border: 1px solid green;*/
    }

    .nav {
        width: 100%;
        height: 50px;
        /*border: 1px solid blue;*/
        background-color: #f5f5f5;
    }

    .top {
        margin: 0 auto;
        width: 95%;
        height: 15%;
        border-bottom: 1px solid #f5f5f5;
        display: flex;
        flex-direction: row;
    }

    .head-img {
        margin: auto 0;
        width: 50px;
        height: 50px;
    }

    .head-img img {
        width: 50px;
        height: 50px;
    }

    .img-left {
        margin: auto 0;
        width: 180px;
        height: 48px;
        /*border: 1px solid blue;*/
    }

    .name {
        margin-bottom: 5px;
    }

    .name span {
        font-size: 24px;
        color: #222;
        line-height: 24px;
        font-weight: 700;
    }

    .intro span {
        font-size: 12px;
        color: #99a2aa;
        line-height: 12px;
    }

    .btn {
        padding-top: 50px;
        /*border: 1px solid blue;*/
        margin-left: 240px;
    }

    .btn button {
        padding: 0;
        width: 70px;
        height: 30px;
        border: 1px solid transparent;
        margin-right: 20px;
        outline: none;
        background-color: #59bde9;
        border-radius: 10px;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
        line-height: 14px;
    }

    .middle {
        margin: 0 auto;
        width: 95%;
        height: 25%;
        border: 1px solid blue;
    }

    .buttom {
        margin: 0 auto;
        width: 95%;
        height: 30%;
        border: 1px solid pink;
    }
</style>
<script type="text/javascript">
    import TopContainer from '../components/common/TopContainer'
    import Tabs from '../components/PersonalCenterPage/Tabs'
    import Middle from '../components/PersonalCenterPage/Middle'

    export default {
        components: {
            Tabs,
            Middle,
            TopContainer
        }
    }
</script>


