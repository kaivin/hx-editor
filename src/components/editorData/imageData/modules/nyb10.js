
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'橙色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb10.js', // 该文件的文件名
        styleWebCode:'.smalltext010{padding:20px 15px 0px; border-radius:10px; border:1px solid #fd9001; position:relative; margin-bottom:20px; margin-top:18px;}.smalltext010 strong{background:#fd9001; color:#fff; display:block; border-radius:18px; padding:5px 15px; line-height:24px; text-align:center; font-size:18px; position:absolute; left:50%; transform:translateX(-50%); top:-18px;}', // PC端样式
        styleWapCode:'.smalltext010{padding:0rem 0.4rem 0rem 0.4rem; border-radius:0.13333rem; border:1px solid #fd9001; position:relative; margin-bottom:0.26667rem; margin-top:0.53333rem;}.smalltext010 strong{display:block; text-align:center; border-radius:0.4rem; padding:0.06667rem 0.26667rem; background:#fd9001; color:#fff; line-height:0.66667rem; margin-top:-0.4rem; margin-bottom:0.10667rem; font-size:0.38667rem;}', // 移动端样式
        htmlString:'<div class="smalltext010"><strong>标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文<p></div>'
    };
}