import Vue from 'vue';
import router from './router';
import App from './App.vue';
import VueToasted from 'vue-toasted';

Vue.config.productionTip = false;

//load vue toasted
Vue.use(VueToasted, {
  iconPack: 'fontawesome'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
