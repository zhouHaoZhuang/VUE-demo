<!-- eslint-disable vue/valid-template-root -->
<template functional>
  <h1>Functional 函数式组件</h1>
</template>

<script>
export default {
  functional: true,
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Functional',
  // render(h) {
  //   return h('div', {}, [h('h1', {}, 'Functional')])
  // },
}
</script>

<style>

</style>