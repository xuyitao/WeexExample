import App from './App.vue'
import Hello from './views/Hello.vue'
import * as filters from './filters'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import mixins from './mixins'

sync(store, router)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.mixin(mixins)

var vm = new Vue(Vue.util.extend(
	{ el: '#root',
	store,
	router,
	}, App))

router.push('/')

// console.log(Vue.util.extend({ el: '#root'}, App));
