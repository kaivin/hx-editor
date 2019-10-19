
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh39.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:' .special77{background:#e7f3ff;border-radius:.2666875rem;padding:.1333125rem .4rem;margin:.4rem 0;position:relative}.special77:before{content:"";border:1px dashed #2c83db;border-radius:.2666875rem;position:absolute;left:.1333125rem;right:.1333125rem;top:.1333125rem;bottom:.1333125rem}', // 移动端样式
        htmlString:'<div class="special77"><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}