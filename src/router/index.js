import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalCenter from '../views/PersonalCenter'
import VideoPage from "../views/VideoPage";
import Home from '../views/Home'
import LoginPage from '../components/LoginPage/LoginPage'
import registerPage from '../views/registerPage'
import CollectPage from '../views/CollectPage'
import HistoryPage from '../views/HistoryPage'
import HotPage from '../views/HotPage'
import LatestPage from '../views/LatestPage'
import WrapperPage from '../views/WrapperPage'
import Contribute from '../views/Contribute'
import RankingList from '../views/RankingList'
import Test from '../views/Test'

Vue.use(VueRouter);
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
  },
  {
    path: '/CollectPage',
    name: 'CollectPage',
    component: CollectPage,
  },
  {
    path: '/HistoryPage',
    name: 'HistoryPage',
    component: HistoryPage,
  },
  {
    path: '/HotPage',
    name: 'HotPage',
    component: HotPage,
  },
  {
    path: '/LatestPage',
    name: 'LatestPage',
    component: LatestPage,
  },
  {
    path: '/WrapperPage',
    name: 'WrapperPage',
    component: WrapperPage,
  },
  {
    path: '/Contribute',
    name: 'Contribute',
    component: Contribute,
  },
  {
    path: '/RankingList',
    name: 'RankingList',
    component: RankingList,
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
