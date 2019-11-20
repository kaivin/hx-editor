export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb046.js', // 该文件的文件名
        styleWebCode:'.smalltxt046{background:#eaf6ff;padding:15px;color:#2174b8;border:1px dashed #88c5f6;border-radius:10px;-webkit-box-shadow:0 0 70px rgba(33, 125, 200, 0.3) inset;box-shadow:0 0 70px rgba(33, 125, 200, 0.3) inset;max-width:800px;margin-left:auto;margin-right:auto;}', // PC端样式
        styleWapCode:'.smalltxt046{background:#eaf6ff;padding:0.2rem;color:#2174b8;border:1px dashed #88c5f6;border-radius:0.13333rem;-webkit-box-shadow:0 0 0.93333rem rgba(33, 125, 200, 0.3) inset;box-shadow:0 0 0.93333rem rgba(33, 125, 200, 0.3) inset;margin:0.53333rem 0rem !important;}', // 移动端样式
        htmlString:'<p class="smalltxt046">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}