import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import htmlToPdf from '@/utils/htmlToPdf'
import axios from '@/utils/request'
// 

import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'x244MREe726zlhlpNLxiSgNevECRRpYq'
})

Vue.config.productionTip = false
Vue.use(htmlToPdf)
Vue.use(ElementUI)
Vue.prototype.$axios = axios
// 注册  全局指令
Vue.directive('my-directive', {
  //   1.bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。

  // 2.inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。

  // 3.update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 。

  // 4.componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。

  // 5.unbind：只调用一次，指令与元素解绑时调用。
  bind: function (a, b) {
    console.log('my-directive bind', a, b)
    if (b.value == '456') {
      a.style.color = 'red'
    }
    // eslint-disable-next-line no-irregular-whitespace
    // my-directive bind <p>​张三​</p>​ {name: 'my-directive', rawName: 'v-my-directive', value: 456, expression: '456', modifiers: {…}, …}
    // 参数b是一个对象，包含了el、binding、vnode等属性
    // binding：一个对象，包含以下属性：
    // name：指令名，不包括 v- 前缀。
    // value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
    // oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
    // expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
    // arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
    // modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
  },
  inserted: function (a, b) {
    console.log('my-directive inserted', a, b)
  },
  update: function (a, b) {
    console.log('my-directive update', a, b)
  },
  componentUpdated: function (a, b) {
    console.log('my-directive componentUpdated', a, b)
  },
  unbind: function (a, b) {
    console.log('my-directive unbind', a, b)
  }
})

// 注册  全局过滤器
Vue.filter('myFilter', function (value) {
  // 返回处理后的值
  return value + '--myFilter'
})
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
