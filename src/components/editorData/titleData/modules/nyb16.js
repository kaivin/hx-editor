
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb16.js', // 该文件的文件名
        styleWebCode:'.smalltit016{text-align:center; position:relative; z-index:3; padding-bottom:25px !important;}.smalltit016 strong{border:1px solid #801a1d; border-radius:10px; display:inline-block; margin:0px; padding:5px 20px; background:#fff; font-weight:normal; position:relative; box-shadow:5px 5px 0px #d26a6d;}', // PC端样式
        styleWapCode:'.smalltit016{text-align:center; position:relative; z-index:3; padding-bottom:0.33333rem !important;}.smalltit016 strong{border:1px solid #801a1d; border-radius:0.13333rem; display:inline-block; margin:0rem; padding:0.06667rem 0.2rem; background:#fff; font-weight:normal; position:relative; box-shadow:0.06667rem 0.06667rem 0rem #d26a6d;}', // 移动端样式
        htmlString:'<p class="smalltit016"><strong>标题标题标题标题标题标题</strong></p>'
    };
}