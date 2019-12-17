<template>
    <div>
        <button @click="fun">test</button>
        <div class="itemlist">
            <div class="item" v-for="item in collect" :key="item">
                <div class="img">
                    <img :src="item.vimg" style="width: 188px;height: 119px"/>
                </div>
                <div class="intro">
                    <div class="vname">{{item.vname}}</div>
                    <div class="author">创建者：LL_XY106</div>
                    <div class="detail">{{item.type}}</div>
                    <button>点我</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                collect: [
                    {
                        id: "001",
                        vimg: require("../../assets/images/jzy.png"),
                        vname: "电影《姜子牙》预告",
                        type: "公开"
                    },
                    {
                        id: "002",
                        vimg: require("../../assets/images/bg2.jpg"),
                        vname: "新海诚《天气之子》",
                        type: "公开"
                    },
                    {
                        id: "003",
                        vimg: require("../../assets/images/neko.jpg"),
                        vname: "neko neko！",
                        type: "仅我可见"
                    }
                ]
            }
        },
        mounted() {

        },
        methods: {
            fun() {
                var url = "/api/collect";
                this.$http.get(url, {
                }, {}).then(function (data) {
                    alert(data.body);
                    console.log(data);
                }, function (response) {
                    console.log(response);
                })
            }
        }

    }
</script>
<style lang="stylus" scoped>
    .itemlist {
        width 910px
        height 160px
        /*border-bottom  1px #E4E4E4 solid*/
    }

    .img {
        width 188px
        height 119px
        /*max-width 100%*/
        /*max-height 100%*/
        border-radius 5px
        margin-right 20px
    }

    .item {
        display flex
        flex-direction row
        padding 20px
        /*border 1px red solid*/
        border-bottom 1px #E4E4E4 solid
    }

    .vname {
        font-size 14px
        margin-bottom 20px
    }

    .author {
        font-size 12px
        color #979797
        margin-bottom 10px
    }

    button {
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

    .detail {
        font-size 12px
        color #979797
        margin-bottom 20px
    }
</style>