import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueVideoPlayer from "vue-video-player/src";
import VueAwesomeSwiper from 'vue-awesome-swiper';
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
import 'videojs-flash';// 引入才能播放rtmp视频
import 'videojs-contrib-hls' ;// 引入才能播放m3u8文件
import $ from 'jquery';
import '@/assets/css/public.css';
import 'swiper/dist/css/swiper.css';
import axios from 'axios';
// import Vuex from 'vuex';
import VueCookies from 'vue-cookies'

Vue.use(VueCookies);
// Vue.use(Vuex);

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.prototype.axios = axios;

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
