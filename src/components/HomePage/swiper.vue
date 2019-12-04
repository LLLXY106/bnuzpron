<template>
  <!-- 轮播图 -->
  <div style="background: #eee">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // notNextTick: true,
        autoplay: true,
        speed: 4000,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        mousewheelControl : true,
        loop: true,
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img0.pconline.com.cn/pconline/1610/02/8427680_13_thumb.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575459915732&di=2c21d4643310b276a3eff3ab15ef1724&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F0eb30f2442a7d93390325735a64bd11372f001d9.jpg'
      }, {
        id: '0003',
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575286891138&di=89dedaee9f9895e7c50a0c9649b46779&imgtype=0&src=http%3A%2F%2Fr.sinaimg.cn%2Flarge%2Ftc%2Fmmbiz_qpic_cn%2F6546410de27219f6a3e1e976991f4dd8.jpg'
      }]
    }
  },
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.swiper
  //   }
  // },
  mounted() {
    this.swiper.slideTo(1, 1000, true);
  }
}
</script>

<style lang="stylus" scoped>
  .swiper-img
    width 100%
    height 280px
</style>