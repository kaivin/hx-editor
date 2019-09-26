
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb03.js', // 该文件的文件名
        styleWebCode:'.smalltext003{padding:20px 15px 10px 15px !important; border-radius:10px; border:1px solid #82cbef; position:relative; margin-top:20px; margin-bottom:20px;}.smalltext003 strong{background:#82cbef; color:#fff; display:block; border-radius:18px; padding:5px 15px; line-height:24px; text-align:center; position:absolute; font-size:18px; left:50%; transform:translateX(-50%); top:-18px;}', // PC端样式
        styleWapCode:'.smalltext003{padding:0rem 0.4rem 0.26667rem 0.4rem !important; border-radius:0.13333rem; border:1px solid #82cbef; position:relative; margin-top:0.53333rem; margin-bottom:0.26667rem;}.smalltext003 strong{display:block; text-align:center; border-radius:0.4rem; padding:0.13333rem 0.26667rem; background:#82cbef; color:#fff; line-height:1.4; margin-top:-0.4rem; margin-bottom:0.13333rem;}', // 移动端样式
        htmlString:'<p class="smalltext003"><strong>标题标题标题标题标题</strong>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}