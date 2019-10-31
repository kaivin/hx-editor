
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'绿色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'number', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb43.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.smalltit043{text-align:center;position:relative}.smalltit043:before{content:"";width:100%;height:1px;background:#00a101;display:block;position:absolute;left:0;top:50%}.smalltit043 strong{background:#00a101;color:#fff;display:inline-block;padding:0 .66667rem;line-height:.66667rem;position:relative}.smalltit043 strong:after,.smalltit043 strong:before{content:"";width:.46667rem;height:.46667rem;background:#fff;display:block;position:absolute;left:-.21875rem;top:.1066875rem;transform:rotate(45deg);-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg)}.smalltit043 strong:after{left:auto;right:-.21875rem}', // 移动端样式
        htmlString:'<p class="smalltit043"><strong>标题标题</strong></p>'
    };
}