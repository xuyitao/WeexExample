import App from './App.vue'
import Hello from './components/Hello.vue'
import * as filters from './filters'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'


sync(store, router)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


var vm = new Vue(Vue.util.extend(
	{ el: '#root',
	store,
	router,
	}, Hello))

// console.log(Vue.util.extend({ el: '#root'}, App));
