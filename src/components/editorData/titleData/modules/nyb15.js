
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色,橙色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb15.js', // 该文件的文件名
        styleWebCode:'.smalltit015 { text-align: center; position: relative; z-index: 10; padding-bottom: 25px !important; }.smalltit015 strong { border: 1px solid #577f88; display: inline-block; padding: 5px 20px; background: #fff; font-weight: normal; position: relative; }.smalltit015 strong:after { content: ""; border: 1px dashed #f1a927; position: absolute; left: 5px; bottom: -5px; top: 5px; right: -5px; z-index: -1; }', // PC端样式
        styleWapCode:'.smalltit015{text-align:center; position:relative; z-index:10; padding-bottom:0.33333rem !important;}.smalltit015 strong{border:1px solid #577f88; display:inline-block; margin:0rem; padding:0.06667rem 0.2rem; background:#fff; font-weight:normal; position:relative;}.smalltit015 strong:after{content:""; border:1px dashed #f1a927; position:absolute; left:0.06667rem; bottom:-0.06667rem; top:0.06667rem; right:-0.06667rem; z-index:-1;}', // 移动端样式
        htmlString:'<p class="smalltit015"><strong>标题标题标题标题标题标题</strong></p>'
    };
}