<template>
  <div>
    <div class="page">
      <!-- <h4>移动端拖拽事件，案例</h4> -->
      <!-- 父盒子 用于限制其拖拽范围 -->
      <div class="max-box">
        通过绝对定位实现
        <!-- 被拖拽元素   拖拽之后可改变其大小和位置-->
        <div class="min-box"
             ref="context"
             @touchend="touchEnd"
             @touchstart="touchStart"
             @touchmove="touchMove">
          <img width="100%"
               height="100%"
               src="@/assets/logo.png"
               alt="" />
          <!-- 该元素是拖拽点用于实现元素的放大和缩小 -->
          <div class="drag-box"
               @touchend.stop="touchEndDrag"
               @touchstart.stop="touchStartDrag"
               @touchmove.stop="touchMoveDrag">
            <i class="el-icon-refresh-left"></i>
          </div>
        </div>
      </div>
      <DragTwo class="new-drag" />
    </div>

    <div class="dv2">
      阿斯顿噶似
    </div>
    <div class="dv3">
      阿斯顿噶似
    </div>
    <div class="dv4">
      阿斯顿噶似
    </div>
    <div class="dv5">
    </div>
    <br>
  </div>
</template>

<script>
import DragTwo from "@/components/DragTwo.vue";

export default {
  components: {
    DragTwo
  },
  data () {
    return {
      isShow: false,



      touchX: 0,  //触摸点X坐标
      touchY: 0,   //触摸点Y坐标
      contextTop: 0,  //拖拽区域距离顶部的距离 
      contextLeft: 0,  //拖拽区域距离左边的距离
      contextWidth: 0,  //拖拽区域的宽度
      contextHeight: 0,  //拖拽区域的高度
      newTouchX: 0,  //拖拽区域的新的X坐标
      newTouchY: 0,  // 拖拽区域的新的Y坐标
      dragBoxtouchX: 0,  //拖拽区域距离左部的距离
      dragBoxtouchY: 0,  //拖拽区域距离顶部的距离
      newContextWidth: 0,  //拖拽新的区域的宽度
      newContextHeight: 0,  //拖拽新的区域的高度
    }
  },
  mounted () {

    /* 
      注意：如果你的dom是此时没有，就获取不到相关信息，就是 0。因此你应该在dom显示出来之后，从$nextTick中获取。  此时获取的就是最新的信息， 此处是一个坑  就会导致拖动出现bug
    */

    this.contextTop = this.$refs.context.offsetTop;  //拖拽区域距离顶部的距离
    this.contextLeft = this.$refs.context.offsetLeft;  //拖拽区域距离左边的距离
    this.contextWidth = this.$refs.context.offsetWidth;  //拖拽区域的宽度
    this.contextHeight = this.$refs.context.offsetHeight;  //拖拽区域的高度
  },
  methods: {
    touchStart (e) {
      this.touchX = e.changedTouches[0].pageX;  //触摸点X坐标
      this.touchY = e.changedTouches[0].pageY;  //触摸点Y坐标
    },
    touchMove (e) {
      var touchX = e.changedTouches[0].pageX; //触摸点X坐标
      var touchY = e.changedTouches[0].pageY; //触摸点Y坐标
      let x = touchX - this.touchX;  //X轴移动距离
      let y = touchY - this.touchY;  //Y轴移动距离
      let newY = this.contextTop + y;  //拖拽区域的新的Y坐标
      let newX = this.contextLeft + x;  //拖拽区域的新的X坐标
      if (newY >= (500 - Math.abs(this.contextHeight))) {  //拖拽区域的新的Y坐标
        newY = 500 - Math.abs(this.contextHeight);  //拖拽区域的新的Y坐标
      }
      if (newY <= 0) {
        newY = 0;
      }
      if (newX >= (500 - Math.abs(this.contextWidth))) {
        newX = 500 - Math.abs(this.contextWidth);
      }
      if (newX <= 0) {
        newX = 0;
      }
      this.$refs.context.style.top = `${newY}px`;
      this.$refs.context.style.left = `${newX}px`;
      this.newTouchX = x + this.contextLeft;
      this.newTouchY = y + this.contextTop;
    },
    touchEnd () {
      this.contextTop = this.newTouchY;
      this.contextLeft = this.newTouchX;
    },
    touchStartDrag (e) {
      this.dragBoxtouchX = e.changedTouches[0].pageX;
      this.dragBoxtouchY = e.changedTouches[0].pageY;
      console.log(this.touchX, this.touchY, '开始拖拽');
    },
    touchMoveDrag (e) {
      var touchX = e.changedTouches[0].pageX;
      var touchY = e.changedTouches[0].pageY;
      let x = touchX - this.dragBoxtouchX;
      let y = touchY - this.dragBoxtouchY;
      this.newContextWidth = this.contextWidth + x;
      this.newContextHeight = this.contextHeight + y;
      if (this.newContextWidth >= (500 - Math.abs(this.contextLeft))) {
        // console.log('超出范围', this.contextLeft);
        if (this.contextLeft < 0) {
          this.newContextWidth = 500
        }
        else {
          this.newContextWidth = 500 - Math.abs(this.contextLeft);
        }
      }
      if (this.newContextWidth <= 40) {
        this.newContextWidth = 40;
      }
      if (this.newContextHeight >= (500 - Math.abs(this.contextTop))) {
        // console.log('超出范围', this.contextTop);
        if (this.contextTop < 0) {
          this.newContextHeight = 500
        } else {
          this.newContextHeight = 500 - Math.abs(this.contextTop);
        }
      }
      if (this.newContextHeight <= 40) {
        this.newContextHeight = 40;
      }
      this.$refs.context.style.width = `${this.newContextWidth}px`;
      this.$refs.context.style.height = `${this.newContextHeight}px`;
      // console.log(touchX, touchY, '移动位置');
    },
    touchEndDrag (e) {
      console.log(e);
      this.contextWidth = this.newContextWidth;
      this.contextHeight = this.newContextHeight;
    },

  },
}
</script>

<style lang="less" scoped>
.page {
  display: flex;
}
.max-box {
  width: 500px;
  height: 500px;
  overflow: hidden;
  background-color: rgb(98, 190, 255);
  position: relative;
  .min-box {
    width: 100px;
    height: 100px;
    background-color: rgb(155, 255, 33);
    position: absolute;
    top: 100px;
    left: 100px;
    .drag-box {
      width: 20px;
      height: 20px;
      background-color: rgb(255, 255, 255);
      text-align: center;
      line-height: 20px;
      position: absolute;
      right: -10px;
      bottom: -10px;
      border-radius: 50%;
    }
  }
}

.dv2 {
  width: 200px;
  height: 200px;
  background-color: rgb(92, 187, 255);
  border-radius: 100px;
}
.dv3 {
  width: 200px;
  height: 200px;
  background-color: rgb(29, 255, 112);
  border-top-left-radius: 200px;
  border-bottom-right-radius: 200px;
}
.dv4 {
  width: 200px;
  height: 200px;
  background-color: rgb(29, 255, 112);
  border-top-left-radius: 200px;
  border-bottom-left-radius: 100px;
}
.dv5 {
  width: 600px;
  height: 200px;
  border: 10px solid rgba(36, 251, 176, 0.5);
  padding: 20px;
  // background-origin: padding-box;
  background-color: rgb(252, 178, 178);
  background: url('@/assets/logo.png') no-repeat left top,
    url('@/assets/logo.png') no-repeat right top,
    url('@/assets/logo.png') no-repeat center center,
    url('@/assets/logo.png') no-repeat 100px 100px,
    url('@/assets/安德罗斯科金河.jpg') no-repeat center center;
  // background-origin: content-box,border-box,border-box,border-box,content-box;  //设置背景图片的位置区域
  background-clip: content-box, border-box, border-box, border-box, content-box; //设置背景图片的裁剪区域
  // background-image: url(img_flwr.gif), url(paper.gif);
  // background-position: right bottom, left top;
  // background-repeat: no-repeat, repeat;
}

</style>