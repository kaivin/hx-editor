export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb043.js', // 该文件的文件名
        styleWebCode:'.smalltxt043{text-indent:0 !important;background:#fff;border:1px solid #bcd0f5;border-radius:.1333125rem;padding: 0px 20px;position:relative;z-index:1;margin-bottom: 25px!important;margin-top: 25px!important;border-radius: 10px;}.smalltxt043:before{content:"";background:#bcd0f5;border-radius:10px;position:absolute;left: 5px;right: 5px;top: -5px;bottom: -5px;z-index:-1;}', // PC端样式
        styleWapCode:'.smalltxt043{background:#fff;border:1px solid #bcd0f5;border-radius:0.13333rem;padding:0rem 0.46667rem;margin:0.66667rem 0rem !important;position:relative;z-index:1;}.smalltxt043:before{content:"";background:#bcd0f5;border-radius:0.13333rem;position:absolute;left:0.13333rem;right:0.13333rem;top:-0.13333rem;bottom:-0.13333rem;z-index:-1;}', // 移动端样式
        htmlString:'<p class="smalltxt043">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}