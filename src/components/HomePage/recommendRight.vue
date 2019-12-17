<template>
  <div id="recommend-right">
    <div class="recommend-video">
      <a href="#">
        <img title="星之声" @click="toVideo(1)" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575472262381&di=226fb6a8943a4b65665bc12adf9d110d&imgtype=0&src=http%3A%2F%2Fwww.005.tv%2Fuploads%2Fallimg%2F160704%2F16-160F41A246208.png" width="208" height="130">
        <div class="mark">
          <p title="星星星星星星星星星之声" class="title"  >星星星星星星星星星之声</p>
        </div>
      </a>
    </div>
    <div class="recommend-video">
    </div>
    <div class="recommend-video">
    </div>
    <div class="recommend-video">
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommendRight',
  components: {

  },
  methods:{
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
    .recommend-video
      width 208px //209px
      height 130px
      position relative
      overflow hidden
      float left
      margin 0 0 20px 40px
      border-radius 4px
      background-color pink  //测试  显示位置
      .mark
        position absolute
        left 0
        top 100px
        width 198px
        height 20px
        font-size 14px
        line-height 20px
        padding 10px 5px
        overflow hidden
        .title
          color white
          height 40px
          overflow hidden
          margin-bottom 5px
          word-break break-all
          word-wrap break-word
</style>
