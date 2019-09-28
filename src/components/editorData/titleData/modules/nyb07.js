
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb07.js', // 该文件的文件名
        styleWebCode:'.smalltit007 { background: url(../images/insidestyle/newicon07.png) no-repeat left 7px; padding-left: 27px !important; background-size: 18px; }@media (min-width: 1366px) { .smalltit007 { background-position: left 12px; background-size: 20px; padding-left: 30px !important; }}@media (min-width: 1730px) { .smalltit007 { background-position: left 15px; background-size: 24px; padding-left: 35px !important; }}', // PC端样式
        styleWapCode:'.smalltit007{background: url(../images/insidestyle/newicon07.png) no-repeat left 0.2rem; background-size: 0.4rem; padding-left: 0.53333rem !important;}', // 移动端样式
        htmlString:'<p class="smalltit007">标题标题标题标题标题标题</p>'
    };
}