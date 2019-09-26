export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'棕色,黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb01.js', // 该文件的文件名
        styleWebCode:'.smalltext001{background:#fff4e2; padding:15px 15px 0px 15px !important; border-radius:10px; margin-bottom:20px;}.smalltext001 strong{display:inline-block; position:relative; border-radius:10px; padding:10px 15px; background:#cc5510; color:#fff; line-height:1; overflow:hidden; font-size:18px;}', // PC端样式
        styleWapCode:'.smalltext001{background:#fff4e2; padding:0.2rem !important; border-radius:0.13333rem; margin-bottom:0.26667rem;}.smalltext001 strong{display:inline-block; position:relative; border-radius:0.13333rem; padding:0.06667rem 0.26667rem; background:#cc5510; color:#fff; line-height:0.66667rem; overflow:hidden; font-size:0.38667rem;}', // 移动端样式
        htmlString:'<div class="smalltext001"><strong>标题标题标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}