export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb031.js', // 该文件的文件名
        styleWebCode:'.smalltxt031{border:1px solid #bcd0f5;padding:15px 20px;border-radius:30px 0 30px 0;position:relative;color:#4068ac;max-width:800px;margin-left:auto;margin-right:auto;}.smalltxt031:after{content:"";position:absolute;border-radius:30px 0 30px 0;border:1px dashed #bcd0f5;left:5px;top:5px;right:5px;bottom:5px;}', // PC端样式
        styleWapCode:'.smalltxt031{border:1px solid #bcd0f5;padding:0.26667rem 0.33333rem;border-radius:0.4rem 0rem;position:relative;color:#4068ac;margin:0.53333rem 0rem 0.53333rem 0rem;}.smalltxt031:after{content:"";position:absolute;border-radius:0.4rem 0rem;border:1px dashed #bcd0f5;left:0.13333rem;top:0.13333rem;right:0.13333rem;bottom:0.13333rem;}', // 移动端样式
        htmlString:'<p class="smalltxt031">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}