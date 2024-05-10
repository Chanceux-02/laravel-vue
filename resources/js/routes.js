// routes.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue';
import Jobs from './components/Jobs.vue';
import About from './components/About.vue';

const routes = [
    {path: '/home', component: Home},
    {path: '/Jobs', component: Jobs},
    {path: '/about', component: About},
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
export default router

