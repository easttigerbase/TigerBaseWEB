import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from "vue-router";
import index from './routes/index'
import {store} from './store/index'
Vue.config.productionTip = false
Vue.use(VueRouter)


new Vue({
  vuetify,
  store:store,
  render: h => h(App),
  router:index
}).$mount('#app')
