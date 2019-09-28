
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'紫色,粉色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb28.js', // 该文件的文件名
        styleWebCode:'.smalltit028 {text-align:center;padding-bottom:20px !important;}.smalltit028 strong {display:inline-block;position:relative;padding:3px 15px;background:#98336b;color:#fff;font-weight:normal;}.smalltit028 strong:after, .smalltit028 strong:before {content:"";position:absolute;border-style:solid;border-color:transparent #ffd5d5 transparent #ffd5d5;top:50%;transform:translateY(-50%);}.smalltit028 strong:after {border-width:10px 0px 10px 10px;right:-14px;}.smalltit028 strong:before {border-width:10px 10px 10px 0px;left:-14px;}', // PC端样式
        styleWapCode:'.smalltit028{text-align:center;}.smalltit028 strong{display:inline-block; position:relative; padding:3px 15px; background:#98336b; color:#fff; font-weight:normal;}.smalltit028 strong:after, .smalltit028 strong:before{content:""; position:absolute; border-style:solid; border-color:transparent #ffd5d5 transparent #ffd5d5; top:50%; transform:translateY(-50%);}.smalltit028 strong:after{border-width:10px 0px 10px 10px; right:-14px;}.smalltit028 strong:before{border-width:10px 10px 10px 0px; left:-14px;}', // 移动端样式
        htmlString:'<p class="smalltit028"><strong>标题标题标题标题标题标题</strong></p>'
    };
}