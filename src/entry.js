import App from './components/foo.vue'
import Counter from './components/Counter.vue'
import CounterStore from './components/CounterStore.vue'

import store from './store'

var vm = new Vue(Vue.util.extend(
	{ el: '#root',
	store,
	}, Counter))

// console.log(Vue.util.extend({ el: '#root'}, App));
