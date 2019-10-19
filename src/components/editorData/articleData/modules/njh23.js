
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh23.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special04{color:#767575;border:.0266875rem dashed #4a77ce;padding:.2rem .6rem;position:relative}.special04:before{content:"";width:.52rem;height:.7999875rem;background:url(../images/smalltxt018-zs.png) center no-repeat #fff;background-size:100%;display:block;position:absolute;left:-.24rem;top:.32rem}', // 移动端样式
        htmlString:'<p class="special04">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}