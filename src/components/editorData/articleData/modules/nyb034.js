export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb034.js', // 该文件的文件名
        styleWebCode:'.smalltxt034{color:#3a4f9f !important;border:1px solid #bcd0f5;border-radius:10px;padding:0px 20px;position:relative;z-index:2;max-width:800px;margin-left:auto;margin-right:auto;}.smalltxt034:before{content:"";background:#bcd0f5;border-radius:10px;position:absolute;left:10px;top:-10px;right:10px;bottom:-10px;z-index:-1;}', // PC端样式
        styleWapCode:'.smalltxt034{color:#3a4f9f !important;background:#bcd0f5;border-radius:0.13333rem;padding:0.13333rem 0.2rem;margin:0.53333rem 0.13333rem !important;position:relative;}.smalltxt034:before{content:"";border:1px solid #bcd0f5;border-radius:0.13333rem;position:absolute;left:-0.13333rem;top:0.26667rem;right:-0.13333rem;bottom:0.26667rem;}', // 移动端样式
        htmlString:'<p class="smalltxt034">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}