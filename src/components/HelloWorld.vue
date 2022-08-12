<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ user }}</h3>
    <h4>{{ $store.state.a.user }}</h4>
    <h5>{{ zuData }}</h5>
    <slot>这是插槽的后备内容</slot>
    <p>{{ testData }}</p>
    <slot></slot>
    <slot name="main" :user="hellodata">
      <div>具名插槽默认内容</div>
    </slot>
    <button v-on:click="test">点击改变</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {},
  data() {
    return {
      hellodata: 'Hello World!',
      a: 0,
      obj: {
        title: '成人obj',
        children: {
          title: '成人children',
        },
      },
    }
  },
  mounted() {
    this.a++
  },
  inject: ['zuData'],
  props: {
    msg: {
      type: String,
      default: 'Welcome to Your Vue.js App',
    },
    user: {
      type: Number,
      default: 9,
      // required: true,
      validator: function (value) {
        return value > 0
      },
    },
    testData: {
      type: String,
      default: '00000',
    },
  },
  methods: {
    test() {
      this.$emit('update:testData', 'test子')
    },
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h3 {
  margin: 40px 0 0;
}
.list-div {
  text-align: left;
}
.list-div2 {
  margin-left: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
