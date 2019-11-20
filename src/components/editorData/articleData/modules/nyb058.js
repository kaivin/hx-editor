export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb058.js', // 该文件的文件名
        styleWebCode:'.smalltxt058{background:#e9f6ff;border:2px solid #97c7f7;padding:15px;text-align:left;position:relative;z-index:1;max-width:800px;margin-left:auto;margin-right:auto;}', // PC端样式
        styleWapCode:'.smalltxt058{background:#e9f6ff;border:0.02667rem solid #97c7f7;padding:0.2rem;text-align:left;position:relative;z-index:1;margin:0.53333rem 0rem !important;}', // 移动端样式
        htmlString:'<p class="smalltxt058">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}