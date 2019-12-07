<template>
  <!-- 推荐视频 -->
  <div id="recommend-container">
    <recommend-left></recommend-left>
    <recommend-right></recommend-right>
  </div>
</template>

<script>
import recommendLeft from './recommendLeft'
import recommendRight from './recommendRight'
export default {
  name: 'RecommendVideo',
  components: {
    recommendLeft,
    recommendRight
  }
}
</script>

<style lang="stylus" scoped>
  #recommend-container
    padding-bottom 40px
</style>