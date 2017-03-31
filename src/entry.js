import Index from './index.vue'
import * as filters from './filters'
import store from './store'
import mixins from './mixins'


Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.mixin(mixins)

var vm = new Vue(Vue.util.extend(
	{ el: '#root',
	store,
	}, Index))
