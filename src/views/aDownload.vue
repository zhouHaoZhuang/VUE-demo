<template>
  <div>
    <a :href="url"
       download> 下载 </a>
    <!-- 当前地址不跨域，故而可以直接使用 -->
    <hr />
    <a href="https://img2.baidu.com/it/u=3032299185,3338143701&fm=253&fmt=auto&app=138&f=PNG?w=445&h=298"
       download>
      下载失败
      <!-- 此时只可以预览   原因此时 当前连接跨域，因而不能直接下载-->
    </a>
    <hr />
    <a @click="downloadFile"> 外部下载 </a>
    <hr />
    <img ref="img"
         src="http://store.is.autonavi.com/showpic/9926946396f2b73c676dcc93f07634f9"
         alt=""
         referrerpolicy="http://store.is.autonavi.com">
    <a @click="copy('copy')"
       id="copy"> 你好，点我复制内容 </a>
  </div>
</template>

<script>
export default {
  data () {
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
  mounted () {
    const canvas = document.createElement('CANVAS')
    const ctx = canvas.getContext('2d')
    // let img = this.$refs.img
    // img = document.createElement('img')
    let img
    let downloadedImg = new Image();  // 该写法等同于document.createElement('img')
    downloadedImg.crossOrigin = "anonymous";  // Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported. 注意：  该语句可以解决此报错  作用是告诉canvas 允许使用跨域图片，并不代表该图片可以跨域，图片的跨域在生产环境必须有服务端支持  开发环境使用浏览器插件即可
    downloadedImg.addEventListener("load", canvas, false);
    downloadedImg.src = 'http://store.is.autonavi.com/showpic/9926946396f2b73c676dcc93f07634f9'
    img = downloadedImg
    img.onload = () => {
      canvas.height = img.height
      canvas.width = img.width
      ctx.drawImage(img, 0, 0)
      const dataURL = canvas.toDataURL('image/png')
      console.log(dataURL);
    }
  },
  methods: {
    downloadFile () {
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
    // https://www.itxst.com/clipboardjs/vue2.html   一个复制功能的插件地址
    async copy (select) {
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
    copyto (text) {
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
    copy2 (text) {
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
