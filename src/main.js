import Vue from "vue";
import App from "./App";
import Antd from "ant-design-vue";
import router from './router/index.js'
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);
Vue.config.productionTip = false;

Vue.use(Antd);
new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
