<template>
  <div>
    <div class="common-video" id="test">
        <a v-bind="{href:'/VideoPage?id='+item.id}">
            <div class="video-pic">
                <img :title="item.title" :src="item.headsrc" width="200px" height="130px" alt="test-video">
            </div>
            <p :title="item.title" class="video-title">{{item.title}}</p>
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
    toVideo(num) {
      window.location.href = 'VideoPage?id=' + num;
    }
  }
}
</script>

<style lang="stylus" scoped>
  .common-video
    width 200px
    height 178px
    margin 0 30px 20px 0
    position relative
    font-size 12px
    overflow hidden
    float left
    border-radius 4px

    .video-title
        padding-top 8px
        height 48px
        line-height 18px
        color black
        font-size 14px
        word-wrap break-word
        word-break break-all
        overflow hidden
        text-align left
  .common-video:hover >>> .video-title
    color blue
</style>