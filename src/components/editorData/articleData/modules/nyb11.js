
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'灰色,粉色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb11.js', // 该文件的文件名
        styleWebCode:'.smalltxt011{position:relative; border:1px dashed #cbcbcb; margin-top:.16rem; padding:15px 15px 10px 15px !important; margin-bottom:20px;}.smalltxt011:after{content:""; position:absolute; left:50%; top:-12px; width:64px; height:24px; background:url(../images/insidestyle/small005.png) no-repeat center center #fff; padding:0px; background-size:64px; transform:translateX(-50%);}', // PC端样式
        styleWapCode:'.smalltxt011{position:relative; border:1px dashed #cbcbcb; margin-top:0.16rem; padding:0.26667rem !important; margin-bottom:0.26667rem;}.smalltxt011:after{content:""; position:absolute; left:50%; top:-0.16rem; width:0.85333rem; height:0.32rem; background:url(../images/insidestyle/small005.png) no-repeat center center #fff; padding:0rem; background-size:0.85333rem; transform:translateX(-50%);}', // 移动端样式
        htmlString:'<p class="smalltxt011">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}