<template>
  <div>
    <input type="checkbox" :checked = "checked" @change="$emit('change',$event.target.checked)" />{{checked}}子组件数据
    <button></button>
  </div>
</template>

<script>
export default {
  name: "ModelDiy",
  // 允许一个自定义组件在使用 v-model 时定制 prop 和 event。默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event，但是一些输入类型比如单选框和复选框按钮可能想使用 value prop 来达到不同的目的。使用 model 选项可以回避这些情况产生的冲突。
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    // // this allows using the `value` prop for a different purpose
    // value: {
    //   type: Boolean,
    // },
    // use `checked` as the prop which take the place of `value`
    checked: {
      type: Boolean,
    },
  },
};
</script>

<style scoped></style>
