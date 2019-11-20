
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb65.js', // 该文件的文件名
        styleWebCode:'.smalltit065{clear:both;display:block;position:relative;text-align:left;}.smalltit065 strong{clear:both;display:inline-block;position:relative;padding-bottom:15px;font-size:18px;}.smalltit065 strong:after, .smalltit065 strong:before{content:"";height:3px;display:block;position:absolute;left:0;}.smalltit065 strong:before{width:20%;background:#ffc773;bottom:8px;}.smalltit065 strong:after{width:50%;background:#fff2df;bottom:0px;}', // PC端样式
        styleWapCode:'.smalltit065{clear:both;display:block;position:relative;text-align:left;}.smalltit065 strong{clear:both;display:inline-block;position:relative;padding-bottom:0.26667rem;}.smalltit065 strong:after, .smalltit065 strong:before{content:"";height:0.06667rem;display:block;position:absolute;left:0;}.smalltit065 strong:before{width:30%;background:#ffc773;bottom:0.13333rem;}.smalltit065 strong:after{width:60%;background:#fff2df;bottom:0rem;}', // 移动端样式
        htmlString:'<p class="smalltit065"><strong>标题标题标题标题标题标题</strong></p>'
    };
}