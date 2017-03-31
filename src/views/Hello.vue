<template>
  <div class="wrapper" @click="redirect('/counter')">
    <image :src="logoUrl" class="logo"></image>
    <text class="title">Hello {{target}}</text>
  </div>
</template>

<script>

let navigator = weex.requireModule('./navigator')
  export default {
    data: function () {
        return {
          logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
          target: 'World'
        }
    },
    methods: {
        update: function (e) {
            this.target = 'Weex 111'
        },
        redirect: function() {
          // event.openURL('./weex.html?page=./dist/web/views/Counter.js')
        }
    }
  }
</script>
<style>
    .wrapper { align-items: center; margin-top: 120px;
        justify-content:center;align-items:flex-start;}
    .title { font-size: 48px; }
    .logo { width: 360px; height: 82px; }
    .touchMe {
        width:300px;height:60px;border-left-style:solid;border-width:5px;
        border-color:#000000;border-left-color:#FFFFFF;border-right-color:#888888;
    }
</style>
