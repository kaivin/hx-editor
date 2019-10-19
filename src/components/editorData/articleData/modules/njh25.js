
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh25.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special20{background:#e0f2ff;padding:.2rem 4%;margin:.4rem .2rem!important;position:relative}.special20:after,.special20:before{content:"";width:1.24rem;height:.6666875rem;background:url(../images/special20-zs.png) no-repeat;background-size:100%;display:block;position:absolute}.special20:before{left:-.16rem;top:-.16rem}.special20:after{right:-.16rem;bottom:-.16rem;transform:rotate(180deg);-ms-transform:rotate(180deg);-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg);-o-transform:rotate(180deg)}', // 移动端样式
        htmlString:'<p class="special20">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}