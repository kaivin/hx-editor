
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh17.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special108{background:#eaf6ff;padding:.2rem .4rem;color:#2174b8;border:.0266875rem dashed #88c5f6;border-radius:.24rem;box-shadow:0 0 114px rgba(33,125,200,.3) inset}', // 移动端样式
        htmlString:'<p class="special108">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}