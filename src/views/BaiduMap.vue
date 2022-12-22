<template>
  <div>
    <!-- 该方法不支持 地球模式  参考文档 https://dafrok.github.io/vue-baidu-map/#/zh/index-->
    <baidu-map :center="center"
               class="bm-view"
               :zoom="zoom"
               :scroll-wheel-zoom="true"
               @ready="handler"></baidu-map>
  </div>
</template>

<script>
export default {
  data () {
    return {
      center: { lng: 116, lat: 39 },
      zoom: 3
    }
  },
  methods: {
    handler ({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 113
      this.center.lat = 30
      this.zoom = 15
    }
  }
}
</script>

<style lang="less" scoped>
.bm-view {
  width: 100%;
  height: 100vh;
}
</style>