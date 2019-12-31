export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色,黑色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb016.js', // 该文件的文件名
        styleWebCode:'.smalltxt016{position:relative;background-size:100%;border-radius:5px;padding:15px !important;border:1px solid #333333;}.smalltxt016:after, .smalltxt016:before{content:"";position:absolute;width:14px;height:10px;}.smalltxt016:after{background:url(../images/insidestyle/small009.png) no-repeat left top;right:40px;bottom:-5px;}.smalltxt016:before{background:url(../images/insidestyle/small010.png) no-repeat left top;left:40px;top:-5px;}', // PC端样式
        styleWapCode:'.smalltxt016{position:relative;border-radius:0.13333rem;padding:0.2rem 0.26667rem;border:1px solid #333333;margin:0.53333rem 0rem 0.53333rem 0rem;}.smalltxt016:after, .smalltxt016:before{content:"";position:absolute;width:0.18667rem;height:0.13333rem;}.smalltxt016:after{background:url(../images/insidestyle/small009.png) no-repeat left top;right:0.53333rem;bottom:-0.06667rem;}.smalltxt016:before{background:url(../images/insidestyle/small010.png) no-repeat left top;left:0.53333rem;top:-0.06667rem;}', // 移动端样式
        htmlString:'<p class="smalltxt016">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}