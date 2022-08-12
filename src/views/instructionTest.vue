<template>
  <div class="contaor">
    <el-descriptions title="指令列表" :column="1">
      <el-descriptions-item label="v-text">更新元素的 textContent。如果要更新部分的 textContent，需要使用 { {
        Mustache } } 插值。</el-descriptions-item>
      <el-descriptions-item label="v-html">更新元素的 innerHTML。注意：内容按普通 HTML 插入 - 不会作为 Vue
        模板进行编译。如果试图使用 v-html
        组合模板，可以重新考虑是否通过使用组件来替代。</el-descriptions-item>
      <el-descriptions-item label="v-show">根据表达式之真假值，切换元素的 display CSS property。
        当条件变化时该指令触发过渡效果。</el-descriptions-item>
      <el-descriptions-item label="v-if">
        根据表达式的值的 truthiness
        来有条件地渲染元素。在切换时元素及它的数据绑定 /
        组件被销毁并重建。如果元素是 &lt; template
        &gt;将提出它的内容作为条件块。 当条件变化时该指令触发过渡效果。 当和
        v-for 一起使用时，v-for 的优先级比 v-if 更高
      </el-descriptions-item>
      <el-descriptions-item label="v-else">前一兄弟元素必须有 v-if 或 v-else-if。</el-descriptions-item>
      <el-descriptions-item label="v-else-if">前一兄弟元素必须有 v-if 或 v-else-if。</el-descriptions-item>
      <el-descriptions-item label="v-for">基于源数据多次渲染元素或模板块
        <!-- <div v-for="(item, index) in items"></div>
        <div v-for="(val, key) in object"></div>
        <div v-for="(val, name, index) in object"></div> -->
      </el-descriptions-item>
      <el-descriptions-item label="v-on">
        .stop - 调用 event.stopPropagation()。
        .prevent - 调用
        event.preventDefault()。
        .capture - 添加事件侦听器时使用 capture 模式。
        .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。 .{keyCode |
        keyAlias} - 只当事件是从特定键触发时才触发回调。 .native -
        监听组件根元素的原生事件。 .once - 只触发一次回调。 .left - (2.2.0)
        只当点击鼠标左键时触发。 .right - (2.2.0) 只当点击鼠标右键时触发。
        .middle - (2.2.0) 只当点击鼠标中键时触发。 .passive - (2.3.0) 以 {
        passive: true }
        模式添加侦听器绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。
        用在普通元素上时，只能监听原生 DOM
        事件。用在自定义元素组件上时，也可以监听子组件触发的自定义事件。
        在监听原生 DOM
        事件时，方法以事件为唯一的参数。如果使用内联语句，语句可以访问一个
        $event property：v-on:click="handle('ok', $event)"。 从 2.4.0 开始，v-on
        同样支持不带参数绑定一个事件/监听器键值对的对象。注意当使用对象语法时，是不支持任何修饰器的。
        <!--  串联修饰符 -->
        <!-- <button @click.stop.prevent="doThis"></button> -->
        <!-- 动态事件 (2.6.0+) -->
        <!-- <button v-on:[event]="doThis"></button> -->
        <!-- 动态事件缩写 (2.6.0+) -->
        <!-- <button @[event]="doThis"></button> -->
        <!-- 对象语法 (2.4.0+) -->
        <!-- <button v-on="{ mousedown: doThis, mouseup: doThat }"></button> -->
      </el-descriptions-item>
      <el-descriptions-item label="v-bind">缩写 ：修饰符： .prop - 作为一个 DOM property 绑定而不是作为 attribute
        绑定。(差别在哪里？) .camel - (2.1.0+) 将 kebab-case attribute 名转换为
        camelCase。(从 2.1.0 开始支持) .sync (2.3.0+)
        语法糖，会扩展成一个更新父组件绑定值的 v-on 侦听器。 用法：
        动态地绑定一个或多个 attribute，或一个组件 prop 到表达式。 在绑定 class
        或 style attribute
        时，支持其它类型的值，如数组或对象。可以通过下面的教程链接查看详情。
        在绑定 prop 时，prop
        必须在子组件中声明。可以用修饰符指定不同的绑定类型。
        没有参数时，可以绑定到一个包含键值对的对象。注意此时 class 和 style
        绑定不支持数组和对象。
        <!-- 通过 prop 修饰符绑定 DOM attribute -->
      </el-descriptions-item>
      <el-descriptions-item label="v-model">限制：
        <!-- <input>
              <select>
              <textarea> -->
        components 修饰符： .lazy - 取代 input 监听 change 事件 .number -
        输入字符串转为有效的数字 .trim - 输入首尾空格过滤 用法：
        在表单控件或者组件上创建双向绑定
      </el-descriptions-item>
      <el-descriptions-item label="v-slot">缩写：# 预期：可放置在函数参数位置的 JavaScript 表达式
        (在支持的环境下可使用解构)。可选，即只需要在为插槽传入 prop 的时候使用。
        参数：插槽名 (可选，默认值是 default) 限用于
        <!-- <template> -->
        组件 (对于一个单独的带 prop 的默认插槽) 用法： 提供具名插槽或需要接收
        prop 的插槽。
      </el-descriptions-item>
      <el-descriptions-item label="v-pre">跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache
        标签。跳过大量没有指令的节点会加快编译。<span v-pre>{{ this
          will not be compiled }}
          <div>阿三大苏打</div>
          <div v-text="'adsjasdbajs'">999</div>
          <ul>
            <li v-for="i in list">{{ i }} for</li>
          </ul>
        </span>
      </el-descriptions-item>
      <el-descriptions-item label="v-cloak">这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] {
        display: none } 一起用时，这个指令可以隐藏未编译的 Mustache
        标签直到实例准备完毕。
        <a v-cloak>
          {{ message }}
        </a>
      </el-descriptions-item>
      <el-descriptions-item label="v-once">只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。
        示例 :
        <div>
          <!-- 单个元素 -->
          <span v-once>This will never change: {{ msg }}</span>
          <!-- 有子元素 -->
          <div v-once>
            <h1>comment</h1>
            <p>{{ msg }}</p>
          </div>
          <!-- 组件 -->
          <HelloWorld v-once msg="你好,子组件"></HelloWorld>
          <!-- `v-for` 指令-->
          <ul>
            <li v-for="i in list" v-once :key="i">{{ i }}</li>
          </ul>
        </div>
      </el-descriptions-item>
    </el-descriptions>
    <el-button @click="$router.back()">返回</el-button>
    <el-button @click="$router.go(-1)">返回go</el-button>
    <div v-bind:text-content.prop="text"></div>
    <HelloWorld :testData.sync="text" msg="你好,子组件">
      <div>父组件的默认插槽</div>
      <!-- <template v-slot:main >  
        注意 v-slot: 指令 只能在template 标签中使用 
        v-slot:[dynamicSlotName] - 动态插槽名称  支持动态插槽名称
        <div>父组件的具名插槽---</div>
      </template> -->
      <!--  注意:这种写法已经废弃,但仍可以使用 slot-scope="user" 接受子组件中的值 同时支持解构赋值slot-scope="{user}" <div slot="main" slot-scope="user">父组件的具名插槽---***</div> -->
      <!-- <template v-slot:main="user"> 如果是默认插槽可以直接写作 v-slot="user"   -->
      <!-- 当前写法可以使得 插槽 使用子组件中的数据 -->
      <!-- <div>父组件的具名插槽---{{ user.user }}</div>
      </template> -->
      <!-- <template v-slot:main="{user}"> 上面的写法也支持解构赋值的形式 
      v-slot:main="{ user: person }" 这种写法可以给user重命名 
       你甚至可以定义后备内容，用于插槽 prop 是 undefined 的情形：
         v-slot:main="{ user = { firstName: 'Guest' } }"  -->
      <!-- 当前写法可以使得 插槽 使用子组件中的数据 -->
      <!-- <div>父组件的具名插槽---{{ user }}</div>
      </template> -->
      <template #main="{ user }">
        <!-- 插槽的简写 v-slot: 简写为 #   
      #="{ user }" : 这种写法会报警告  #default="{ user }" 您必须使用一个插槽名-->
        <div>父组件的具名插槽---## {{ user }}</div>
      </template>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "instructionTest",
  components: {
    HelloWorld,
  },
  data () {
    return {
      text: "---------",
      message: "Hello v-cloak",
      msg: "ello,v-once",
      list: [1, 2, 3, 4, 5],
    };
  },
};
</script>

<style lang="less" scoped>
.contaor {
  padding: 20px;
}

[v-cloak] {
  display: none;
}
</style>
