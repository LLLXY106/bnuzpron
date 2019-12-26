import Vue from 'vue'
import VueRouter from 'vue-router'
import VideoPage from "../views/VideoPage";
import Home from '../views/Home'
import LoginPage from '../components/LoginPage/LoginPage'
import registerPage from '../views/registerPage'
import CollectPage from '../views/CollectPage'
import HotPage from '../views/HotPage'
import LatestPage from '../views/LatestPage'
import WrapperPage from '../views/WrapperPage'
import CompleteInfo from '../views/CompleteInfo'
import ShowInfo from '../views/ShowInfo'
import ModifyInfo from '../views/ModifyInfo'
import ModifyPhoto from '../views/ModifyPhoto'
import videoManagePage from '../views/videoManagePage'
import Contribute from '../views/Contribute'
import RankingList from '../views/RankingList'
import Test from '../views/Test'
import adminPage from '../views/adminPage'
import commentManagePage from '../views/commentManagePage'


import VueResource from 'vue-resource'
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueRouter);


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
        path: '/adminPage',
        name: 'adminPage',
        component: adminPage
    },
    {
        path: '/CompleteInfo',
        name: 'CompleteInfo',
        component: CompleteInfo,
    },
    {
        path: '/ShowInfo',
        name: 'ShowInfo',
        component: ShowInfo,
    },
    {
        path: '/ModifyInfo',
        name: 'ModifyInfo',
        component: ModifyInfo
    },
    {
        path: '/ModifyPhoto',
        name: 'ModifyPhoto',
        component: ModifyPhoto
    },
    {
        path: '/videoManagePage',
        name: 'videoManagePage',
        component: videoManagePage
    },
    {
        path: '/commentManagePage',
        name: 'commentManagePage',
        component: commentManagePage
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
