
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'橙色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb14.js', // 该文件的文件名
        styleWebCode:'.smalltxt014{position:relative; border:1px solid #f6b37f; padding:12px 18px !important; margin-bottom:20px;}.smalltxt014:before{content:""; position:absolute; border-width:2px; border-color:#f6b37f; border-style:dashed; left:2px; top:2px; right:2px; bottom:2px;}.smalltxt014:after{content:""; position:absolute; border-width:1px; border-color:#f6b37f; border-style:solid; left:6px; top:6px; right:6px; bottom:6px;}', // PC端样式
        styleWapCode:'.smalltxt014{position:relative; border:1px solid #f6b37f; padding:0.26667rem 0.4rem !important; margin-bottom:0.26667rem;}.smalltxt014:before{content:""; position:absolute; border-width:2px; border-color:#f6b37f; border-style:dashed; left:0.02667rem; top:0.02667rem; right:0.02667rem; bottom:0.02667rem;}.smalltxt014:after{content:""; position:absolute; border-width:1px; border-color:#f6b37f; border-style:solid; left:0.08rem; top:0.08rem; right:0.08rem; bottom:0.08rem;}', // 移动端样式
        htmlString:'<p class="smalltxt014">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}