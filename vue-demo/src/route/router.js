import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode:'history',
    routes: [
        {
            path:'*',
            redirect:'/index'
        },
        {
            path:'/index',
            name:'index',
            component:() => import(/* webpackChunkName: 'Index' */ '@/pages/index')
        }
    ]
})

export {
    router
}