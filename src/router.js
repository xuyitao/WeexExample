// import Vue from 'vue'
import Router from 'vue-router'
import CounterView from './components/Counter.vue'
import CounterSView from './components/CounterStore.vue'
import Hello from './components/Hello.vue'

Vue.use(Router)

// Story view factory
// function createStoriesView (type) {
//   return {
//     name: `${type}-stories-view`,
//     render (createElement) {
//       return createElement(StoriesView, { props: { type }})
//     }
//   }
// }
//
// export default new Router({
//   // mode: 'abstract',
//   routes: [
//     { path: '/top', component: createStoriesView('top') },
//     { path: '/new', component: createStoriesView('new') },
//     { path: '/', redirect: '/top' }
//   ]
// })

export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/counter', component: CounterView },
    { path: '/counters', component: CounterSView },
    { path: '/hello', component: Hello },
    { path: '/', redirect: '/hello' }
  ]
})
