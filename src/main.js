import Vue from "vue";
import App from "./App";
import store from './store/index.js';
import Antd from "ant-design-vue";
import router from './router/index.js'
import 'bootstrap'
import "ant-design-vue/dist/antd.css";
import { Icon } from 'ant-design-vue';

Icon.setTwoToneColor('#ecf0f4');
Icon.getTwoToneColor(); // #eb2f96
Vue.use(Antd);
Vue.config.productionTip = false;
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
