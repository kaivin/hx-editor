
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh22.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special33{position:relative}.special33:before{content:"";background:#c7e5ff;position:absolute;left:0;right:0;top:0;bottom:0;transform:rotate(-3deg);-ms-transform:rotate(-3deg);-moz-transform:rotate(-3deg);-webkit-transform:rotate(-3deg);-o-transform:rotate(-3deg)}.special33 span{background:#fff;border:.0266875rem solid #4a77ce;padding:.1333125rem 4%;position:relative;display: block;}', // 移动端样式
        htmlString:'<p class="special33"><span>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</span></p>'
    };
}