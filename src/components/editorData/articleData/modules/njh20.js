
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh20.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special40{padding:.2rem;box-shadow:0 0 .1625rem rgba(182,188,194,.48);margin-top:.1333125rem;position:relative}.special40:after,.special40:before{content:"";width:.24rem;height:.2rem;display:block;position:absolute;top:0}.special40:before{background:#97c7f7;left:44%}.special40:after{background:#c9e7ff;right:44%}.special40 p{border:.0266875rem solid #c9e7ff;padding:1px .2666875rem;margin:0}', // 移动端样式
        htmlString:'<div class="special40"><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}