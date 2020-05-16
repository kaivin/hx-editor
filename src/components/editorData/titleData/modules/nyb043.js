
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'绿色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'number', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb43.js', // 该文件的文件名
        styleWebCode:'.smalltit043{text-align:center;position:relative;}.smalltit043:before{content:"";width:100%;height:1px;background:#00a101;display:block;position:absolute;left:0;top:50%;}.smalltit043 strong{background:#00a101;color:#fff!important;display:inline-block;padding:7px 30px;line-height:30px;position:relative;font-size:18px;}.smalltit043 strong:after, .smalltit043 strong:before{content:"";width: 31px;height: 31px;background:#fff;display:block;position:absolute;left: -15px;top: 7px;transform:rotate(45deg);-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg);}.smalltit043 strong:after{left:auto;right: -15px;}', // PC端样式
        styleWapCode:'.smalltit043{text-align:center;position:relative;}.smalltit043:before{content:"";width:100%;height:1px;background:#00a101;display:block;position:absolute;left:0;top:50%;}.smalltit043 strong{background:#00a101;color:#fff!important;display:inline-block;padding:0 0.66667rem;font-size: 0.4rem;line-height: 2.2;position:relative;}.smalltit043 strong:after, .smalltit043 strong:before{content:"";width: 0.6182rem;height: 0.6182rem;background: #fff;display:block;position:absolute;left: -0.32rem;top: 0.13333rem;transform:rotate(45deg);-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg);}.smalltit043 strong:after{left:auto;right: -0.32rem;}', // 移动端样式
        htmlString:'<p class="smalltit043"><strong>标题标题</strong></p>'
    };
}