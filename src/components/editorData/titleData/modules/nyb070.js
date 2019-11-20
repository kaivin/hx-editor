
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'棕色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'number', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb70.js', // 该文件的文件名
        styleWebCode:'.smalltit070{clear:both;text-align:center;}.smalltit070 strong{display:inline-block;background:#b25d25;color:#fff;font-size:18px;border-radius:20px;padding:5px 20px;-webkit-box-shadow:0 3px 0 #ffe6d5;box-shadow:0 3px 0 #ffe6d5;}', // PC端样式
        styleWapCode:'.smalltit070{clear:both;text-align:center;}.smalltit070 strong{display:inline-block;background:#b25d25;color:#fff;font-size:0.4rem;border-radius:0.4rem;padding:0rem 0.26667rem;box-shadow:0 0.06667rem 0 #ffe6d5;}', // 移动端样式
        htmlString:'<p class="smalltit070"><strong>标题标题标题标题标题标题</strong></p>'
    };
}