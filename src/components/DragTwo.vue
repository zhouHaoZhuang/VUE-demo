<template>
  <div>
    <h4>移动端拖拽事件 通过 transform: translate 实现</h4>
    <!-- 父盒子 用于限制其拖拽范围 -->
    <div class="max-box">
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
  </div>
</template>

<script>


export default {
  data () {
    return {
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
    this.contextWidth = this.$refs.context.offsetWidth;  //拖拽区域的宽度
    this.contextHeight = this.$refs.context.offsetHeight;  //拖拽区域的高度
  },
  methods: {
    touchStart (e) {
      console.log(this.newTouchX, '------======-----');
      console.log(this.newTouchY, '-----====------');
      console.log(e);
      this.touchX = e.changedTouches[0].pageX;  //触摸点X坐标
      this.touchY = e.changedTouches[0].pageY;  //触摸点Y坐标
    },
    touchMove (e) {
      console.log(e.changedTouches[0].pageX);
      var touchX = e.changedTouches[0].pageX; //触摸点X坐标
      var touchY = e.changedTouches[0].pageY; //触摸点Y坐标
      var newTouchX = touchX - this.touchX; //拖拽区域的新的X坐标
      var newTouchY = touchY - this.touchY; //拖拽区域的新的Y坐标
      var dragBoxtouchX = newTouchX + this.contextLeft; //拖拽区域距离左部的距离
      var dragBoxtouchY = newTouchY + this.contextTop; //拖拽区域距离顶部的距离
      if (dragBoxtouchY >= (500 - Math.abs(this.contextHeight))) {  //拖拽区域的新的Y坐标
        dragBoxtouchY = 500 - Math.abs(this.contextHeight);  //拖拽区域的新的Y坐标
      }
      if (dragBoxtouchY <= 0) {
        dragBoxtouchY = 0;
      }
      if (dragBoxtouchX >= (500 - Math.abs(this.contextWidth))) {
        dragBoxtouchX = 500 - Math.abs(this.contextWidth);
      }
      if (dragBoxtouchX <= 0) {
        dragBoxtouchX = 0;
      }
      this.$refs.context.style.transform = `translate(${dragBoxtouchX}px,${dragBoxtouchY}px)`; //拖拽区域的新的X坐标
      this.newTouchY = dragBoxtouchY; //拖拽区域的新的Y坐标
      this.newTouchX = dragBoxtouchX; //拖拽区域的新的X坐标
    },
    touchEnd () {
      console.log(this.newTouchX, '-----------');
      console.log(this.newTouchY, '-----------');
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
.max-box {
  width: 500px;
  height: 500px;
  overflow: hidden;
  background-color: rgba(255, 142, 155, 0.423);
  position: relative;
  .min-box {
    width: 100px;
    height: 100px;
    background-color: #8cda50;
    position: relative;
    transform: translate(0px, 0px);
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
</style>