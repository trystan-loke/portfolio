import { createRouter, createWebHistory } from "vue-router"
import About from './views/About.vue'

const routes = [
	{ path: '/', name: 'Home', component: About },
	{ path: '/about', name: 'About', redirect: { name: 'Home'} },
]

const router = createRouter({
	history: createWebHistory(),
	routes, 
})

export default router;