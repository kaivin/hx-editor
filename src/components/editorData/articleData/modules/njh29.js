
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh29.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special07{border:.02666875rem solid #5885d0;padding:.2rem 5%;position:relative}.special07 span:after,.special07 span:before,.special07:after,.special07:before{content:"";width:.4rem;height:.4rem;background:url(../images/special07.jpg) no-repeat;background-size:100%;display:block;position:absolute}.special07:before{left:-.02666875rem;top:-.02666875rem}.special07:after{right:-.02666875rem;top:-.02666875rem;-moz-transform:scaleX(-1);-webkit-transform:scaleX(-1);-o-transform:scaleX(-1);transform:scaleX(-1);filter:FlipH}.special07 span{margin-bottom:.2rem;display:block}.special07 span:before{left:-.02666875rem;bottom:-.02666875rem;-moz-transform:scaleY(-1);-webkit-transform:scaleY(-1);-o-transform:scaleY(-1);transform:scaleY(-1);filter:FlipV}.special07 span:after{right:-.02666875rem;bottom:-.02666875rem;transform:rotate(180deg);-ms-transform:rotate(180deg);-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg);-o-transform:rotate(180deg)}', // 移动端样式
        htmlString:'<p class="special07"><span>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</span></p>'
    };
}