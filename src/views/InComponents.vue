<template>
  <div class="in-components">
    <h1>内置的组件</h1>
    <h3>component</h3>
    <!-- <HelloWorld /> -->
    <div>
      <!-- 动态组件由 vm 实例的 `componentId` property 控制 -->
      <component :is="componentId"></component>
      <!-- 也能够渲染注册过的组件或 prop 传入的组件 -->
      <!-- <component :is="$options.components.HelloWorld"></component> -->
    </div>
    <h3>transition</h3>
    <div>
      Props： name - string，用于自动生成 CSS 过渡类名。例如：name: 'fade'
      将自动拓展为 .fade-enter，.fade-enter-active 等。默认类名为 "v" appear -
      boolean，是否在初始渲染时使用过渡。默认为 false。 css - boolean，是否使用
      CSS 过渡类。默认为 true。如果设置为 false，将只通过组件事件触发注册的
      JavaScript 钩子。 type -
      string，指定过渡事件类型，侦听过渡何时结束。有效值为 "transition" 和
      "animation"。默认 Vue.js 将自动检测出持续时间长的为过渡事件类型。 mode -
      string，控制离开/进入过渡的时间序列。有效的模式有 "out-in" 和
      "in-out"；默认同时进行。 duration - number | { enter: number, leave:
      number } 指定过渡的持续时间。默认情况下，Vue 会等待过渡所在根元素的第一个
      transitionend 或 animationend 事件。 enter-class - string leave-class -
      string appear-class - string enter-to-class - string leave-to-class -
      string appear-to-class - string enter-active-class - string
      leave-active-class - string appear-active-class - string 用法：
      &lt;transition&gt; 元素作为单个元素/组件的过渡效果。&lt;transition&gt;
      只会把过渡效果应用到其包裹的内容上，而不会额外渲染 DOM
      元素，也不会出现在可被检查的组件层级中。
      <hr />
      <div>
        <button @click="ok = !ok">切换</button>
        <!-- 简单元素 -->
        <transition appear>
          <div v-if="ok">toggled content</div>
        </transition>
        <!-- enter-class
        enter-active-class
        enter-to-class (2.1.8+)  这几个类名的优先级高于 v 前缀的
        leave-class
        leave-active-class
        leave-to-class -->

        <!-- 动态组件 -->
        <!-- mode  属性,当使用动态组件的时候, out-in 表示先执行离开的过渡,再执行进入的过渡 in-out 与之相反-->
        <transition type="animation" name="fade" mode="out-in" appear @animationend="onAnm">
          <component :is="componentId"></component>
        </transition>
        <button @click="changeCom">修改动态组件的值</button>

        <!-- 事件钩子 -->
        <div id="transition-demo">
          <transition @after-enter="transitionComplete">
            <div v-show="ok">toggled content</div>
          </transition>
        </div>
      </div>
    </div>
    <br />
    <hr />
    <h3>transition-group</h3>
    <div>
      Props： tag - string，默认为 span move-class - 覆盖移动过渡期间应用的 CSS
      类。 除了 mode，其他 attribute 和 &lt;transition&gt; 相同。 事件： 事件和
      &lt;transition&gt; 相同。 用法： &lt;transition-group&gt;
      元素作为多个元素/组件的过渡效果。&lt;transition-group&gt; 渲染一个真实的
      DOM 元素。默认渲染 &lt;span&gt;，可以通过 tag attribute
      配置哪个元素应该被渲染。 注意，每个 &lt;transition-group&gt;
      的子节点必须有独立的 key，动画才能正常工作 &lt;transition-group&gt;
      支持通过 CSS transform
      过渡移动。当一个子节点被更新，从屏幕上的位置发生变化，它会被应用一个移动中的
      CSS 类 (通过 name attribute 或配置 move-class attribute 自动生成)。如果
      CSS transform property 是“可过渡”property，当应用移动类时，将会使用 FLIP
      技术使元素流畅地到达动画终点。
      <!-- <transition-group tag="ul" name="slide">
        <li v-for="item in items" :key="item.id">
          {{ item.text }}
        </li>
        </transition-group> -->
    </div>
    <h3>keep-alive</h3>
    <div>
      Props： include - 字符串或正则表达式。只有名称匹配的组件会被缓存。 exclude
      - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。 max -
      数字。最多可以缓存多少组件实例。 用法： keep-alive
      包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 transition
      相似，keep-alive 是一个抽象组件：它自身不会渲染一个 DOM
      元素，也不会出现在组件的父组件链中。 当组件在 keep-alive 内被切换，它的
      activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。 在 2.2.0
      及其更高版本中，activated 和 deactivated 将会在 keep-alive
      树内的所有嵌套组件中触发。 主要用于保留组件状态或避免重新渲染。
      <!-- 基本 -->
      <!-- <keep-alive>
        <component :is="view"></component>
      </keep-alive>

       多个条件判断的子组件 -->
      <!-- <keep-alive>
        <comp-a v-if="a > 1"></comp-a>
        <comp-b v-else></comp-b>
      </keep-alive> -->

      <!-- 和 `<transition>` 一起使用 -->
      <!-- <transition>
        <keep-alive>
          <component :is="view"></component>
        </keep-alive>
      </transition> -->
      注意，keep-alive 是用在其一个直属的子组件被开关的情形。如果你在其中有
      v-for 则不会工作。如果有上述的多个条件性的子元素，keep-alive
      要求同时只有一个子元素被渲染。 include and exclude 2.1.0 新增 include 和
      exclude prop
      允许组件有条件地缓存。二者都可以用逗号分隔字符串、正则表达式或一个数组来表示：

      <!-- 逗号分隔字符串 -->
      <keep-alive include="A,B">
        <component :is="view"></component>
      </keep-alive>

      <!-- 正则表达式 (使用 `v-bind`) -->
      <keep-alive :include="/A|B/">
        <component :is="view"></component>
      </keep-alive>

      <!-- 数组 (使用 `v-bind`) -->
      <keep-alive :include="['A', 'B']">
        <component :is="view"></component>
      </keep-alive>
      <button @click="view = view === 'A' ? 'B' : 'A'">切换view</button>
      匹配首先检查组件自身的 name 选项，如果 name
      选项不可用，则匹配它的局部注册名称 (父组件 components
      选项的键值)。匿名组件不能被匹配。 max 2.5.0 新增
      最多可以缓存多少组件实例。一旦这个数字达到了，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉。
      <keep-alive :max="10">
        <component :is="view"></component>
      </keep-alive>
      keep-alive 不会在函数式组件中正常工作，因为它们没有缓存实例。
    </div>
    <hr />
    <h3>slot</h3>
    <div>
      Props： name - string，用于命名插槽。 Usage： slot
      元素作为组件模板之中的内容分发插槽。slot 元素自身将被替换。
      详细用法，请参考下面教程的链接。
    </div>
    <Cba />
    <Functional />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Functional from '@/components/Functional.vue'
import DiGui2 from '@/components/digui2.vue'

export default {
  name: 'InComponents',
  components: {
    HelloWorld,
    DiGui2,
    Functional,
    A: {
      render: function (h) {
        // h(" 定义的元素 “，{ 元素的性质 }，” 元素的内容"/[元素的内容]) }
        return h('div', {}, [h('h1', {}, 'A')])
      }
    },
    B: {
      render (h) {
        return h('div', {}, [h('h1', {}, 'B')])
      }
    },
    
    Cba: {
      // 正确使用jsx写法
      render() {
        return (<h2>nihao</h2>)
      }
    }
    // Cba: {
    //   render: function () {  //  注意  : 该写法的jsx  会报错,并且不会解析
    //     return (<h2>nihao</h2>)
    //   }
    // }
    //     [Vue warn]: Error in render: "ReferenceError: h is not defined"

    // found in

    // ---> <Cba>
    //        <InComponents>
    //          <App> at src/App.vue
    //            <Root>
    // vue.runtime.esm.js?c320:1897 ReferenceError: h is not defined
  },
  data () {
    return {
      componentId: 'HelloWorld',
      ok: true,
      view: 'A'
    }
  },
  props: {
    id:{
      type: String,
      default: 'HelloWorld'
    },
    text: {
    }
  },
  mounted () {
    console.log(
      this.$options.components,
      this.$options.components.HelloWorld
    )
    console.log(this.$props,this.$attrs,"this.$props,this.$attrs");
    console.log(this.$route.params,this.text);
    this.$on('animationend', this.onAnm)
  },
  methods: {
    onAnm (a) {
      console.log(a, '---------')
    },
    changeCom () {
      this.componentId =
        this.componentId === 'HelloWorld' ? 'DiGui2' : 'HelloWorld'
    },
    transitionComplete () {
      console.log('transition complete')
    }
  }
}
</script>

<style lang="less" scoped>
.in-components {
  text-align: left;
  padding: 20px;

  h1 {
    text-align: center;
  }
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.v-enter-to,
.v-leave {
  opacity: 0.8;
  transform: translateX(20%);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}

.fade-enter-active {
  animation: fade-in 0.5s reverse;
}

.fade-leave-active {
  animation: fade-in 0.5s reverse;
}

@keyframes fade-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}
</style>
