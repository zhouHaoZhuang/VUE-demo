<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div>
    <!-- https://wap.tourzj.com/wxShare -->
    <!-- <button @click="openMap">打开地图</button> -->
    asdasdahsg
    <svg id="图层_1"
         data-name="图层 1"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 186 37">
      <path d="M185.18,4.9V31.1a2.48,2.48,0,0,1-2.47,2.51h0a2.55,2.55,0,0,1-.73,1.66,2.52,2.52,0,0,1-1.76.73H5.18a2.5,2.5,0,0,1-2.51-2.39A2.49,2.49,0,0,1,.18,31.12V4.9A2.49,2.49,0,0,1,2.65,2.39h0A2.55,2.55,0,0,1,3.42.73,2.52,2.52,0,0,1,5.18,0H180.41a2.71,2.71,0,0,1,1.49.83,2.58,2.58,0,0,1,.72,1.54.24.24,0,0,1,0,.12,2.5,2.5,0,0,1,2.56,2.27A.33.33,0,0,1,185.18,4.9Z"
            transform="translate(0.32 0.5)"
            style="fill:#fff;stroke:#206d73;stroke-miterlimit:10" />
    </svg>
    <div class="dv1"
         :style="`background-image:url('data:image/svg+xml,${bottomBtn}')`">
      asdasd
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import wx from "weixin-js-sdk"
export default {
  data () {
    return {
      // bottomBtn: 'asda'
      bottomBtn:
        '&lt;svg id="图层_1" xmlns="https://www.w3.org/2000/svg" data-name="图层 1" viewBox="0 0 186 37"&gt;&lt;path d="M185.18,4.9V31.1a2.48,2.48,0,0,1-2.47,2.51h0a2.55,2.55,0,0,1-.73,1.66,2.52,2.52,0,0,1-1.76.73H5.18a2.5,2.5,0,0,1-2.51-2.39A2.49,2.49,0,0,1,.18,31.12V4.9A2.49,2.49,0,0,1,2.65,2.39h0A2.55,2.55,0,0,1,3.42.73,2.52,2.52,0,0,1,5.18,0H180.41a2.71,2.71,0,0,1,1.49.83,2.58,2.58,0,0,1,.72,1.54.24.24,0,0,1,0,.12,2.5,2.5,0,0,1,2.56,2.27A.33.33,0,0,1,185.18,4.9Z" transform="translate(0.32 0.5)" style="fill:#fff;stroke:#206d73;stroke-miterlimit:10"/&gt;&lt;/svg&gt;',
    }
  },
  created () {
    // axios.get('https://wap.tourzj.com/wxShare').then((res) => {
    //   console.log(res, 33333333333333333);
    //   const { appId, timestamp, nonceStr, signature } = res.data.result
    //   wx.config({
    //     debug: true,  //调式模式，设置为ture后会直接在网页上弹出调试信息，用于排查问题
    //     appId,
    //     timestamp,
    //     nonceStr,
    //     signature,
    //     jsApiList: [  //需要使用的网页服务接口
    //       'checkJsApi',  //判断当前客户端版本是否支持指定JS接口
    //       'updateTimelineShareData', //分享给好友
    //       'updateAppMessageShareData', //分享到朋友圈
    //       'getLocation', //定位
    //       'openLocation', //打开地图
    //     ]
    //   })
    // })
  },
  methods: {
    // openMap () {
    //   console.log(1122);
    //   wx.ready(() => {
    //     wx.openLocation({
    //       latitude: Number.parseFloat(50), // 纬度，浮点数，范围为90 ~ -90
    //       longitude: Number.parseFloat(100), // 经度，浮点数，范围为180 ~ -180。
    //       name: '北京', // 位置名
    //       address: '', // 地址详情说明
    //       scale: 17, // 地图缩放级别,整形值,范围从1~28。默认为最大
    //       infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
    //     });
    //   })
    //   wx.error(function (res) {
    //     console.log(res.errMsg, 'daghsgdhgdd');  //打印错误消
    //   });
    // }
  },
}
</script>

<style lang="less">
.dv1 {
  width: 100px;
  height: 50px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>