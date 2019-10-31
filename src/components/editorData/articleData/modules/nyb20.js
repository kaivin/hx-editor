export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'粉色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb20.js', // 该文件的文件名
        styleWebCode:'.smalltxt020 {position:relative;border-radius:10px;border:1px dashed #ffc0cb;z-index:10;padding:10px 15px !important;margin-bottom:20px!important;}.smalltxt020:before {content:"";border-radius:10px;position:absolute;left:5px;right:5px;bottom:5px;top:5px;background:#ffe7eb;z-index:-1;}', // PC端样式
        styleWapCode:'.smalltxt020{position:relative; border-radius:0.13333rem; border:1px dashed #ffc0cb; z-index:10; padding:0.26667rem 0.4rem !important; margin-bottom:0.26667rem;}.smalltxt020:before{content:""; border-radius:0.13333rem; position:absolute; left:0.06667rem; right:0.06667rem; bottom:0.06667rem; top:0.06667rem; background:#ffe7eb; z-index:-1;}', // 移动端样式
        htmlString:'<p class="smalltxt020">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}