import Vue from 'vue'
import VueRouter from 'vue-router'

// import { constantRouterMap } from '@/config/router.config'

// hack router push callback
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location, onResolve, onReject) {
// 	if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
// 	return originalPush.call(this, location).catch(err => err)
// }
Vue.use(VueRouter)
const UserHome = {
	template: '<div>Home</div>'
}
const UserProfile = {
	template: '<div>Profile</div>'
}
const UserPosts = {
	template: '<div>Posts</div>'
}
const User = {
	template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}
const router = new VueRouter({
	mode: 'history',
	// base: process.env.BASE_URL,
	// scrollBehavior: () => ({
	// 	y: 0
	// }),
	beforeRouteEnter (to, from, next) {
		console.log(to)
		console.log(from)
		console.log(next)
	},
	beforeEnter: (to, from, next) => {
		console.log(to)
		console.log(from)
		console.log(next)
	},
	routes: constantRouterMap
})

const constantRouterMap = [
	// {
	// 	path: '/',
	// 	component: () => import('../views/Home.vue'),
	// },
	// {
	// 	path: '/general/button',
	// 	// name: 'button',
	// 	component: () => import('../views/general/VueButton.vue')
	// },
	// {
	// 	path: '/general/icon',
	// 	// name: 'icon',
	// 	component: () => import('../views/general/VueIcon.vue')
	// },



	{
		path: '/user/:id',
		component: User,
		children: [
			// UserHome will be rendered inside User's <router-view>
			// when /user/:id is matched
			{
				path: '',
				component: UserHome
			},

			// UserProfile will be rendered inside User's <router-view>
			// when /user/:id/profile is matched
			{
				path: 'profile',
				component: UserProfile
			},

			// UserPosts will be rendered inside User's <router-view>
			// when /user/:id/posts is matched
			{
				path: 'posts',
				component: UserPosts
			}
		]
	}





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
export default router