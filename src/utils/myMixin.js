// 定义一个混入对象
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('我是mixin hello from mixin!')
    }
  }
}
export default myMixin