
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'棕色,黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb12.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'', // 移动端样式
        htmlString:'<ul class="smalltext012"><li><p class="smalltext012top"><span>01</span><span>标题标题标题标题标题标题</span></p><p class="smalltext012bom">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></li><li><p class="smalltext012top"><span>02</span><span>标题标题标题标题标题标题</span></p><p class="smalltext012bom">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></li></ul>'
    };
}