<template>
  <div>
    <transition>
      <div v-if="a">
        <p>请求本地数据</p>
        <img width="100px" src="@/assets/安德罗斯科金河.jpg" alt="" />
      </div>
    </transition>
    <!-- <br /> -->
    <button @click="a = !a">切换效果</button>
    <!-- of 关键字 和 in 一样的作用 -->
    <transition-group name="fade">
      <h2 v-for="item of dataList" :key="item.id">
        {{ item.name }}
        {{ item.age }}
      </h2>
    </transition-group>
  </div>
</template>

<script>
// import axios from '@/utils/request'
import requestData from "@/static/data.json";

export default {
  name: "ReqData",
  data() {
    return {
      msg: "请求本地数据",
      dataList: [],
      a: true,
    };
  },
  mounted() {
    document.cookie = "ioiopipoadiasdasdbasdbas"; // 非跨域传递cookie 直接设置cookie即可
    this.getData();
    console.log(requestData);
  },
  methods: {
    async getData() {
      // http://baidu.com/data.json  此处写完整路径也可以
      // let data = await axios.get('/data.json', {
      //   params: {
      //     id: 1,
      //   },
      //   // baseURL: 'http://baidu.com',  // 可以指定域名 该域名会覆盖axios的baseURL
      //   headers: { touke: "12399999999" },
      // })
      let data = await this.$axios.get("/data.json", {
        params: {
          id: 1,
        },
        // baseURL: 'http://baidu.com',  // 可以指定域名 该域名会覆盖axios的baseURL
        headers: { token: "12399999999", ookie: "yasfdasdadyusada------" }, //当前的请求头 会覆盖调 create中的请求头
        // withCredentials: true     // `withCredentials` 表示跨域请求时是否需要使用凭证
      });
      // let data2 = await this.$axios.get("http://localhost:9000/select", {
      //   withCredentials: true,   //设置跨域的时候传递cookie，需要服务端的配合
      // });
      // console.log(data2, "data2");
      this.dataList = data.data.data.list;
      console.log(data);
    },
  },
};
</script>

<style lang="less" scoped>
.fade-enter-active {
  animation: fade-in 2s reverse;
}

.fade-leave-active {
  animation: fade-in 2s reverse;
}

@keyframes fade-in {
  0% {
    transform: scale(0);
    /* background-color: rgb(255, 62, 62); */
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}

// 注意： 路由 router-view 中添加动画 和 组件中添加的 transition 属性名称一样的话 可以覆盖 全局的路由过渡样式
.v-enter-active {
  animation: int 1s;
}

.v-leave-active {
  animation: out 1s;
}

@keyframes int {
  0% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
@keyframes out {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-90deg);
  }
}
</style>
