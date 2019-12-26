import Vue from 'vue';
import Vuex from 'vuex'
import App from './App.vue';
import router from './router';
import VueVideoPlayer from "vue-video-player/src";
import VueAwesomeSwiper from 'vue-awesome-swiper';
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
import 'videojs-flash'// 引入才能播放rtmp视频
import 'videojs-contrib-hls' // 引入才能播放m3u8文件
import $ from 'jquery'
import '@/assets/css/public.css'
import 'swiper/dist/css/swiper.css'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import './plugins/element'
import VueCookies from 'vue-cookies'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import global from './components/common/Global'

Vue.use(VueCookies);
Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.prototype.axios = axios;
Vue.use(ElementUI);
Vue.prototype.$global = global;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
