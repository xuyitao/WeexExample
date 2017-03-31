<template>
  <div>
    <text class="title">Clicked: {{ count }} times, count is {{ evenOrOdd }}.</text>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <!-- <button @click="incrementAsync">Increment async</button> -->
    <button @click="jump('/hello')">Increment async</button>
  </div>
</template>

<script>

var navigator = weex.requireModule('navigator')
var modal = weex.requireModule('modal')

export default {
    data: function () {
        return {
            count : 0,
        }
    },
    computed: {
        evenOrOdd : function () {
            return this.count % 2 === 0 ? 'even':'odd';
        }
    },
    methods: {
        increment (state) {

            this.count++
        },
        decrement (state) {
            this.count--
        },
        incrementIfOdd ({ commit, state }) {
          if ((this.count + 1) % 2 === 0) {
            this.increment();
          }
        },
        incrementAsync ({ commit }) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              this.increment();
              resolve()
            }, 1000)
          })
        },
        jump (state) {
          navigator.pop({
            animated: "true"
          }, event => {
            modal.toast({ message: 'callback: ' + event, duration: 0.3})
          })
        }
    }
}
</script>
