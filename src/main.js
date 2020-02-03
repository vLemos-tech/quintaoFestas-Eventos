import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify";
import vuetify from './plugins/vuetify';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import "vuetify/dist/vuetify.min.css";
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false

Vue.use(Vuetify);
Vue.use(VueAwesomeSwiper);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

