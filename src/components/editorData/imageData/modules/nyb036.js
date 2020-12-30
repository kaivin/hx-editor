export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb036.js', // 该文件的文件名
        class:'smalltext036',// 用来给js使用添加页面内样式使用
        styleWebCode:'.smalltext036{max-width: 800px;border: 2px solid  rgb(2,143,199);padding: 1px 3.6%;margin: 30px auto;position: relative;}.smalltext036:before{content: "";width: 50%;height: 7px;background: rgb(2,143,199);display: block;position: absolute;left: -2px;top: -6px;}.smalltext036 .smalltext036sty1{font-size: 18px;color: rgba(1,102,155,1) !important;font-weight: bold;margin-left: -15px;}.smalltext036 img{width: 100%;} ', // PC端样式
        styleWapCode:'.smalltext036{border: 0.02667rem solid  rgb(2,143,199);padding: 1px 3.6%;margin: 0.48rem auto;position: relative;}.smalltext036:before{content: "";width: 50%;height: 0.12rem;background: rgb(2,143,199);display: block;position: absolute;left: -0.02667rem;top: -0.12rem;}.smalltext036 .smalltext036sty1{color: rgba(1,102,155,1) !important;font-weight: bold;}.smalltext036 img{width: 100%;} ', // 移动端样式
        htmlString:'<div class="smalltext036"> <p class="smalltext036sty1"><span>标题标题标题</span></p> <p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p> <p><img src="https://www.hxjq.cn/images/nopicture01.jpg" alt=""></p> </div>'
    };
}