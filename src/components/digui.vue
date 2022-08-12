<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <div class="div1">
        {{ item.title }}
      </div>
      <div v-if="item.children" class="div2">
        <DiGui :list="item.children"></DiGui>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiGui",
  props: {
    list: {
      // type: Object,
    },
  },
  data() {
    return {
      // list: [
      //   {
      //     title: "成人",
      //     children: [
      //       {
      //         title: "成人1",
      //       },
      //       {
      //         title: "成人2",
      //       },
      //     ],
      //   },
      //   {
      //     title: "儿童",
      //   },
      //   {
      //     title: "老人",
      //   },
      // ],
    };
  },
};
</script>

<style lang="less" scoped>
.div1 {
  text-align: left;
}
.div2 {
  margin-left: 20px;
}
</style>
