
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'棕色,红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb24.js', // 该文件的文件名
        styleWebCode:'.smalltit024{text-align:center;}.smalltit024 strong{border-bottom:1px solid #b76b0c;color:#bf4e16;display:inline-block;padding:3px 15px;border-top:1px solid #b76b0c;position:relative;margin:7px 0px;}.smalltit024 strong:after, .smalltit024 strong:before{content:"";position:absolute;width:7px;height:7px;background:#7b3807;}.smalltit024 strong:after{left:0px;top:-4px;}.smalltit024 strong:before{right:0px;bottom:-4px;}', // PC端样式
        styleWapCode:'.smalltit024{text-align:center;}.smalltit024 strong{border-bottom:1px solid #b76b0c;color:#bf4e16;display:inline-block;padding:0rem 0.2rem;border-top:1px solid #b76b0c;position:relative;font-weight:normal;}.smalltit024 strong:after, .smalltit024 strong:before{content:"";position:absolute;width:0.12rem;height:0.12rem;background:#7b3807;}.smalltit024 strong:after{left:0px;top:-0.06667rem;}.smalltit024 strong:before{right:0px;bottom:-0.06667rem;}', // 移动端样式
        htmlString:'<p class="smalltit024"><strong>标题标题标题标题标题标题</strong></p>'
    };
}