export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb062.js', // 该文件的文件名
        styleWebCode:'.smalltxt062{background:#e7f3ff;border-radius:10px;padding:20px;position:relative;margin-left:auto;margin-right:auto;}.smalltxt062:before{content:"";border:1px dashed #2c83db;border-radius:10px;position:absolute;left:5px;right:5px;top:5px;bottom:5px;}', // PC端样式
        styleWapCode:'.smalltxt062{background:#e7f3ff;border-radius:0.13333rem;padding:0.26667rem;position:relative;margin:0.53333rem 0rem !important;}.smalltxt062:before{content:"";border:1px dashed #2c83db;border-radius:0.13333rem;position:absolute;left:0.06667rem;right:0.06667rem;top:0.06667rem;bottom:0.06667rem;}', // 移动端样式
        htmlString:'<p class="smalltxt062">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}