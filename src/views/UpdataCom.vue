<template>
  <div>
    你好这是声明周期组件
    <br>
    <button @click="changeMsg">
      点击改变数据
    </button>
      
  </div>
</template>

<script>
export default {
  name: 'UpdataCom',
  data() {
    return {
      msg: '声明周期组件'
    }
  },
  methods: {
    changeMsg() {
      this.msg = '改变后的数据'
      this.$router.push("/as")
      console.log(this.msg);
    }
  },
  beforeUpdate() {
    console.log('声明周期组件：beforeUpdate')
  },
  updated() {
    console.log('声明周期组件：updated')
  },
}
</script>

<style>

</style>