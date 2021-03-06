export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'icon', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb073.js', // 该文件的文件名
        class:'smalltxt073',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt073{ border: 1px solid rgb(1,102,155)!important; padding: 20px 3.3% 30px; position: relative;margin: 24px 0;}.smalltxt073::before{ content: ""; border-bottom: 1px dashed rgb(1,102,155)!important; position: absolute; left: 3.3%; right: 3.3%; bottom: 10px; }.smalltxt073 p{margin: 0!important;}', // PC端样式
        styleWapCode:'.smalltxt073{border: 1px solid rgb(1,102,155)!important;padding: 0.4rem 5% 0.66667rem;margin: .4rem 0;position: relative;}.smalltxt073::before{content: "";border-bottom: 1px dashed rgb(1,102,155)!important;position: absolute;left: 5%;right: 5%;bottom: 0.26667rem;}.smalltxt073 p{margin: 0!important;}', // 移动端样式
        htmlString:'<div class="smalltxt073"><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}