
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'棕色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb72.js', // 该文件的文件名
        styleWebCode:'.smalltit072{clear:both;display:block;position:relative;text-align:left;}.smalltit072 strong{clear:both;display:inline-block;position:relative;padding-bottom:15px;font-size:18px;}.smalltit072 strong:after, .smalltit072 strong:before{content:"";height:3px;display:block;position:absolute;left:0;}.smalltit072 strong:before{width:20%;background:#b25d25;bottom:8px;}.smalltit072 strong:after{width:50%;background:#ffe6d5;bottom:0px;}', // PC端样式
        styleWapCode:'.smalltit072{clear:both;display:block;position:relative;text-align:left;}.smalltit072 strong{clear:both;display:inline-block;position:relative;padding-bottom:0.26667rem;}.smalltit072 strong:after, .smalltit072 strong:before{content:"";height:0.06667rem;display:block;position:absolute;left:0;}.smalltit072 strong:before{width:30%;background:#b25d25;bottom:0.13333rem;}.smalltit072 strong:after{width:60%;background:#ffe6d5;bottom:0rem;}', // 移动端样式
        htmlString:'<p class="smalltit072"><strong>标题标题标题标题标题标题</strong></p>'
    };
}