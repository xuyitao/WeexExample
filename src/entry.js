import App from './App.vue'
import Counter from './components/Counter.vue'
import CounterStore from './components/CounterStore.vue'
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
	}, App))

// console.log(Vue.util.extend({ el: '#root'}, App));
