export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb042.js', // 该文件的文件名
        styleWebCode:'.smalltxt042{padding:10px 15px;border-radius:10px;background:#e5eefe;border-radius:10px;position:relative;z-index:2;max-width:800px;margin-left:auto;margin-right:auto;}.smalltxt042:before{content:"";border:1px dashed #bcd0f5;border-radius:10px;left:-10px;right:-10px;top:-10px;bottom:-10px;position:absolute;z-index:-1;}', // PC端样式
        styleWapCode:'.smalltxt042{padding:0.13333rem 0.2rem;background:#e5eefe;border-radius:0.13333rem;position:relative;z-index:2;margin:0.66667rem 0.13333rem !important;}.smalltxt042::before{content:"";border:1px dashed #bcd0f5;border-radius:0.13333rem;position:absolute;left:-0.13333rem;right:-0.13333rem;top:-0.13333rem;bottom:-0.13333rem;z-index:-1;}', // 移动端样式
        htmlString:'<p class="smalltxt042">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}