export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb05.js', // 该文件的文件名
        styleWebCode:'.smalltext005{padding:10px 15px 0px 15px; margin-bottom:20px; border-radius:10px; border:1px solid #ff461f; position:relative;}.smalltext005 strong{display:inline-block; padding:0px 0px 5px 0px; color:#ff461f; border-bottom:2px solid #ff461f; margin-bottom:5px; font-size:18px;}', // PC端样式
        styleWapCode:'.smalltext005{padding:0.26667rem 0.26667rem 0rem 0.26667rem; margin-bottom:0.26667rem; border-radius:0.13333rem; border:1px solid #ff461f; position:relative;}.smalltext005 strong{display:inline-block; padding:0rem 0rem 0.06667rem 0rem; color:#ff461f; line-height:0.66667rem; border-bottom:2px solid #ff461f; margin-bottom:0.13333rem; font-size:0.38667rem;}', // 移动端样式
        htmlString:'<div class="smalltext005"><strong>标题标题标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}