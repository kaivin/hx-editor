
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb20.js', // 该文件的文件名
        styleWebCode:'.smalltit020 { text-align: center; padding-bottom: 25px !important; }.smalltit020 strong { position: relative; display: inline-block; border: 1px solid #c7090f; padding: 5px 20px; box-shadow: 0px 5px 0px #ff545894; color: #c7090f; font-weight: normal; }', // PC端样式
        styleWapCode:'.smalltit020{text-align:center; padding-bottom:0.33333rem !important;}.smalltit020 strong{position:relative; display:inline-block; border:1px solid #c7090f; padding:0.06667rem 0.2rem; box-shadow:0px 0.06667rem 0px #ff545894; color:#c7090f; font-weight:normal;}', // 移动端样式
        htmlString:'<p class="smalltit020"><strong>标题标题标题标题标题标题</strong></p>'
    };
}