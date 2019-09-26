
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb04.js', // 该文件的文件名
        styleWebCode:'.smalltext004{background:rgba(0, 165, 214, 0.18); padding:0px 15px; border-radius:10px; overflow:hidden; margin-bottom:20px;}.smalltext004 strong{display:inline-block; position:relative; border-radius:0px 10px 10px 0px; padding:5px 15px; background:#00a5d6; color:#fff; margin-left:-15px; overflow:hidden; font-size:18px; margin-bottom:10px;}', // PC端样式
        styleWapCode:'.smalltext004{background:rgba(0, 165, 214, 0.18); padding:0rem 0.26667rem 0rem 0.26667rem; border-radius:0.13333rem; overflow:hidden; margin-bottom:0.26667rem;}.smalltext004 strong{display:inline-block; position:relative; border-radius:0rem 0.2rem 0.2rem 0rem; padding:0.06667rem 0.26667rem; background:#00a5d6; color:#fff; line-height:0.66667rem; margin-left:-0.26667rem; overflow:hidden; font-size:0.38667rem;}', // 移动端样式
        htmlString:'<div class="smalltext004"><strong>标题标题标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p><div>'
    };
}