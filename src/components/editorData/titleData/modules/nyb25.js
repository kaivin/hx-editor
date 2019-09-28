
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'黑色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'dynamic', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb25.js', // 该文件的文件名
        styleWebCode:'.smalltit025 { text-align: center; padding-bottom: 20px !important; }.smalltit025 strong { display: inline-block; padding: 0rem 0rem; position: relative; font-weight: normal; }.smalltit025 strong:after, .smalltit025 strong:before { content: ""; position: absolute; background: url(../images/insidestyle/small012.gif) no-repeat center center; width: 38px; height: 20px; top: 50%; transform: translateY(-50%); }.smalltit025 strong:after { left: -45px; }.smalltit025 strong:before { right: -45px; }', // PC端样式
        styleWapCode:'.smalltit025{text-align:center;}.smalltit025 strong{display:inline-block; padding:0rem 0rem; position:relative; font-weight:normal;}.smalltit025 strong:after, .smalltit025 strong:before{content:""; position:absolute; background:url(../images/insidestyle/small012.gif) no-repeat center center; width:0.50667rem; height:0.26667rem; top:50%; transform:translateY(-50%);}.smalltit025 strong:after{left:-0.6rem;}.smalltit025 strong:before{right:-0.6rem;}', // 移动端样式
        htmlString:'<p class="smalltit025"><strong>标题标题标题标题标题标题</strong></p>'
    };
}