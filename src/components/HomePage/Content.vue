<template>
  <div id="content-container">
    <recommend-video></recommend-video>
    <animate-video></animate-video>
  </div>
</template>

<script>
// import HomeSwiper from './swiper'
import AnimateVideo from './animateVideo'
import RecommendVideo from './recommendVideo'
export default {
  name: 'Content',
  components: {
    // HomeSwiper,
    RecommendVideo,
    AnimateVideo
  }
}
</script>

<style lang="stylus" scoped>
  #content-container
    width 980px
    margin 0 auto
    
</style>