
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'绿色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'number', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb42.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.smalltit042{clear:both;text-align:center}.smalltit042 strong{display:inline-block;background:#00a200;color:#fff;font-size:.4rem;border-radius:.4rem;padding:.06667rem .26667rem;box-shadow:0 .06667rem 0 #aee6b8}', // 移动端样式
        htmlString:'<p class="smalltit042"><strong>标题标题标题标题标题标题</strong></p>'
    };
}