import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueVideoPlayer from "vue-video-player/src";
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
import 'videojs-flash'
import 'videojs-contrib-hls'
import $ from 'jquery'
import '@/assets/css/public.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')