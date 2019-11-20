export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb052.js', // 该文件的文件名
        styleWebCode:'.smalltxt052{border:2px solid #94c6f7;padding:10px 15px 15px 25px;position:relative;max-width:800px;margin-left:auto;margin-right:auto;}.smalltxt052:before{content:"";width:15px;height:15px;background:#fff;border:2px solid #94c6f7;border-radius:50%;display:block;position:absolute;left:-9px;top:15px;}', // PC端样式
        styleWapCode:'.smalltxt052{border:2px solid #94c6f7;padding:0.13333rem 0.2rem 0.2rem 0.33333rem;position:relative;margin:0.53333rem 0rem !important;}.smalltxt052:before{content:"";width:0.26667rem;height:0.26667rem;background:#fff;border:0.02667rem solid #94c6f7;border-radius:50%;display:block;position:absolute;left:-0.13333rem;top:0.4rem;}', // 移动端样式
        htmlString:'<p class="smalltxt052">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}