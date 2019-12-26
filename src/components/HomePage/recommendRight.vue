<template>
  <div id="recommend-right">
    <commonVideo v-for="(i,index) in tempList" :item="i" :key="index"></commonVideo>
  </div>
</template>

<script type="text/javascript">
import commonVideo from './commonVideo'
import Global from '../common/Global'
export default {
  name: 'recommendRight',
  data(){
    return {
      tempList:[]
    }
  },
  created() {
    var url = "/api/videoList";
    this.$http.get(url).then(
      function(res) {
        var result = res.data;
        this.tempList = result;
        console.log(this.tempList);
      }, function() {
        console.log("请求处理失败");
      }
    )
  },
  components: {
    commonVideo
  },
  methods:{
    toVideo(num) {
      window.location.href = 'VideoPage?id=' + num;
      // this.$router.push({name:'VideoPage',query: {id:'1'}})
    }
  },
  watch: {
    // tempList: function(){
    //   return this.Global.tempList
    // }
  },
  // computed: {
  //   get () {
  //     return this.Global.tempList
  //   },
  //   set (tempList) {
  //     this.Global.tempList
  //   },tempList: function() {
  //     return this.Global.tempList
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  #recommend-right
    height 280px
    position relative
    overflow hidden

</style>
