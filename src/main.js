import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueVideoPlayer from "vue-video-player/src";
import VueAwesomeSwiper from 'vue-awesome-swiper'
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
import 'videojs-flash'// 引入才能播放rtmp视频
import 'videojs-contrib-hls' // 引入才能播放m3u8文件
import $ from 'jquery'
import '@/assets/css/public.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
