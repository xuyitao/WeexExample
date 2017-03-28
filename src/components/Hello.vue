<template>
  <div class="wrapper" @click="update">
    <image :src="logoUrl" class="logo"></image>
    <text class="title">Hello {{target}}</text>
  </div>
</template>

<style>
    .wrapper { align-items: center; margin-top: 120px; flex-direction:row;
        justify-content:center;align-items:flex-start;}
    .title { font-size: 48px; }
    .logo { width: 360px; height: 82px; }
    .touchMe {
        width:300px;height:60px;border-left-style:solid;border-width:5px;
        border-color:#000000;border-left-color:#FFFFFF;border-right-color:#888888;
    }
</style>

<script>
  export default {
    data: function () {
        return {
          logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
          target: 'World'
        }
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
      }
    }
  }
</script>

<!-- <template>
  <div>
    <slider class="slider" interval="3000" auto-play="true">
      <div class="frame" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>
    </slider>
  </div>
</template>
<style scoped>
  .image {
    width: 700px;
    height: 700px;
  }
  .slider {
    margin-top: 25px;
    margin-left: 25px;
    width: 700px;
    height: 700px;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }
  .frame {
    width: 700px;
    height: 700px;
    position: relative;
  }
</style>
<script>
  export default {
    data () {
      return {
        imageList: [
          { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
        ]
      }
    }
  }
</script> -->
