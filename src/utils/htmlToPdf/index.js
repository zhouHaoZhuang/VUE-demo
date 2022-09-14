/* eslint-disable no-mixed-spaces-and-tabs */
// 导出页面为PDF格式
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default {
  install(Vue, options) {
    console.log(options)
    Vue.prototype.getPdf = function (element) {
      // 当下载pdf时，若不在页面顶部会造成PDF样式不对,所以先回到页面顶部再下载
      let top = element
      if (top != null) {
        top.scrollIntoView()
        top = null
      }
      let title = this.exportPDFtitle;
      html2Canvas(element, {
        allowTaint: true, // 是否允许跨域图像污染画布
        // backgroundColor: 'transparent',
        // logging: false
      }).then(function (canvas) {
        // 获取canvas画布的宽高
        let contentWidth = canvas.width;
        let contentHeight = canvas.height;
        // eslint-disable-next-line no-mixed-spaces-and-tabs
        // 一页pdf显示html页面生成的canvas高度;
        let pageHeight = contentWidth / 841.89 * 592.28;
        // 未生成pdf的html页面高度
        let leftHeight = contentHeight;
        // 页面偏移
        let position = 0;
        // html页面生成的canvas在pdf中图片的宽高（本例为：横向a4纸[841.89,592.28]，纵向需调换尺寸）
        let imgWidth = 841.89;
        let imgHeight = 841.89 / contentWidth * contentHeight;
        let pageData = canvas.toDataURL('image/jpeg', 1.0)
        console.log(pageData)
        // var a = document.createElement('a')  //用于导出png
        // a.href = pageData
        // a.download = 'nihao'
        // a.click()
        let PDF = new JsPDF('l', 'pt', 'a4');
        // 两个高度需要区分: 一个是html页面的实际高度，和生成pdf的页面高度
        // 当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight;
            position -= 592.28;
            // 避免添加空白页
            if (leftHeight > 0) {
              PDF.addPage();
            }
          }
        }
        PDF.save(title + '.pdf')
      })
    }
  }
}
