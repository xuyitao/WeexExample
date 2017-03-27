<template>
  <div @androidback="back">
    <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/counter">/counter</router-link></li>
        <li><router-link to="/counters">/counters</router-link></li>
        <li><router-link to="/hello">/hello</router-link></li>
    </ul>
    <router-view style="flex:1"></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      back: function () {
        this.$router.back()
      }
    }
  }
</script>
