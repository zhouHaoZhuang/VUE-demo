<template>
  <div>
    <p>我是当前组件的根组件</p>
    <div class="dv">
      <h2>完整的导航解析流程</h2>
      <ol>
        <li>导航被触发。</li>
        <li>在失活的组件里调用 <code>beforeRouteLeave</code> 守卫。</li>
        <li>调用全局的 <code>beforeEach</code> 守卫。</li>
        <li>在重用的组件里调用 <code>beforeRouteUpdate</code> 守卫 (2.2+)。</li>
        <li>在路由配置里调用 <code>beforeEnter</code>。</li>
        <li>解析异步路由组件。</li>
        <li>在被激活的组件里调用 <code>beforeRouteEnter</code>。</li>
        <li>调用全局的 <code>beforeResolve</code> 守卫 (2.5+)。</li>
        <li>导航被确认。</li>
        <li>调用全局的 <code>afterEach</code> 钩子。</li>
        <li>触发 DOM 更新。</li>
        <li>
          调用 <code>beforeRouteEnter</code> 守卫中传给
          <code>next</code>
          的回调函数，创建好的组件实例会作为回调函数的参数传入。
        </li>
      </ol>
      <button  @click="jumptest">
        跳转路由测试params
      </button>
      <router-link :to = "{path:'/AttributeDemo',query:{name:'张三',age:12}}">跳转query</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "@/utils/request";
export default {
  name: "routersTest",
  props: {
    id: {},
    text: {},
  },
  methods: {
    jumptest() {
      this.$router.push({
        name: "内置的组件",
        params: {
          id: "params1",
          text: "paramsnihao"
        }
      })
    }
  },
  mounted() {
    console.log(this.$props, "this.$props  a", this.$attrs, "this.$attrs  a");
    console.log(this.$route, "this.$route   a");
    console.log(this.id, "this.id   a", this.text, "this.text   a");
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    // 不过，你可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。
    next((vm) => {
      // 通过 `vm` 访问组件实例
      console.log(vm, "vm");
    });

    /* 以下写法可以  在导航完成前获取数据
    通过这种方式，我们在导航转入新的路由前获取数据。我们可以在接下来的组件的 beforeRouteEnter 守卫中获取数据，当数据获取成功后只调用 next 方法。 */
    axios("/data.json", { parmes: 12 }).then((res) => {
      next((vm) => {
        // 通过 `vm` 访问组件实例
        console.log(vm, res, "vm0000000000");
      });
    });
    // axios(to.params.id, (err, post) => {
    //   next((vm) => vm.setData(err, post));
    // });

    // 注意 beforeRouteEnter 是支持给 next 传递回调的唯一守卫。对于 beforeRouteUpdate 和 beforeRouteLeave 来说，this 已经可用了，所以不支持传递回调，因为没有必要了。
    console.log(to.matched[0].meta,to, from, "beforeRouteEnter------");
    // 一个路由匹配到的所有路由记录会暴露为 $route 对象 (还有在导航守卫中的路由对象) 的 $route.matched 数组。因此，我们需要遍历 $route.matched 来检查路由记录中的 meta 字段。
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from, "beforeRouteUpdate------");
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    // console.log(this.props);
    next();
    // 这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消。
    //  next(false)
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(to, from, "beforeRouteLeave------");
    next();
  },
};
</script>

<style scoped>
.dv {
  text-align: left;
  margin-left: 50px;
  /* background-color: rgb(255, 107, 107); */
}
</style>
