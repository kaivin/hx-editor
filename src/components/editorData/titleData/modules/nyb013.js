
export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'黄色,棕色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        class:'smalltit013',// 用来给js使用添加页面内样式使用
        fileName:'nyb13.js', // 该文件的文件名
        styleWebCode:'.smalltit013{background:url(../images/insidestyle/newicon13.png) no-repeat left 8px;background-size:20px;padding-left:30px;} @media (max-width:1760px){.smalltit013{background-position:left 8px;}} @media (max-width:1600px){.smalltit013{background-position:left 4px;background-size:20px;}} @media (max-width:1440px){.smalltit013{background-size:18px;}} @media (max-width:1280px){.smalltit013{background-position:left 3px;background-size:16px;padding-left:25px;}}', // PC端样式
        styleWapCode:'.smalltit013{background:url(../images/insidestyle/newicon13.png) no-repeat left 0.2rem;background-size:0.4rem;padding-left:0.53333rem;}', // 移动端样式
        htmlString:'<p class="smalltit013">标题标题标题标题标题标题</p>'
    };
}