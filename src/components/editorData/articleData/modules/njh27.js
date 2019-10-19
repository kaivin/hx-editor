
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh27.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special18{background:#e0f2ff;color:#4e79bf;padding:.4rem 5%;position:relative}.special18:after,.special18:before{content:"";width:.1466875rem;background:#94c6f7;border-radius:50px;position:absolute;left:0;top:-.09375rem;bottom:-.09375rem}.special18:after{left:auto;right:0}', // 移动端样式
        htmlString:'<p class="special18">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}