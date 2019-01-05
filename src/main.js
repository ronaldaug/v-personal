import Vue from 'vue'
import App from './App.vue'
import  'font-awesome/css/font-awesome.min.css';


// import Personal from 'personal'; 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
