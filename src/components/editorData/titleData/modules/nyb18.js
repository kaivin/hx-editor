
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb18.js', // 该文件的文件名
        styleWebCode:'.smalltit018 { text-align: center; position: relative; z-index: 3; padding-bottom: 20 !important; }.smalltit018 strong { border: 2px solid #f29c9f; display: inline-block; padding: 5px 32px; background: #c7090f; font-weight: normal; position: relative; color: #fff; }.smalltit018 strong:after, .smalltit018 strong:before { position: absolute; content: "★"; font-size: 16px; line-height: 1; top: 50%; transform: translateY(-50%); }.smalltit018 strong:after { right: 10px; }.smalltit018 strong:before { left: 10px; }', // PC端样式
        styleWapCode:'.smalltit018{text-align:center; position:relative; z-index:3;}.smalltit018 strong{border:2px solid #f29c9f; display:inline-block; padding:0.06667rem 0.53333rem; background:#c7090f; font-weight:normal; position:relative; color:#fff;}.smalltit018 strong:after, .smalltit018 strong:before{position:absolute; content:"★"; font-size:0.33333rem; line-height:1; top:50%; transform:translateY(-50%);}.smalltit018 strong:after{right:0.13333rem;}.smalltit018 strong:before{left:0.13333rem;}', // 移动端样式
        htmlString:'<p class="smalltit018"><strong>标题标题标题标题标题标题</strong></p>'
    };
}