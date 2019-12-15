<template>
    <div class="all-item">
        <TopContainer></TopContainer>
        <div class="v_left">
            <a>{{title}}</a>
            <a>({{area}}>{{type}})</a>
            <Video></Video>
        </div>
        <div class="v_right">
            <a>相关推荐</a><br>
            <img src="/img/PersonalCenter/1.jpg" style="width: 200px;height: 100px" @click="video1()"><br>
            <img src="/img/PersonalCenter/2.jpg" style="width: 200px;height: 100px" @click="video2()"><br>
            <img src="/img/PersonalCenter/3.jpg" style="width: 200px;height: 100px">
        </div>
    </div>
</template>



<script>
    import TopContainer from '../components/common/TopContainer'
    import Video from '../components/VideoPage/Video'
    import Introduction from '../components/VideoPage/Introduction'
    import msg from '../components/VideoPage/msg';

    export default {
        name: "VideoPage",
        data() {
            return {
                title:'【猛男版】新 宝 岛',
                area:'舞蹈',
                type:'宅舞',
            }
        },

        components: {
            TopContainer,
            Video,
            Introduction
        },

        methods:{
            video1:function () {
                msg.$emit("id","1");
            },
            video2:function () {
                msg.$emit("id","2");
            }
        }

    }
</script>

<style lang="stylus" scoped>
    * {
        padding: 0;
        margin: 0;
    }
    .v_left{
        display: flex;
        flex-direction column
        width: 60%;
        /*height: 100%;*/
        height 1200px
        float: left;

    }

    .v_left a{
        /*float: left;*/
        font-size: 20px;
        /*margin-left: 100px;*/

        line-height: 130px;
        color: black;
        font-weight:bold;
        height: 50px;
    }

    .v_right{
        width: 40%;
        float: right;
        height: 100%;
    }

    .v_right a{
        text-align: center;
        /*float: right;*/
        font-size: 18px;
        line-height: 130px;
        color: black;
        font-weight:bold;
        height: 50px;
    }
</style>

<!--<template>-->
<!--    <div>-->
<!--        <ul>-->
<!--            <li v-for = " (item,index) in list" v-text='`${item} - ${index} `'></li>-->
<!--        </ul>-->
<!--        <button @click="change3">改变数组第2个值,改成0</button>-->
<!--        <button @click="change4">改变数组第2个值,改成5</button>-->
<!--    </div>-->
<!--</template>-->
<!--<script>-->
<!--    import Vue from 'vue'-->
<!--    export default {-->
<!--        data () {-->
<!--            return {-->
<!--                list : [ 1, 2, 3, 4],-->
<!--                list2 : [ 7, 8, 9, 0 ]-->
<!--            }-->
<!--        },-->
<!--        methods : {-->
<!--            //通过下标来改变整个数组里的值也是行不通的-->
<!--            changeList () {-->
<!--                this.list[2] = 3-->
<!--            },-->
<!--            //通过数组长度改变改个数组里的值是行不通的-->
<!--            changeList2 () {-->
<!--                this.length = 1-->
<!--            },-->
<!--            //第一我们可以通过，vue.set实列方法来改变，但我们要在开头再引一入下vue包-->
<!--            // 1 第一个值代表需要改变的数组-->
<!--            // 2 第二个代表改变那一项-->
<!--            // 3 第三个代表改成什么值-->
<!--            //样式语法 Vue.set(example1.items, indexOfItem, newValue)-->
<!--            change3 () {-->
<!--                Vue.set(this.list,1,0)-->
<!--            },-->
<!--            //通过 Array.prototype.splice 数组原型上的方法来改变整个数组的长度或者内容-->
<!--            //这个方法大家肯定常用，我就不细说了-->
<!--            change4 () {-->
<!--                this.list.splice(1,1,5)-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->
