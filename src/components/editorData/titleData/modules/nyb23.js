
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb23.js', // 该文件的文件名
        styleWebCode:'.smalltit023{text-align:center; padding-bottom:20px !important;}.smalltit023 strong{display:inline-block; position:relative; background:#cd3522; border-radius:.04rem; color:#fff; font-weight:normal; padding:5px 20px;}.smalltit023 strong:after{content:""; position:absolute; left:15px; bottom:5px; right:15px; height:1px; background:#fff;}', // PC端样式
        styleWapCode:'.smalltit023{text-align:center;}.smalltit023 strong{display:inline-block; position:relative; background:#cd3522; border-radius:0.04rem; color:#fff; font-weight:normal; padding:0.04rem 0.2rem; position:relative;}.smalltit023 strong:after{content:""; position:absolute; left:0.06667rem; bottom:0.06667rem; right:0.06667rem; height:1px; background:#fff;}', // 移动端样式
        htmlString:'<p class="smalltit023"><strong>标题标题标题标题标题标题</strong></p>'
    };
}