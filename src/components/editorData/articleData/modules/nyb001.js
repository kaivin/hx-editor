export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'灰色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb001.js', // 该文件的文件名
        styleWebCode:'.smalltxt001{border:1px solid #bdbdbd;box-shadow:0px 0px 6px #dddcdb inset, 0px 0px 6px #dddcdb;padding:15px;}', // PC端样式
        styleWapCode:'.smalltxt001{border:1px solid #bdbdbd;margin:0.53333rem 0rem;box-shadow:0rem 0rem 0.06667rem #dddcdb inset, 0rem 0rem 0.06667rem #dddcdb;padding:0.26667rem;}', // 移动端样式
        htmlString:'<p class="smalltxt001">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}