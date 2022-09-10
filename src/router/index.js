import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home.page.vue'
import About from '@/pages/about.page.vue'
import Nprogress from 'nprogress'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(() => {
    Nprogress.start();
});

router.beforeEach(() => {
    Nprogress.done();
});

export default router