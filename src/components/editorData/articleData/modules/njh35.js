
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh35.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special73{border:1px solid #88bff2;border-radius:.1333125rem;border-bottom:.1066875rem solid #88bff2;padding: 0.2rem 0.3rem;}', // 移动端样式
        htmlString:'<p class="special73">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}