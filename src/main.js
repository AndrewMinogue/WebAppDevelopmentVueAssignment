import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store'
import VueSweetAlert2 from 'vue-sweetalert2'
import firebase from 'firebase'
import Vuetify from 'vuetify'

Vue.use(VueSweetAlert2)
Vue.use(BootstrapVue)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App,
  },
  created(){
    firebase.initializeApp({
      apiKey: '',
      authDomain: 'vueassingment2.firebaseapp.com',
      databaseURL: 'https://vueassingment2.firebaseio.com',
      projectId: 'vueassingment2',
      storageBucket: ''
    })
  },
  template: '<App/>'
})

