export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb051.js', // 该文件的文件名
        styleWebCode:'.smalltxt051{border:2px dashed #4a77ce;padding: 15px 15px 15px 25px;position:relative;}.smalltxt051:before{content:"";width: 16px;height: 27px;background:url(../images/insidestyle/small035.png) center no-repeat #fff;background-size: 16px;display:block;position:absolute;left: -8px;top:20px;padding:5px 0px;}', // PC端样式
        styleWapCode:'.smalltxt051{color:#767575;border:2px dashed #4a77ce;padding:0.2rem 0.26667rem;position:relative;margin:0.53333rem 0rem !important;}.smalltxt051:before{content:"";width:0.26667rem;height:0.44rem;background:url(../images/insidestyle/small035.png) center no-repeat #fff;background-size:0.26667rem;display:block;position:absolute;left:-0.17333rem;top:0.26667rem;padding:0.06667rem 0rem;}', // 移动端样式
        htmlString:'<p class="smalltxt051">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}