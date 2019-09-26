
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色,黄色,黑色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'dynamic', // dynamic(动态)|static(静态)
        fileName:'nyb12.js', // 该文件的文件名
        styleWebCode:'.smalltxt012{position:relative; margin-top:22px; border:1px solid #333333; padding:10px 15px !important; margin-bottom:30px;}.smalltxt012:after, .smalltxt012:before{content:""; position:absolute;}.smalltxt012:after{background:url(../images/insidestyle/small006.gif) no-repeat left top; width:68px; height:22px; left:0px; top:-22px;}.smalltxt012:before{background:url(../images/insidestyle/small007.gif) no-repeat right bottom; width:72px; height:18px; right:0px; bottom:-18px;}', // PC端样式
        styleWapCode:'.smalltxt012{position:relative; margin-top:0.46667rem; border:1px solid #333333; padding:0.4rem !important; margin-bottom:0.53333rem;}.smalltxt012:after, .smalltxt012:before{content:""; position:absolute;}.smalltxt012:after{background:url(../images/insidestyle/small006.gif) no-repeat left top; width:0.90667rem; height:0.29333rem; left:0px; top:-0.26667rem;}.smalltxt012:before{background:url(../images/insidestyle/small007.gif) no-repeat right bottom; width:0.96rem; height:0.24rem; right:0px; bottom:-0.26667rem;}', // 移动端样式
        htmlString:'<p class="smalltxt012">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}