<template id="default">
    <div>
        <!--<button @click="collectlist">test</button>-->
        <div class="itemlist">
            <!--<div class="item" v-for="item in collect" :key="item">-->
            <div class="item" v-for="(items,i) in collect" :key="i">
                <div class="imgcontainer">
                    <img :src="items.v_pic" style="width: 188px;height: 119px"/>
                </div>
                <div class="info">
                    <div class="vname">{{items.vname}}</div>
                    <div class="intro">
                        <div class="author">创建者：{{items.username}}</div>
                        <div class="detail">{{items.type}}</div>
                        <button>立即播放</button>
                    </div>
                </div>
                <div class="icon">
                    <i :id="items.id" class="fa fa-trash-o" aria-hidden="true" style="font-size: 20px;cursor: pointer;color: #fa5a57" @click="del($event)"></i>
                </div>
                <!--<p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken-->
                    <!--meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>-->
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                collect:[],
                isLogin: false
            }
        },
        mounted(){

        },
        methods: {
            collectlist(){
                if(!this.isLogin){
                    alert("你还没有登录不能查看收藏夹噢~")
                }else{
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
            },
            del(event){
                var test = event.currentTarget.id;
                // console.log(test);
                if(confirm("确定要删除此收藏内容吗？")){
                    var url = "/api/delcollect";
                    this.$http.get(url, {
                        params:{
                            id: test
                        }

                    }, {}).then(function (data) {
                        console.log(data);
                    }, function (response) {
                        console.log(response);
                    })
                }
                else
                    return;
            }
        },
        created(){
            //通过Cookies判断登录状态
            if (this.$cookies.get("username") != null && this.$cookies.get("password") != null) {
                // console.log(this.$cookies.get("username"), this.$cookies.get("password"));
                //改变登录状态
                this.isLogin = true;
            }
            this.collectlist();
        },

    }
</script>
<style lang="stylus" scoped>
    .itemlist {
        width 870px
        height 160px
        /*border-bottom  1px #E4E4E4 solid*/
    }

    .imgcontainer {
        width 20%
        height 119px
        /*max-width 100%*/
        /*max-height 100%*/
        border-radius 5px
        margin-right 20px
        /*border 1px red solid*/
    }
    .item {
        width 100%
        display flex
        flex-direction row
        /*border 1px red solid*/
        border-bottom 1px #E4E4E4 solid
        padding:14px 18px;
    }

    .vname {
        width 100%
        text-align left
        font-size 14px
        margin-bottom 20px
        /*border 1px red solid*/
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
    .item:hover {
        box-shadow:0px 10px 13px -17px rgba(0,0,0,0.64);
        transform:scale(1.01);
        /*background-color #fffcff*/
        transform:translateX(0);

    }
    .item:hover:before {
        opacity:0.5;
    }
    .item:before{
        opacity:0;
        transition:all 500ms cubic-bezier(0.47,0,0.745,0.715) 0s;
    }
    .intro{
        /*border 1px red solid*/
        text-align left
    }
    .info{
        display flex
        flex-direction column
        width 70%
        padding-left 20px
        /*border 1px red solid*/
    }
</style>