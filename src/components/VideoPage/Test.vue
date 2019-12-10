<template>
    <div id="test">
        {{msg}}
        <button @click="run()">@click事件触发</button>
        <button v-on:click="runvon()">v-on:click事件触发</button>
        <button @click="getMsg()">获取data.msg</button>
        <button v-on:click="setMsg()">设置data.msg</button>
        <ul>
            <li v-for="item in list">{{item}}</li>
        </ul>
        <button @click="setList()">设置List的值</button>
        <button @click="sendData('123')">方法传值</button>
        <button v-on:click="sendEvent($event)">传递事件对象</button>
        <button @click="sendEventSet($event)">传递事件对象，并设置背景色</button>
        <button data-a="啦啦啦" @click="sendEventData($event)">传递事件对象，并获取自定义属性</button>
    </div>
</template>

<script>
    export default {
        name: 'test',
        data () {
            return {
                msg: '123',
                list:[]
            }
        },
        methods:{
            run(){
                alert("@click事件触发")
            },
            runvon(){
                alert("v-on:click事件触发")
            },
            getMsg(){
                alert("我获取到了msg"+this.msg);
            },
            setMsg(){
                this.msg="我是设置后的值"
            },
            setList(){
                for(var i = 0 ; i < 10 ; i++){
                    this.list.push(i)
                }

            },
            sendData(a){
                alert("穿过来的值是："+a)
            },
            sendEvent(e){
                console.log(e);
            },
            sendEventSet(e){
                e.srcElement.style.background="red";
            },
            sendEventData(e){
                alert(e.srcElement.dataset.a)

            }
        }
    }
</script>

<style lang="scss">

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
