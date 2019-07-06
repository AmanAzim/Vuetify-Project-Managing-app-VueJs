import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip);

Vue.config.productionTip = false;

export const eventBus=new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
