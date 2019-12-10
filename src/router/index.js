import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalCenter from '../views/PersonalCenter'
import VideoPage from '../views/VideoPage'
import Home from '../views/Home'
import LoginPage from '../components/LoginPage/LoginPage'
import registerPage from '../views/registerPage'
import Test from '../components/VideoPage/Test'

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
        path: '/Test',
        name: 'Test',
        components: Test,
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
