<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ $store.state.a.user }}</h1>
    <h2>{{ $store.getters["a/jsUser"] }}</h2>
    <button v-on:click="changeActions">actions修改</button>
    <button
      @click="
        add({
          user: 'mutations修改',
        })
      "
    >
      mutations修改
    </button>
    <p v-my-directive="456">{{ user }}</p>
    {{ jsuser }} <br />
    {{ jsName }}.
    <p>{{ "过滤之后" | myFilter }}</p>
    <HelloWorld :user="10" />
    <p>{{ c }}</p>

    <span :key="text">{{ text }}</span>
    <!-- 当 text 发生改变时，<span> 总是会被替换而不是被修改，因此会触发过渡。 -->
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState, mapGetters } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";
import myMixin from "@/utils/myMixin";
export default {
  name: "AboutView",
  mixins: [myMixin],
  components: {
    HelloWorld,
  },
  created() {
    console.log("我是about created");
  },
  computed: {
    ...mapState({ user: (state) => state.a.user }),
    ...mapGetters("a", { jsuser: "jsUser" }),
    ...mapGetters("b", { jsName: "jsName" }),
    c: (vc) => {
      console.log(vc); // vc表示当前组件的实例
      return ++vc.a + "计算之后";
    },
  },
  data() {
    return {
      a: 1,
      text: "text",
    };
  },
  mounted() {
    this.$store.dispatch("b/bact"); //直接调用actionsChange
    console.log(this.$store.getters["a/jsUser"]);
    console.log("this.$parent", this.$parent); // this.$parent表示当前组件的父组件
    console.log("this.$children", this.$children); // this.$children表示当前组件的所有子组件
    console.log("this.$root", this.$root); // this.$root表示当前组件的根组件
    console.log("this.$options", this.$options); // this.$options表示当前组件的选项
    console.log("this.$props", this.$props); // this.$props表示当前组件的属性
    console.log("this.$slots", this.$slots); // this.$slots表示当前组件的插槽
    console.log(this.$scopedSlots); // this.$scopedSlots表示当前组件的作用域插槽
    console.log("this.$refs", this.$refs); // this.$refs表示当前组件的引用
    console.log("this.$el", this.$el); // this.$el表示当前组件的虚拟dom
    console.log("this.$data", this.$data); // this.$data表示当前组件的数据
    console.log("this.$isServer", this.$isServer); // this.$options.data()表示当前组件的选项中的data
    console.log("this.$ssrContext", this.$ssrContext); // this.$ssrContext表示当前组件的服务端渲染上下文
    console.log("this.$vnode", this.$vnode); // this.$vnode表示当前组件的虚拟dom
    console.log("this.$attrs", this.$attrs); // this.$attrs表示当前组件的属性  未通过prop传入的属性，将会出现在这里
    // this.$on("test", (val) => {  监听事件
    //   console.log(val);
    // });
    // this.$emit("test", "emit");  触发事件
    // this.$once("test", (val) => {  监听事件一次  触发一次之后会自动移除
    //   console.log(val);
    // });
    // this.$off("test");  移除事件 移除自定义事件监听器。
    // 如果没有提供参数，则移除所有的事件监听器；
    // 如果只提供了事件，则移除该事件所有的监听器；
    // 如果同时提供了事件与回调，则只移除这个回调的监听器。
    console.log("this.$listeners", this.$listeners); // this.$listeners表示当前父组件的监听器
    // this.$mount("#app"); // 将当前组件挂载到指定的节点
    // this.$destroy(); // 销毁当前组件  完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。
// 触发 beforeDestroy 和 destroyed 的钩子。
    // this.$forceUpdate(); // 强制更新当前组件 迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。
    // this.$nextTick(() => {}); // 在下一个 DOM 更新循环之后执行。
  },
  methods: {
    ...mapMutations({
      add: "a/mutationsChange", // 将 `this.add()` 映射为 `this.$store.commit('a/mutationsChange')`
    }),
    ...mapActions({
      changeActions: "a/actionsChange", // 将 `this.actionsChange()` 映射为 `this.$store.dispatch('a/actionsChange')`
    }),
    actionsChange() {
      this.$store.dispatch("a/actionsChange"); //直接调用actionsChange
    },
    mutationsChange() {
      this.$store.commit("a/mutationsChange", {
        //直接调用mutationsChange
        user: "mutations修改",
      });
    },
  },
};
</script>
