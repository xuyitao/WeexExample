import App from './components/foo.vue'
import Counter from './components/Counter.vue'
import CounterStore from './components/CounterStore.vue'
import * as filters from './filters'
import store from './store'



Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


var vm = new Vue(Vue.util.extend(
	{ el: '#root',
	store,
	}, CounterStore))

// console.log(Vue.util.extend({ el: '#root'}, App));
