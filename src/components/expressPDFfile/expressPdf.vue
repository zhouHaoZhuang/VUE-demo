<template>
  <div class="wrap">
    <div id="pdfDom" style="padding: 10px" ref="pdfDom">
      <div class="none">
        asdgahgdjshaj
      </div>
      <el-table :data="tableData" border>
        <el-table-column prop="date" label="日期" width="250"></el-table-column>
        <el-table-column prop="name" label="姓名" width="250"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>

    <el-button @click="$router.forward()">前进</el-button>
    <el-button @click="$router.go(1)">前进go</el-button>
    <el-button type="button" style="margin-top: 20px" @click="btnClick">
      导出PDF
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'expressPdf',
  data () {
    return {
      exportPDFtitle: "页面导出PDF文件名",
      tableData: [
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "重庆市九龙坡区火炬大道",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "重庆市九龙坡区火炬大道",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "南京市江宁区将军大道",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "南京市江宁区将军大道",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "武汉市洪山区文化大道",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "武汉市洪山区文化大道",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "武汉市洪山区文化大道",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "南京市江宁区将军大道",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "武汉市洪山区文化大道",
        },
      ],
    };
  },
  methods: {
    btnClick () {
      this.$nextTick(() => {
        this.getPdf(this.$refs.pdfDom);   // 此方法直接挂载在了  vue 实例上面，所以可以直接调用
      });
    },

    // 创建一个图片的blod对象,并接受一个base64的图片地址

    /* 
    * 创建一个图片的blod对象,并接受一个base64的图片地址
    * @param {String}  图片的urL地址 网络图片的地址
    * @param {Function} callback 回调函数  返回一个base64的图片地址
    
    */
    getLocalImgUrl (url, callback) {
      var x = new XMLHttpRequest()
      x.open('GET', url, true)
      x.responseType = 'blob'
      x.onload = () => {
        this.blobToBase64(x.response, (dataurl) => {
          callback(dataurl)
        });
      }
      x.send()
    },
    /*
    * 将blob对象转换为base64
    * @param {Blob} blob 图片的blob对象
    * @param {Function} callback 回调函数  图片的blob对象的base64编码
    */
    blobToBase64 (blob, callback) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        callback(e.target.result);
      };
      fileReader.readAsDataURL(blob);
    },
  },
};
</script>
<style lang="less" scoped>
#pdfDom {
  .none {
    // display: none;
  }
}
</style>
