
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh34.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special58{background:#fff;border-radius:.2666875rem;padding:.5333125rem .32rem 1px;margin:.4rem 0 .6rem 0;box-shadow:0 -0.12rem 0 #3f79b5,0 0 .16rem #bedbf5 inset;position: relative;}.special58 .p1 strong{background:#3f79b5;color:#fff;padding:0 .4rem;border-radius:.1333125rem;position:absolute;left:50%;top:-.1066875rem;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}', // 移动端样式
        htmlString:'<div class="special58"><p class="p1"><strong>标题标题标题</strong></p><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}