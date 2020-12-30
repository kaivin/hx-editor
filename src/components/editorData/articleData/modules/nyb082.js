export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb082.js', // 该文件的文件名
        class:'smalltxt082',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltxt082{padding: 1px 4%;margin: 5% auto;border-radius: 20px;box-shadow: 0 -10px 15px rgba(1,102,155,0.5) inset,0 3px 5px rgba(1,102,155,0.5);}', // PC端样式
        styleWapCode:'.smalltxt082{padding: 1px 4%;margin: 5% auto;border-radius: 20px;box-shadow: 0 -0.2133rem 0.2rem rgba(1,102,155,0.5) inset, 0 0.04rem 0.08rem rgba(1,102,155,0.5);}', // 移动端样式
        htmlString:'<div class="smalltxt082"> <p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p> </div>'
    };
}