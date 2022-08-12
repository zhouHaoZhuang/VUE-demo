<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/expresspdf">导出页面转PDF</router-link>
      <router-link to="/digui">递归组件调用</router-link> -->
      <router-link v-for="(item, index) in routes"
                   :key="index"
                   :to="item.path">
        {{ item.name }}
      </router-link>
    </nav>
    <div class="center">
      <transition mode="out-in"
                  :name="transitionName">
        <router-view id="123" />
        <!-- 当前组件的根组件 -->
      </transition>
      <router-view name="a"
                   id="666" />
      <!-- 命名视图 -->
      <!-- 此处的id相当于  params 传值-->
      <router-view name="b" />
    </div>
  </div>
</template>
<script>
import routes from './router/config'
export default {
  provide () {
    return {
      zuData: '我是全局变量'
    }
  },
  data () {
    return {
      routes,
      a: 1,
      transitionName: 'v'
    }
  },
  // 接着在父组件内
  // watch $route 决定使用哪种过渡
  watch: {
    $route (to, from) {
      console.log(to, from)
      this.transitionName = to.path === from.path ? 'h' : 'v'
    }
  },
  mounted () {
    console.log('this.$root', this.$root) // this.$root表示当前组件的根组件
    // 执行npm run serve        BASE_URL: "/" NODE_ENV: "development"
    // 执行npm run serve:pro    BASE_URL: '/' NODE_ENV: 'production', VUE_APP_BASE_URL: http://zhouhaozhuang:8080,
    // 执行npm run serve:dev    BASE_URL: "/" NODE_ENV: "development" VUE_APP_BASE_URL: "http://dev:8080"
    console.log(process.env, 'process.env-------------')
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  display: flex;
}

.v-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.v-enter-to,
.v-leave {
  opacity: 1;
  transform: translateX(0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}

nav {
  box-sizing: border-box;
  position: fixed;
  padding: 30px;
  width: 200px;
  border: 1px solid rgb(2, 2, 2);
  height: 100vh;
}

.center {
  flex: 1;
  margin-left: 200px;
  text-align: center;
}

nav a {
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
