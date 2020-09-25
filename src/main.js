import Vue from "vue";
import App from "./App";
import store from './store/index.js';
import Antd from "ant-design-vue";
import router from './router/index.js'
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
