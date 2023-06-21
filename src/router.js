import { createRouter, createWebHistory } from "vue-router"
import About from './views/About.vue'
import Experiences from './views/Experiences.vue'

const routes = [
	{ path: '/', name: 'Home', component: About },
	{ path: '/about', name: 'About', redirect: { name: 'Home'} },
	{ path: '/experiences', name: 'Experiences', component: Experiences },
]

const router = createRouter({
	history: createWebHistory(),
	routes, 
})

export default router;