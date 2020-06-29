
export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        class:'smalltit014',// 用来给js使用添加页面内样式使用
        fileName:'nyb14.js', // 该文件的文件名
        styleWebCode:'.smalltit014{overflow:hidden}.smalltit014:before{content:"";display:inline-block;vertical-align:middle;width:20px;height:20px;background:url(../images/insidestyle/newicon14.png) no-repeat left top;background-size:100%;margin-right:10px}@media (max-width: 1440px){.smalltit014:before{width:18px;height:18px}}@media (max-width: 1280px){.smalltit014:before{width:16px;height:16px}}', // PC端样式
        styleWapCode:'.smalltit014{overflow:hidden}.smalltit014:before{content:"";display:inline-block;width:.4rem;height:.4rem;background:url(../images/insidestyle/newicon14.png) no-repeat left top;background-size:100%;vertical-align:middle;margin-right:.13333rem}', // 移动端样式
        htmlString:'<p class="smalltit014">标题标题标题标题标题标题</p>'
    };
}