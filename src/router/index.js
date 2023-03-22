import { createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
    path:'/home',
    name:'home',
    component:()=>import('../views/component/home/index.vue')
    },
    {
    path:'/detail/:id',
    name:'detail',
    component:()=>import('../views/component/detail.vue')
    },
    {
        path:'/search',
        name:'search',
        component:()=>import('../views/component/search.vue')
    },
    {
        path:'/shopping',
        name:'shopping',
        component:()=>import('../views/component/shopping.vue')
    },
    {
        path:'/mine',
        name:'mine',
        component:()=>import('../views/component/mine.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes:routes
})

export default router