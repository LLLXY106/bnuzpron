<template>
  <div id="recommend-right">
    <!-- <div class="recommend-video">
      <a href="#">
        <img title="星之声" @click="toVideo(1)" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575472262381&di=226fb6a8943a4b65665bc12adf9d110d&imgtype=0&src=http%3A%2F%2Fwww.005.tv%2Fuploads%2Fallimg%2F160704%2F16-160F41A246208.png" width="208" height="130">
        <div class="mark">
          <p title="星星星星星星星星星之声" class="title">星星星星星星星星星之声</p>
        </div>
      </a>
    </div> -->
    <commonVideo v-show="isdefault" v-for="(i,index) in tempList" :item="i" :key="index"></commonVideo>
    <!-- <div class="recommend-video">
      <a>
        <img :title="videoTitle" :src="video">
        <div class="mark">
          <p :title="videoTitle" class="title">{{msg}}</p>
        </div>
      </a>
    </div>
    <div class="recommend-video">
    </div> -->
  </div>
</template>

<script>
import commonVideo from './commonVideo'
export default {
  name: 'recommendRight',
  data(){
    return {
      isdefault: true,
      tempList:[],
      dataList: [
        {
          title: '首页',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577289121724&di=4294e5700483f480352f7efe9fa11578&imgtype=0&src=http%3A%2F%2Fwww.005.tv%2Fuploads%2Fallimg%2F160704%2F16-160F41A246208.png'
        },
        {
          title: '首页',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577289121724&di=4294e5700483f480352f7efe9fa11578&imgtype=0&src=http%3A%2F%2Fwww.005.tv%2Fuploads%2Fallimg%2F160704%2F16-160F41A246208.png'
        },
        {
          title: '首页',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577289121724&di=4294e5700483f480352f7efe9fa11578&imgtype=0&src=http%3A%2F%2Fwww.005.tv%2Fuploads%2Fallimg%2F160704%2F16-160F41A246208.png'
        },
        {
          title: '首页',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577289121724&di=4294e5700483f480352f7efe9fa11578&imgtype=0&src=http%3A%2F%2Fwww.005.tv%2Fuploads%2Fallimg%2F160704%2F16-160F41A246208.png'
        },
        {
          title: '首页',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577289798913&di=bd0dcd65954c577061156a82463f2d1d&imgtype=0&src=http%3A%2F%2Fpics1.baidu.com%2Ffeed%2Ffd039245d688d43f2b9ef37459037a1f0ef43b26.jpeg%3Ftoken%3D790b4a63424ff91158de106833f44ba6%26s%3D1DA4E8155E317A075CAD58D1030010B0'
        }
      ]
    }
  },
  created() {
    var url = "/api/videoList"
    this.$http.get(url).then(
      function(res) {
        var result = res.data;
        this.tempList = result;
        console.log(this.tempList);
        // console.log(result);
      }, function() {
        console.log("请求处理失败");
      }
    )
  },
  components: {
    commonVideo
  },
  methods:{
    gethead() {
      
    },
    toVideo(num) {
      window.location.href = 'VideoPage?id=' + num;
      // this.$router.push({name:'VideoPage',query: {id:'1'}})
    }
  }
}
</script>

<style lang="stylus" scoped>
  #recommend-right
    height 280px
    position relative
    overflow hidden
    
</style>
