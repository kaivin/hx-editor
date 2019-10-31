
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'青色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb55.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.smalltit055{text-align:center}.smalltit055 strong{display:inline-block;position:relative;border-radius:.42667rem;background:#17c6c6;padding:0rem 0rem .10667rem 0rem}.smalltit055 strong span{clear:both;display:block;background:#17c6c6;color:#fff;padding:.06667rem .26667rem;border-radius:50px;box-shadow:0 .05333125rem 0 #fff;font-size:.4rem;line-height:1.5}', // 移动端样式
        htmlString:'<p class="smalltit055"><strong><span>标题标题标题标题标题标题</span></strong></p>'
    };
}