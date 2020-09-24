<template>
	<a-layout>
		<a-layout-sider class="slider" theme="light" v-model="collapsed" :trigger="null" collapsible>
			<div class="logo">
				<h4 class="logotitle">
					<span v-show="collapsed"><a-icon type="smile" theme="outlined" /></span>
					{{ collapsed ? '' : 'Ant-Vue' }}
				</h4>
			</div>
			<a-menu theme="light" mode="inline" :default-selected-keys="['1-2']" :default-open-keys="['1']">
				<a-sub-menu key="1">
					<span slot="title">
						<a-icon type="fire" />
						<span>通用</span>
					</span>
					<a-menu-item key="1-1"><router-link to="/general/button" tag="div">按钮</router-link></a-menu-item>
					<a-menu-item key="1-2"><router-link to="/general/icon" tag="div">图标</router-link></a-menu-item>
				</a-sub-menu>
				<a-menu-item key="2">
					<a-icon type="video-camera" />
					<span>nav 2</span>
				</a-menu-item>
				<a-menu-item key="3">
					<a-icon type="upload" />
					<span>nav 3</span>
				</a-menu-item>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header style="background: #fff; padding: 0">
				<a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
				
				<p>
					<router-link to="/user/foo">/user/foo</router-link><br />
					<router-link to="/user/foo/profile">/user/foo/profile</router-link><br />
					<router-link to="/user/foo/posts">/user/foo/posts</router-link>
				</p>
				<router-view></router-view>
				<!-- <vue-button></vue-button> -->
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>
<script>
// import VueButton from '../views/general/VueButton.vue';
export default {
	name: 'baselayout',
	data() {
		return {
			collapsed: false
		};
	},
	components: {
		// VueButton
	},
	created() {
		console.log('created');
		console.log(this.$route);
	}
};
</script>
<style>
.trigger {
	font-size: 18px;
	line-height: 64px;
	padding: 0 24px;
	cursor: pointer;
	transition: color 0.3s;
}
.logotitle {
	font-size: 32;
	color: black;
	text-align: center;
	line-height: 32px;
}

.trigger:hover {
	color: #1890ff;
}

.logo {
	align-items: center;
	height: 32px;
	background: rgba(255, 255, 255, 0.2);
	margin: 16px;
}
.slider {
	height: 100vh;
}
</style>
