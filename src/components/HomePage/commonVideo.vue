<template>
  <div>
    <div class="recommend-video">
      <a v-bind="{href:'/VideoPage?id='+item.id}">
        <img :title="forTitle(item.title)" @click="toVideo(item.id)" :src="forSrc(item.src)"  width="208" height="130">
        <div class="mark">
          <p :title="forTitle(item.title)" class="title">{{item.title}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
		item: {
			type: Object,
			required: true
		}
  },
  methods: {
    forSrc(src) {
      return src;
    },
    forTitle(tit) {
      return tit;
    },
    toVideo(num) {
      console.log("avc");
      window.location.href = 'VideoPage?id=' + num;
      // this.$router.push({name:'VideoPage',query: {id:'1'}})
    }
  }
}
</script>

<style lang="stylus" scoped>
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