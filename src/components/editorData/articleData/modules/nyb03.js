export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'橙色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb03.js', // 该文件的文件名
        styleWebCode:'.smalltxt003 {position:relative;border:1px solid #f6b37f;padding:20px 20px !important;margin-bottom:20px!important;}.smalltxt003:before {content:"";position:absolute;border:1px #f6b37f dashed;left:5px;top:5px;right:5px;bottom:5px;}', // PC端样式
        styleWapCode:'.smalltxt003{position:relative; border:1px solid #f6b37f; padding:0.26667rem 0.33333rem !important; margin-bottom:0.26667rem;}.smalltxt003:before{content:""; position:absolute; border:1px #f6b37f dashed; left:0.13333rem; top:0.13333rem; right:0.13333rem; bottom:0.13333rem;}', // 移动端样式
        htmlString:'<p class="smalltxt003">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}