<template>
  <div class="wrap">
    <div id="pdfDom" style="padding: 10px">
      <el-table :data="tableData" border>
        <el-table-column prop="date" label="日期" width="250"></el-table-column>
        <el-table-column prop="name" label="姓名" width="250"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>

    <el-button @click="$router.forward()">前进</el-button>
    <el-button @click="$router.go(1)">前进go</el-button>
    <button type="button" style="margin-top: 20px" @click="btnClick">
      导出PDF
    </button>
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
        this.getPdf();
      });
    },
  },
};
</script>
