export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb060.js', // 该文件的文件名
        styleWebCode:'.smalltxt060{border:1px solid #88bff2;border-radius:10px;border-bottom:5px solid #88bff2;padding: 10px 15px;}', // PC端样式
        styleWapCode:'.smalltxt060{border:1px solid #88bff2;border-radius:0.13333rem;border-bottom:0.06667rem solid #88bff2;padding:0.2rem;margin:0.53333rem 0rem !important;}', // 移动端样式
        htmlString:'<p class="smalltxt060">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}