
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'紫色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'number', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb85.js', // 该文件的文件名
        styleWebCode:'.smalltit085{text-align:center;position:relative;}.smalltit085:before{content:"";width:100%;height:1px;background:#cca4e3;display:block;position:absolute;left:0;top:50%;}.smalltit085 strong{background:#cca4e3;color:#fff!important;display:inline-block;padding:7px 30px;line-height:30px;position:relative;font-size:18px;}.smalltit085 strong:after, .smalltit085 strong:before{content:"";width:25px;height:25px;background:#fff;display:block;position:absolute;left:-13px;top:9px;transform:rotate(45deg);-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg);}.smalltit085 strong:after{left:auto;right:-13px;}', // PC端样式
        styleWapCode:'.smalltit085{text-align:center;position:relative;}.smalltit085:before{content:"";width:100%;height:1px;background:#cca4e3;display:block;position:absolute;left:0;top:50%;}.smalltit085 strong{background:#cca4e3;color:#fff!important;display:inline-block;padding:0 0.66667rem;line-height:0.66667rem;position:relative;}.smalltit085 strong:after, .smalltit085 strong:before{content:"";width:0.46667rem;height:0.46667rem;background:#fff;display:block;position:absolute;left:-.21875rem;top:.1066875rem;transform:rotate(45deg);-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg);}.smalltit085 strong:after{left:auto;right:-.21875rem;}', // 移动端样式
        htmlString:'<p class="smalltit085"><strong>标题标题</strong></p>'
    };
}