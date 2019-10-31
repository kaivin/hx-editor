
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'棕色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb73.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.smalltit073{margin:.2rem 0rem .13333rem !important;padding:.53333rem 0rem 0rem;position:relative;z-index:1}.smalltit073:before{content:"";width:100%;height:.13333rem;background:#ffe6d5;border-top:1px solid #b25d25;display:block;position:absolute;left:0;top:0}.smalltit073 strong{display:inline-block;background:#ffe6d5;border-radius:50px;padding:.06667rem .2rem;line-height:.53333rem;box-shadow:0 -.06667rem 0 #b25d25;position:relative}.smalltit073 strong:after,.smalltit073 strong:before{content:"";width:.13333rem;height:.46667rem;background:#ffe6d5;display:block;position:absolute;top:-.46667rem;z-index:-1}.smalltit073 strong:before{left:.4rem;border-left:1px solid #b25d25}.smalltit073 strong:after{right:.4rem;border-right:1px solid #b25d25}', // 移动端样式
        htmlString:'<p class="smalltit073"><strong>标题标题标题标题标题标题</strong></p>'
    };
}