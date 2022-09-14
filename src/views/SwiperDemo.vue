<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in arrList"
                    :key="index">
        <div class="">
          Slide {{index}}
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper.less'

export default {
  components: {
    Swiper, SwiperSlide
  },
  data () {
    return {
      arrList: [{}, {}, {}, {}, {}, {}],
      swiperOption: {
        spaceBetween: 30,
        slidesPerView: 3, // 一屏显示的slide个数
        centeredSlides: true,// 居中的slide是否标记为active，默认是最左active,这样样式即可生效
        slideToClickedSlide: true,// 点击的slide会居中
        loop: true,// 循环播放, 可有无限滚动效果，初始加载即是滚动后的效果
        on: {
          // 该方法中的this都指代swiper本身
          tap: function () {
            console.log('点击的位置', this.activeIndex);
          }
        }
      },
    }
  },
  mounted () {
  },
  methods: {
    test (e) {
      // 默认会$event对象
      console.log(11, e);
    }
  },

}
</script>

<style>
.swiper {
  width: calc(100% - 200px);
  height: 500px;
  background-color: rgb(255, 255, 255);
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: rgb(200, 255, 168);

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.5);
}

.swiper-slide-active,
.swiper-slide-duplicate-active {
  background-color: aqua;
  transform: scale(1);
}
.lbitem {
  width: 500px;
  height: 100px;
  background-color: rgb(255, 209, 209);
}
</style>