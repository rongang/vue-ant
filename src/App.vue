<template>
	<!-- <div style="margin: 24px">
    <p style="margin-bottom: 24px">
      Current ant-design-vue version: {{ version }} <br />
      You can change ant-design-vue version on the left panel (Dependencies
      section).
    </p>
    <a-date-picker :defaultValue="moment()" />
  </div> -->
	
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
// import baselayout from './components/baselayout.vue';
import moment from 'moment';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import { version } from 'ant-design-vue';
export default {
	name: 'App',
	data() {
		return {
			moment,
			version
		};
	},
	components: {
		// baselayout
	},
	// created(){
	// 	this.$router.push('/home')
	// }
};
</script>

<style></style>
