<template>
  <div class="dv1">
    <!-- 注意：递归组件也可以传入对象的形式 不经常使用-->
    <!-- <div v-for="(item, key) in list" :key="item.id">
      <div class="div1" v-if="key === 'title'">
        {{ item }}
      </div>
      <div v-if="key === 'children'" class="div2">
        <DiGui2 :list="list[key]"></DiGui2>
      </div>
    </div> -->

    <!-- 一般传入一个数组的形式 -->
    <DiGui :list="list" />
  </div>
</template>

<script>
import DiGui from "./digui.vue";

export default {
  name: "DiGui2",
  props: {},
  components: {
    DiGui,
  },
  data() {
    return {
      list: [
        {
          title: "成人",
          children: [
            {
              title: "成人1",
            },
            {
              title: "成人2",
              children: [
                {
                  title: "成人2-1",
                },
                {
                  title: "成人2-2",
                },
              ],
            },
          ],
        },
        {
          title: "儿童",
          children: [
            {
              title: "儿童1",
            },
            {
              title: "儿童2",
            },
          ],
        },
        {
          title: "老人",
          children: [
            {
              title: "老人1",
            },
            {
              title: "老人2",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.dv1 {
  text-align: left;
  padding: 20px;
}
.div2 {
  margin-left: 20px;
}
</style>
