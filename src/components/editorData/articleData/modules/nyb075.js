export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb075.js', // 该文件的文件名
        class:'smalltxt075',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt075{clear:both; background:url(../images/insidestyle/smalltxt075_icon01.gif) repeat left top; display:block; padding:20px; border:1px solid rgba(2,143,199);}.smalltxt075 strong{clear:both; display:inline-block; line-height:24px; font-size:20px; margin:0rem; padding-bottom:15px; position: relative;background:url(../images/insidestyle/smalltxt075_icon02.gif) no-repeat right bottom;background-size:198px;}.smalltxt075 p{clear:both; display:block;}', // PC端样式
        styleWapCode:'.smalltxt075{clear:both; background:url(../images/insidestyle/smalltxt075_icon01.gif) repeat left top; display:block; padding:0.4rem; border:1px solid rgba(2,143,199);}.smalltxt075 strong{clear:both; display:inline-block; line-height: 0.8rem; font-size: .38667rem; margin:0rem; padding-bottom:0.2667rem; position: relative;background:url(../images/insidestyle/smalltxt075_icon02.gif) no-repeat right bottom;background-size:2.64rem;}.smalltxt075 p{clear:both; display:block;}', // 移动端样式
        htmlString:'<div class="smalltxt075"><strong>标题标题标题标题标题标题</strong><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}