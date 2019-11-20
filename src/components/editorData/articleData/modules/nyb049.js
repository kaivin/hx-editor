export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb049.js', // 该文件的文件名
        styleWebCode:'.smalltxt049{background:#97c7f7;border-radius:10px;color:#fff;padding:30px 15px 15px 15px;position:relative;margin-top:45px;max-width:800px;margin-left:auto;margin-right:auto;}.smalltxt049:before{content:"";width:50px;height:50px;background:url(../images/insidestyle/small034.png) center no-repeat #fff;border-radius:50%;background-size:20px;display:block;position:absolute;left:25px;top:-25px;}', // PC端样式
        styleWapCode:'.smalltxt049{background:#97c7f7;border-radius:0.13333rem;color:#fff;padding:0.4rem 0.4rem 0.26667rem 0.4rem;position:relative;margin:0.66667rem 0rem 0.53333rem 0rem !important;}.smalltxt049:before{content:"";width:0.66667rem;height:0.66667rem;background:url(../images/insidestyle/small034.png) center no-repeat #fff;border-radius:50%;background-size:0.26667rem;display:block;position:absolute;left:0.33333rem;top:-0.33333rem;}', // 移动端样式
        htmlString:'<p class="smalltxt049">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}