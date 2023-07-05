import { createRouter, createWebHistory } from "vue-router"
import About from './views/About.vue'
import Experiences from './views/Experiences.vue'
import ErrorPage from './views/Error.vue'

const routes = [
	{ path: '/', name: 'Home', component: About },
	{ path: '/about', name: 'About', redirect: { name: 'Home'} },
	{ path: '/experiences', name: 'Experiences', component: Experiences },
	{ path: '/:catchAll(.*)', name: 'ErrorPage', component: ErrorPage, props: { code: 404, title: 'Page not found', description: `The page you are looking for can't be found.` } }
]

const router = createRouter({
	history: createWebHistory(),
	routes, 
})

export default router;