

export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        class:'smalltit100',// 用来给js使用添加页面内样式使用
        fileName:'nyb100.js', // 该文件的文件名
        styleWebCode:'.smalltit100 strong{color: #272c38;font-size: 20px;position: relative;}.smalltit100 strong:before{content: "";display: block;width: 90%;height: 10px;position: absolute;left: 0;bottom: -2px;z-index: -1;background-color: rgb(2,143,199);border-radius: 0 6px 0 0;}', // PC端样式
        styleWapCode:'.smalltit100 strong{color:#272c38;font-size:.45333rem;position:relative}.smalltit100 strong:before{content:"";display:block;width:90%;height:.26667rem;position:absolute;left:0;bottom:-.05333rem;z-index:-1;background-color:#028fc7;border-radius:0 .16rem 0 0}', // 移动端样式
        htmlString:'<p class="smalltit100"><strong>标题标题标题标题</strong></p>'
    };
}