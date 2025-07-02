import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/home/index.vue'),
    },

    {
        path: '/projects',
        name: 'Projects',
        component: () => import('@/pages/projects/index.vue'),
    },

    {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/pages/contact/index.vue'),
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
