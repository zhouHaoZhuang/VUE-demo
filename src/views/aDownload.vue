<template>
  <div>
    <a :href="url" download> 下载 </a>
    <!-- 当前地址不跨域，故而可以直接使用 -->
    <hr />
    <a
      href="https://img2.baidu.com/it/u=3032299185,3338143701&fm=253&fmt=auto&app=138&f=PNG?w=445&h=298"
      download
    >
      下载失败
      <!-- 此时只可以预览   原因此时 当前连接跨域，因而不能直接下载-->
    </a>
    <hr />
    <a @click="downloadFile"> 外部下载 </a>
    <hr />
    <a @click="copy('copy')" id="copy"> 你好，点我复制内容 </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: require('@/assets/logo.png'),
      msg: 'Welcome to Your Vue.js App',
      data: {
        downloadUri:
          'https://img2.baidu.com/it/u=3032299185,3338143701&fm=253&fmt=auto&app=138&f=PNG?w=445&h=298',
        title: '你好'
      }
    }
  },
  methods: {
    downloadFile() {
      // 立即下载
      let url = this.data.downloadUri
      let fileName = this.data.title
      if (url.length <= 0) {
        return
      }
      var x = new XMLHttpRequest()
      x.open('GET', url, true)
      x.responseType = 'blob'
      x.onload = function () {
        console.log(x.response)
        var url = window.URL.createObjectURL(x.response)
        console.log(url)
        var a = document.createElement('a')
        a.href = url
        a.download = fileName
        a.click()
        window.URL.revokeObjectURL(url)
      }
      x.send()
    },
    // 实现复制功能
    async copy(select) {
      //该方法传选择器
      const oUrl = document.getElementById(select)
      const clipboardObj = navigator.clipboard
      if (clipboardObj) {
        await clipboardObj.writeText(oUrl.innerText.trim())
      } else {
        oUrl.select()
        document.execCommand('Copy')
      }
      console.log('复制成功')
      alert('复制成功')
    },
    // 第二种实现复制功能的方法
    copyto(text) {
      //该方法传复制内容  兼容性更强
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(
          function () {
            console.log('复制成功')
          },
          function () {
            this.copy2(text)
          }
        )
      } else {
        this.copy2(text)
      }
    },
    copy2(text) {
      if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
        const range = document.createRange()
        range.selectNode(document.querySelector('.copyTxt'))
        const selection = window.getSelection()
        if (selection.rangeCount > 0) selection.removeAllRanges()
        selection.addRange(range)
        document.execCommand('Copy')
        console.log('复制成功')
        selection.removeAllRanges()
      } else {
        const input = document.createElement('INPUT')
        input.value = text
        input.className = ''
        document.body.appendChild(input)
        input.select()
        if (document.execCommand('copy')) {
          document.execCommand('copy')
          console.log('复制成功')
        }
        document.body.removeChild(input)
      }
    }
  }
}
</script>

<style></style>
