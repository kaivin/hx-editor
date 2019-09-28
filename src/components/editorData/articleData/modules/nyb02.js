
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb02.js', // 该文件的文件名
        styleWebCode:'.smalltxt002 {border:1px solid #88abda;box-shadow:0px 5px 0px #c0d3eb;padding:15px !important;margin-bottom:25px!important;}', // PC端样式
        styleWapCode:'.smalltxt002{border:1px solid #88abda; box-shadow:0rem 0.13333rem 0rem #c0d3eb; padding:0.26667rem !important; margin-bottom:0.26667rem;}', // 移动端样式
        htmlString:'<p class="smalltxt002">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}