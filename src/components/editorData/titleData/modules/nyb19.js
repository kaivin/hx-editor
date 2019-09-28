
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色,黄色,棕色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb19.js', // 该文件的文件名
        styleWebCode:'.smalltit019 { text-align: center; position: relative; z-index: 3; padding-bottom: 25px !important; }.smalltit019 strong { border: 1px solid #ffd200; display: inline-block; margin: 0px; color: #fff; padding: 5px 20px; background: #4c2204; position: relative; font-weight: normal; }.smalltit019 strong:after { content: ""; z-index: -1; border: 1px solid #ffd200; position: absolute; left: 5px; bottom: -5px; top: 5px; right: -5px; background: #ee1c27; }', // PC端样式
        styleWapCode:'.smalltit019{text-align:center; position:relative; z-index:3; padding-bottom:0.33333rem !important;}.smalltit019 strong{border:1px solid #ffd200; display:inline-block; margin:0px; color:#fff; padding:0.06667rem 0.2rem; background:#4c2204; position:relative; font-weight:normal;}.smalltit019 strong:after{content:""; z-index:-1; border:1px solid #ffd200; position:absolute; left:0.06667rem; bottom:-0.06667rem; top:0.06667rem; right:-0.06667rem; background:#ee1c27;}', // 移动端样式
        htmlString:'<p class="smalltit019"><strong>标题标题标题标题标题标题</strong></p>'
    };
}