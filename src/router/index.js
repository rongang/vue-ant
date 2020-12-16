import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import { constantRouterMap } from '@/config/router.config'
NProgress.configure({ showSpinner: false }) // NProgress Configuration
// hack router push callback
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
	if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
	return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const constantRouterMap = [
	{
		path: '/',
		redirect: '/home',
		component: () => import('../layout/baselayout.vue'),
		children: [
			{
				path: 'home',
				component: () => import('../views/home.vue'),
				meta: {
					title: '主页',
				}
			},
			{
				path: 'general/button',
				redirect: to => {
					console.log(to)
					const { hash, params, query } = to
					console.log(query)
					console.log(params)
					console.log(hash)
				},
				component: () => import('../views/general/VueButton.vue'),
				meta: {
					title: '按钮',
					type: 'general'
				}
			},
			{
				path: 'general/icon',
				component: () => import('../views/general/VueIcon.vue'),
				meta: {
					title: '图标',
					type: 'general'
				}
			},
			{
				path: 'statement',
				component: () => import('../views/statement/StateMent.vue'),
				meta: {
					title: '状态管理',
				}
			},
			{
				path: 'localstore',
				component: () => import('../views/localstore/LocalStore.vue'),
				meta: {
					title: '本地存储',
				}
			},
			{
				path: 'weather',
				component: () => import('../views/axios/Weather.vue'),
				meta: {
					title: '天气中心',
				}
			},
		]
	},
	{
		path: '/login',
		component: () => import('../views/user/login.vue'),
		meta: {
			type: 'user'
		}
	},
	{
		path: '/reload',
		component: () => import('../layout/blanklayout.vue'),
	},






	// {
	//   path: '/test',
	//   component: BlankLayout,
	//   redirect: '/test/home',
	//   children: [
	//     {
	//       path: 'home',
	//       name: 'TestHome',
	//       component: () => import('@/views/Home')
	//     }
	//   ]
	// },

	// {
	//   path: '/404',
	//   component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
	// }

]
const router = new VueRouter({
	mode: 'history',
	// base: process.env.BASE_URL,
	// scrollBehavior: () => ({
	// 	y: 0
	// }),
	routes: constantRouterMap
})

router.beforeEach((to, from, next) => {
	NProgress.start()
	console.log(to)
	document.title = 'vue-ant - ' + (to.meta && to.meta.title)
	// console.log(process.env.VUE_APP_TITLE)
	setTimeout(() => {
		NProgress.done()
		next()
	}, 200);

})
// router.afterEach((to,from)=>{
// 	console.log('afterEach')
// 	console.log(to)
// 	console.log(from)
// })


export default router