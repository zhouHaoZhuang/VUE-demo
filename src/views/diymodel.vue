<template>
  <div>
    <h2>自定义model</h2>
    父组件数据{{ foo }}
    <ModelDiy v-model="foo" />
  </div>
</template>

<script>
import ModelDiy from "@/components/modelDiy.vue";
export default {
  name: "DiyModel",
  data() {
    return {
      foo: true,
    };
  },
  watch: {
    foo(val) {
      console.log(val);
    },
  },
  components: {
    ModelDiy,
  },
};
</script>

<style></style>
