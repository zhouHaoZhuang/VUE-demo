<template>
  <div>
    <p>我是路由的子组件</p>
    <button @click="backCli">返回</button>
  </div>
</template>

<script>
export default {
  name: 'routerTest',
  props: {
    id: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  mounted () {
    console.log(this.$props, "this.$props", this.$attrs, "this.$attrs")
    // console.log(this.$route, "this.$route");
    console.log(this.id, "this.id")
    console.log(this.text, "this.text")
  },
  methods: {
    backCli () {
      this.$router.push({
        name: '主页',
        params: {
          text: "nihao"
        }
      })
    }
  }
}
</script>

<style scoped>
</style>