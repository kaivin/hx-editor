
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh45.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special80{color:#4168bf;border:1px dashed #97c7f7;padding:.24rem .4rem;position:relative}.special80:before{content:"";width:1.7064rem;height:.213375rem;background:url(../images/special80-zs.png) no-repeat #fff;background-size:100%;display:block;position:absolute;right:1.0625rem;bottom:-.09375rem}', // 移动端样式
        htmlString:'<p class="special80">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}