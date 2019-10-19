
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh48.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special99{background:url(../images/special99-bg.png) center top no-repeat;background-size:100%;padding:.32rem .4rem .5333125rem;color:#3168c5}', // 移动端样式
        htmlString:'<p class="special99">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}