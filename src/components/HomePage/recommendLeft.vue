<template>
  <!-- 轮播图 -->
  <div id="recommend-left">
    <div id="recommend-swiper">
      <home-swiper></home-swiper>
    </div>
  </div>
</template>

<script>
import HomeSwiper from './swiper'
export default {
  name: 'recommendLeft',
  components: {
    HomeSwiper
  }
}
</script>

<style lang="stylus" scoped>
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
</style>