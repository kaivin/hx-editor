
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh24.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special27{border:.0266875rem solid #94c6f7;padding:.1333125rem 4%;position:relative}.special27:before{content:"";width:.32rem;height:.32rem;background:#fff;border:.0266875rem solid #94c6f7;border-radius:50%;display:block;position:absolute;left:-.16875rem;top:.2666875rem}', // 移动端样式
        htmlString:'<p class="special27">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}