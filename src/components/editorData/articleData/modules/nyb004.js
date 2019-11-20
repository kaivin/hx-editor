export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb004.js', // 该文件的文件名
        styleWebCode:'.smalltxt004{border:1px solid #f29c9f;border-radius:5px;position:relative;padding:15px !important;max-width:800px;margin-left:auto;margin-right:auto;}', // PC端样式
        styleWapCode:'.smalltxt004{border:1px solid #f29c9f;border-radius:0.13333rem;position:relative;padding:0.26667rem;margin:0.53333rem 0rem;}', // 移动端样式
        htmlString:'<p class="smalltxt004">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}