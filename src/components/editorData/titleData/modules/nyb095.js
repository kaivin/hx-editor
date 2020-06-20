
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        class:'smalltit095',// 用来给js使用添加页面内样式使用
        fileName:'nyb095.js', // 该文件的文件名
        styleWebCode:'.smalltit095{position:relative;z-index:1;}.smalltit095 strong{display:inline-block;border-radius:30px;padding:8px 20px;line-height:30px;position:relative;background:rgb(1,102,155);color:#fff!important;font-size:18px;}', // PC端样式
        styleWapCode:'.smalltit095{position:relative;z-index:1;}.smalltit095 strong{display:inline-block;border-radius:50px;padding:0.06667rem 0.2rem;line-height:0.53333rem;position:relative;background:rgb(1,102,155);color:#fff!important;}', // 移动端样式
        htmlString:'<p class="smalltit095"><strong>标题标题标题</strong></p>'
    };
}