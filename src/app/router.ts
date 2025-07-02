import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/home/Home.vue'),
    },

    {
        path: '/projects',
        name: 'Projects',
        component: () => import('@/pages/projects/Projects.vue'),
    },

    {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/pages/contact/Contact.vue'),
    },
]

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})
