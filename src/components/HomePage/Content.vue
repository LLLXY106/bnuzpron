<template>
  <div id="content-container">
    <!-- 推荐视频 -->
    <div id="recommend-container">
      <div id="recommend-left">
         <!-- 轮播图 -->
        <div id="recommend-swiper">

        </div>
      </div>
      <div id="recommend-right">
        <div class="recommend-video"></div>
        <div class="recommend-video"></div>
        <div class="recommend-video"></div>
        <div class="recommend-video"></div>
      </div>
    </div>
    <!-- 分类视频 -->
    <div class="common-container">
      <div class="common-header">
        <i class="header-icon"></i>
        <div class="clear"></div>
        <span class="header-title">番剧</span>
      </div>
      <div class="animate">
        <div class="common-video" id="test">
          <a href="#">
            <div class="video-pic">
              <img src="../../assets/images/test-pic.jpeg" width="200px" height="130px" alt="test-video">
            </div>
            <p title="这是一个测测测测测测测测测测测试视频" class="video-title">这是一个测测测测测测测测测测测试视频</p>
          </a>
        </div>
        <div class="common-video" style="background-color: pink"></div>
        <div class="common-video" style="background-color: pink"></div>
      </div>
      <div class="maybe-pic">
        <div class="top">
          Made by 群聊(3)
        </div>
        <div class="bottom">
          <img src="../../assets/images/natsume.gif" width="260px" height="150px">
        </div>
      </div>
    </div>
    <!-- 分类视频 -->
    <div class="animate-container">
      <div class="animate-header">

      </div>
      <div class="animate">
        <div class="animate-video"></div>
        <div class="animate-video"></div>
        <div class="animate-video"></div>
      </div>
      <div class="maybe-pic">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="stylus" scoped>
  #content-container
    width 980px
    margin 0 auto
    #recommend-container
      padding-bottom 40px
      #recommend-left
        width 480px
        height 280px
        float left
        #recommend-swiper
          position relative
          width 100%;
          height 100%
          overflow hidden
          border-radius 4px
          background-color pink  //测试  显示位置
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
    .common-container
      width 980px
      float left
      clear both
      .common-header
        padding 0 0 15px
        height 40px
        .header-icon
          width 40px
          height 40px
          margin-right 10px
          margin-top -10px
          float left
          vertical-align center
          background-color black
          background-position -141px -75px
        .header-title
          font-size 24px
          line-height 24px
          font-weight 400
          margin-right 20px
          float left
      .animate
        width 720px
        height 198px //168px
        overflow hidden
        display inline
        .common-video
          width 200px
          height 178px
          margin 0 30px 20px 0
          position relative
          font-size 12px
          overflow hidden
          float left
          border-radius 4px
          // background-color pink  //测试  显示位置
          .video-pic:hover .video-title
            color blue
          .common-video img
            margin 0 auto 
          .video-title
            padding-top 8px
            height 48px
            line-height 20px
            color black 
            font-size 14px
            word-wrap break-word
            word-break break-all
            overflow hidden
            text-align left 
      .maybe-pic
        width 260px
        float right
        .top
          height 34px
          padding 0 6px
          line-height 34px 
          text-align center
          display block
          background #e5e9ef
        .bottom
          width 260px
          height 150px
          position relative
          margin-top 10px
          border-radius 4px
          overflow hidden
</style>