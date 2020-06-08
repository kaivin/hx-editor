export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb004.js', // 该文件的文件名
        class:'smalltext004',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext004{background:rgba(0, 165, 214, 0.18);padding:0px 20px 5px 20px;border-radius:10px;overflow:hidden;max-width:800px;margin-left:auto;margin-right:auto; margin-top:25px; margin-bottom:25px;}.smalltext004 strong{display:inline-block;position:relative;border-radius:0px 20px 20px 0px;padding:10px 20px;background:#00a5d6;color:#fff!important;line-height:1.4;margin-left:-20px;overflow:hidden;font-size:18px;}.smalltext004 p{margin:0px 0px 10px 0px;}', // PC端样式
        styleWapCode:'.smalltext004{background:rgba(0, 165, 214, 0.18);padding:0rem 0.2rem 0.2rem 0.2rem; margin-top:0.5rem; margin-bottom:0.5rem;border-radius:0.13333rem;overflow:hidden;font-size:0.38667rem;}.smalltext004 strong{display:inline-block;position:relative;border-radius:0rem 0.2rem 0.2rem 0rem;padding:0.13333rem 0.26667rem;background:#00a5d6;color:#fff!important;line-height:1.4;margin-left:-0.2rem;overflow:hidden;}', // 移动端样式
        htmlString:'<div class="smalltext004"><strong>标题标题标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}