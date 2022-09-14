<template>
  <div class="home_div">
    <div class="map_title">
      <h3>JSAPI Vue2地图组件示例</h3>
    </div>
    <div id="container" ref="container"></div>
    <el-button class="expressPdf" type="link" style="margin-top: 20px" @click="getIdCarema('container')">
      导出PDF
    </el-button>
    <!-- <button @click="getIdCarema('container')">点击</button> -->
  </div>
</template>
<script>
import AMapLoader from '@amap/amap-jsapi-loader';
import html2canvas from 'html2canvas'
export default {
  name: "gdMap",
  data () {
    return {
      map: null,
      positions: [
        {
          lng: 116.127428,
          lat: 39.90923
        }, {
          lng: 116.597428,
          lat: 39.90923
        }, {
          lng: 116.207428,
          lat: 39.68923
        }, {
          lng: 116.347428,
          lat: 40.00923
        }, {
          lng: 116.497428,
          lat: 39.68923
        }, {
          lng: 116.127428,
          lat: 39.90923
        }
      ],
      // positions: [{
      //   name: '北京',
      //   lng: 116.397428,
      //   lat: 39.90923
      // }, {
      //   name: '上海',
      //   lng: 121.487899,
      //   lat: 31.249162
      // }, {
      //   name: '广州',
      //   lng: 113.30765,
      //   lat: 23.120049
      // }, {
      //   name: '深圳',
      //   lng: 114.025974,
      //   lat: 22.546054
      // }, {
      //   name: '武汉',
      //   lng: 114.305393,
      //   lat: 30.593099
      // }],
    }
  },
  mounted () {
    this.positions = this.positions.map(item => {
      item = [item.lng, item.lat];
      return item;
    });
    this.initAMap();
  },
  methods: {
    initAMap () {
      AMapLoader.load({
        key: 'f246c7574dd829c91a28c0971c0d0912',  //设置您的key
        version: "2.0",
        plugins: ['AMap.ToolBar', 'AMap.Driving'],
        AMapUI: {
          version: "1.1",
          plugins: [],
        },
        Loca: {
          version: "2.0"
        },
      }).then((AMap) => {
        var path = this.positions.map(item => {
          return new AMap.LngLat(item[0], item[1])
        });
        // console.log(' ', path)
        this.map = new AMap.Map("container", {
          WebGLParams: {
            preserveDrawingBuffer: true
          },
          viewMode: "3D",
          zoom: 10,   //级别 缩放比例
          zooms: [2, 22],  //设置级别范围
          center: [116.397428, 39.90923],  //中心点坐标
        });
        var positions = this.positions;
        // console.log(' ', positions)
        //  var positions = [
        //   [116.368904, 39.913423],
        //   [116.382122, 39.901176],
        //   [116.387271, 39.912501],
        //   [116.398258, 39.904600],
        // ];
        var text = []
        for (var i = 0; i < positions.length; i++) {
          // 创建纯文本标记
          text[i] = new AMap.Text({
            text: (i + 1).toString(),  //文本内容
            anchor: 'center', // 设置文本标记锚点
            draggable: true,
            cursor: 'pointer',  // 指定鼠标悬停时的鼠标样式
            angle: 0,  // 文本标记的倾斜角度
            style: {
              'border-radius': '50%',
              'background-color': '#587DEE',
              'border-color': 'white',
              'border-width': '3px',
              'width': '20px',
              'height': '20px',
              'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
              'text-align': 'center',
              'line-height': '20px',
              'font-size': '15px',
              'color': 'white'
            },
            position: positions[i]
          });
          text[i].setMap(this.map);
        }

        // 创建折线实例
        var polyline = new AMap.Polyline({
          path: path,
          borderWeight: 1, // 描边的宽度
          strokeWeight: 4,// 线条宽度，默认为 1
          strokeColor: '#587EEE', // 线条颜色
          lineJoin: 'round' // 折线拐点连接处样式 默认值为'miter'尖角，其他可选值：'round'圆角、'bevel'斜角
        });
        // 将折线添加至地图实例
        this.map.add(polyline);
        this.map.setFitView() // 地图自适应
      }).catch(e => {
        console.log(e);
      })
    },
    btnClick () {
      this.$nextTick(() => {
        this.getPdf(this.$refs.container);   // 此方法直接挂载在了  vue 实例上面，所以可以直接调用
      });
    },

    dataURLtoBlob (dataurl) {
      console.log(444)
      var arr = dataurl.split(','); var mime = arr[0].match(/:(.*?);/)[1]
      var bstr = atob(arr[1]); var n = bstr.length; var u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new Blob([u8arr], { type: mime })
    },
    downloadFile (url, name = 'What\'s the fuvk') {
      console.log(555)
      var a = document.createElement('a')
      a.setAttribute('href', url)
      a.setAttribute('download', name)
      a.setAttribute('target', '_blank')
      const clickEvent = document.createEvent('MouseEvents')
      clickEvent.initEvent('click', true, true)
      a.dispatchEvent(clickEvent)
    },

    downloadFileByBase64 (base64, name) {
      console.log(333)
      var myBlob = this.dataURLtoBlob(base64)
      var myUrl = URL.createObjectURL(myBlob)
      this.downloadFile(myUrl, name)
      // console.log(base64)
    },

    getIdCarema (id) {

      console.log(111)

      var element = document.getElementById(id)
      html2canvas(element, {
        backgroundColor: 'transparent',
        logging: false
      }).then(canvas => {
        const context = canvas.getContext('2d')
        // 关闭抗锯齿形
        context.mozImageSmoothingEnabled = false
        context.webkitImageSmoothingEnabled = false
        context.msImageSmoothingEnabled = false
        context.imageSmoothingEnabled = false
        // canvas转化为图片
        this.canvas2Image(canvas, canvas.width, canvas.height, id, '图片')
      })
    },
    canvas2Image (canvas, width, height, id, val) {
      console.log(222, canvas, width, height, id, val) // <canvas width="2312" height="1360" style="width: 1156px; height: 680px;"></canvas> 2312 1360 "container" "图片"
      const retCanvas = document.createElement('canvas')
      const retCtx = retCanvas.getContext('2d')
      retCanvas.width = width
      retCanvas.height = height
      retCtx.drawImage(canvas, 0, 0, width, height, 0, 0, width, height)
      const img = document.createElement('img')
      img.src = retCanvas.toDataURL('image/png') // 可以根据需要更改格式
      // console.log(img.src);  // 此处就是导出地图的base64 数据
      // window.sessionStorage.setItem(id, retCanvas.toDataURL('image/png')) // ？
      this.downloadFileByBase64(retCanvas.toDataURL('image/png'), val)
    }
  }
}
</script>
<style  scoped>
.home_div {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  position: relative;
}

#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  position: absolute;
}

.expressPdf {
  position: fixed;
  top: 100px;
}

.map_title {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 50px;
  background-color: rgba(27, 25, 27, 0.884);
}

h3 {
  position: absolute;
  left: 10px;
  z-index: 2;
  color: white;
}
</style>