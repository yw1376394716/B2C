import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: '登录页',
			redirect: '/Login_'
		},		
		{
			path: '/Login',
			name: '登录页(注册)',
			component: resolve => require(['../components/Login.vue'], resolve),
		},
		{
			path: '/Login_',
			name: '登录页(登陆中心)',
			component: resolve => require(['../components/Login_.vue'], resolve),
		},	
		{
            path: '/Home',
            name: '主页',
			component: resolve => require(['../components/Home.vue'], resolve),
			children:[
				{
					path: '/index',
					name: '首页',
					component: resolve => require(['../components/index.vue'], resolve)
				},
			]
		}
	]
})
