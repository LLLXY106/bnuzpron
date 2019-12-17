<template>
    <div>
        <!--<button @click="collectlist">test</button>-->
        <div class="itemlist">
            <!--<div class="item" v-for="item in collect" :key="item">-->
            <div class="item" v-for="(items,i) in collect" :key="i">
                <div class="img">
                    <!--<img :src="item.vimg" style="width: 188px;height: 119px"/>-->
                </div>
                <div class="intro">
                    <div class="vname">{{items.vname}}</div>
                    <div class="author">创建者：{{items.username}}</div>
                    <div class="detail">{{items.type}}</div>
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
                collect:[],
            }
        },
        created(){
          this.collectlist();
        },
        mounted() {
        },
        methods: {
            collectlist(){
                var url = "/api/collect";
                this.$http.get(url, {
                }, {}).then(function (data) {
                    // this.vname = data.body[0].vname;
                    // this.username = data.body[0].username;
                    // this.type = data.body[0].type;
                    this.collect=data.body;
                    // alert(data.body[0].type);
                    // alert(data.body[0].vname);
                    // alert(data.body[0].username);
                    console.log(data.body);
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