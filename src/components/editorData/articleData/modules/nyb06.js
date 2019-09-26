
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'灰色,黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'dynamic', // dynamic(动态)|static(静态)
        fileName:'nyb06.js', // 该文件的文件名
        styleWebCode:'.smalltxt006{border:1px dashed #ccc; border-radius:5px; position:relative; padding:10px 15px !important; margin-bottom:20px; margin-top:5px; box-shadow:5px -5px 0px #faafaf;}.smalltxt006:after{content:""; position:absolute; left:-7px; top:20px; width:14px; height:38px; background:url(../images/insidestyle/small016.gif) no-repeat right center #fff; background-size:14px;}', // PC端样式
        styleWapCode:'.smalltxt006{border:1px dashed #ccc; border-radius:0.13333rem; position:relative; padding:0.26667rem !important; margin-bottom:0.26667rem; margin-top:0.06667rem; box-shadow:0.06667rem -0.06667rem 0rem #faafaf;}.smalltxt006:after{content:""; position:absolute; left:-0.09333rem; top:0.26667rem; width:0.18667rem; height:0.8rem; background:url(../images/insidestyle/small016.gif) no-repeat right center #fff; background-size:0.18667rem;}', // 移动端样式
        htmlString:'<p class="smalltxt006">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}
