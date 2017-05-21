import Vue from 'vue';
import VueRouter from 'vue-router';
import config from '../config'

Vue.use(VueRouter);
const router = new VueRouter({
    mode:config.routeMode||'hash',//hash 打包需要使用hash 无#： history
    routes: [
        {//前台路由配置
            name:'site',
            path:'/',
            component:require('../pages/root'),
            children:[
                {name:'home',path:'home',component:require('../pages/home')},
                {path:'about',component:require('../pages/about')},
                {path:'article/:type',component:require('../pages/article')},
                {name:'detail',path:'article/:type/:id',component:require('../pages/detail')},
            ] ,
            redirect:'/home' 
        },
        {
            name:'admin', 
            path: '/admin',  
            component: require('../admin/root'),
            children:[
                {
                    path: '/',  component: require('../admin/welcome')
                },
                {
                    path: 'welcome',  component: require('../admin/welcome')
                },
                {
                    path: 'article/:type',  component: require('../admin/article')
                },
                {
                    path:'article/:type/edit/:id',component:require('../admin/editArticle')
                },
                {
                    path: 'setting/:type',  component: require('../admin/setting')
                }
            ]
        },  
    ]
})

router.beforeEach((to, from, next) => {
    console.log(`路由到：${to.path}`)
    next();
});

router.afterEach(route => {
    
})
export default router