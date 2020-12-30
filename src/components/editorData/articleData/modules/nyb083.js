export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb083.js', // 该文件的文件名
        class:'smalltxt083',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt083{max-width: 800px;background: url(../images/insidestyle/smalltxt083-bg.png) center no-repeat;background-size: 100% 100%;padding: 1% 5%;margin-left: auto;margin-right: auto;}', // PC端样式
        styleWapCode:'.smalltxt083{background: url(../images/insidestyle/smalltxt083-bg.png) center no-repeat;background-size: 100% 100%;padding: 3% 6%;margin-left: auto;margin-right: auto;}', // 移动端样式
        htmlString:'<div class="smalltxt083"> <p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p> <p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p> <p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p> </div>'
    };
}