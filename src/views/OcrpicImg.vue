<template>
  <div>
    <img width="500px"
         src="@/assets/安德罗斯科金河.jpg"
         alt="">
    <hr>
    <br>
    <el-button type="warning"
               @click="ocrPic"
               icon="el-icon-camera">开始截图</el-button>
    <hr>
    <br>
    <el-image :src="src"></el-image>
    <img :src="src" alt="">
  </div>
</template>

<script>
import kscreenshot from 'kscreenshot'
export default {
  data () {
    return {
      src: ''
    }
  },
  methods: {
    ocrPic () {
      let that = this
      console.log(this);
      new kscreenshot({
        key: 65,
        needDownload: false,
        endCB (e) { //截图成功回调   此处返回 base64格式的图片
          that.src = e
        },
        cancelCB (e) { //截图失败回调
          console.log(e)
        }
      }).startScreenShot()
    },
  },

}
</script>

<style>
</style>