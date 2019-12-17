import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalCenter from '../views/PersonalCenter'
import VideoPage from '../views/VideoPage'
import Home from '../views/Home'
import LoginPage from '../components/LoginPage/LoginPage'
import registerPage from '../views/registerPage'
import VueResource from 'vue-resource'
// import Vuex from 'vuex'

// Vue.use(Vuex)

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/PersonalCenter',
    name: 'PersonalCenter',
    component: PersonalCenter,
  },
  {
    path: '/VideoPage',
    name: 'VideoPage',
    component: VideoPage,
  },
  {
    path: '/registerPage',
    name: 'registerPage',
    component: registerPage,
  }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
