
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh36.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special75{margin:.4rem 0;padding:1px .4rem;border-radius:.2rem;box-shadow:0 0 .875rem rgba(136,191,242,.34) inset}.special75 .tit{width:fit-content;background:-webkit-linear-gradient(left,#84c8f3,#3d7bd0);background:-o-linear-gradient(right,#84c8f3,#3d7bd0);background:-moz-linear-gradient(right,#84c8f3,#3d7bd0);background:linear-gradient(to right,#84c8f3,#3d7bd0);color:#fff;font-weight:700;line-height:2.4;padding:0 .48rem;border-radius:0 50px 50px .24rem;margin-left:-.6rem;position:relative}.special75 .tit:before{content:"";width:0;border-bottom:.2rem solid #5ea1df;border-right:0 solid transparent;border-left:.2rem solid transparent;position:absolute;top:-.2rem;left:0;}.special75 .tit:after{content:"";width:.72rem;height:.32rem;background:url(../assets/images/njhimg/special74-zs2.png) center no-repeat;background-size:100%;display:inline-block;vertical-align:middle;margin-left:.2666875rem;margin-top:-.06875rem}.special75 p{margin: 0.4rem 0;}', // 移动端样式
        htmlString:'<div class="special75"><p class="tit">标题标题标题</p><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}