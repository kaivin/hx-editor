export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'绿色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb021.js', // 该文件的文件名
        styleWebCode:'.smalltxt021{background:#ceefce;border-radius:10px;padding:12px 15px;position:relative;max-width:800px;margin-left:auto;margin-right:auto;}.smalltxt021:before{content:"";border:1px solid #ceefce;border-radius:10px;position:absolute;left:10px;top:-10px;right:10px;bottom:-10px;}', // PC端样式
        styleWapCode:'.smalltxt021{background:#ceefce;border-radius:0.13333rem;padding:0.33333rem 0.4rem;margin:0.53333rem 0rem 0.53333rem 0rem;position:relative;}.smalltxt021:before{content:"";border:1px solid #ceefce;border-radius:0.13333rem;position:absolute;left:0.2rem;top:-0.2rem;right:0.2rem;bottom:-0.2rem;}', // 移动端样式
        htmlString:'<p class="smalltxt021">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}