<template>
  <div class="page">
    <div id="allmap"></div>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log('dgahsgaj');
    // GL版命名空间为BMapGL
    let BMapGL = window.BMapGL
    var map = new BMapGL.Map("allmap");    // 创建Map实例
    map.centerAndZoom(new BMapGL.Point(118.5, 27.5), 4);  // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    map.setMapType(window.BMAP_EARTH_MAP);   // 设置地图类型为地球模式

    var opts = {
      position: new BMapGL.Point(118.5, 27.5), // 指定文本标注所在的地理位置
      offset: new BMapGL.Size(30, -30) // 设置文本偏移量
    };
    // 创建文本标注对象
    var label = new BMapGL.Label('浙江', opts);
    // 自定义文本标注样式
    label.setStyle({
      color: 'blue',
      borderRadius: '5px',
      borderColor: '#ccc',
      padding: '5px 10px',
      fontSize: '16px',
    });
    map.addOverlay(label);
    console.log(map);

    var opts1 = {
      position: new BMapGL.Point(120, 30), // 指定文本标注所在的地理位置
      offset: new BMapGL.Size(30, -30) // 设置文本偏移量
    };
    // 创建文本标注对象
    var label1 = new BMapGL.Label('杭州', opts1);
    // 自定义文本标注样式
    label1.setStyle({
      color: 'blue',
      borderRadius: '5px',
      borderColor: 'red',
      padding: '5px 10px',
      fontSize: '16px',
    });

    //监听mapzoomend事件      
    map.addEventListener("zoomend", handleZoomChange);
    function handleZoomChange () {
      //获取地图缩放级别        
      const zoomLevel = map.getZoom();
      console.log('监听的缩放级别', zoomLevel);
      if (zoomLevel >= 6) {
        map.clearOverlays();
        map.addOverlay(label1);
      } else if (zoomLevel < 6) {
        map.clearOverlays();
        map.addOverlay(label);
      }
    }
  },
}
</script>

<style>
#allmap{
  width: 100%;
  height: 100vh;
}
</style>