import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(ElementUI)
Vue.config.devtools = true;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = "Bearer " + token;

  return config;
});

Vue.filter('coolerMessage', function(value){
  return '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ' + value.toString() + ' (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

