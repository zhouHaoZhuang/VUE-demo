<template>
  <div>
    web 数据库
    <div id="status"></div>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {
    this.createDatabase()
    let a = { b: 12 }
    console.log(a?.b ?? 0, '---------');
  },
  methods: {
    createDatabase () {

      // openDatabase：这个方法使用现有的数据库或者新建的数据库创建一个数据库对象。
      // transaction：这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。
      // executeSql：这个方法用于执行实际的 SQL 查询。

      // openDatabase() 方法对应的五个参数说明：
      // 数据库名称
      // 版本号
      // 描述文本
      // 数据库大小
      // 创建回调
      var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024, () => {
        console.log('创建数据库成功')  // 只有首次创建才会执行
      });
      db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
        tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "菜鸟教程")');
        tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "www.runoob.com")');
      });

      let msg = ''
      db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
          var len = results.rows.length, i;
          msg = "<p>查询记录条数: " + len + "</p>";
          document.querySelector('#status').innerHTML += msg;

          for (i = 0; i < len; i++) {
            // alert(results.rows.item(i).log);
            console.log(results.rows.item(i).log);
          }

        }, null);
      });
      db.transaction(function (tx) {
        tx.executeSql('DELETE FROM LOGS  WHERE id=1');
      });

      db.transaction(function (tx) {
        tx.executeSql('UPDATE LOGS SET log=\'www.w3cschool.cc\' WHERE id=2');
      });
      console.log(db);
    }
  },
}
</script>

<style>
</style>