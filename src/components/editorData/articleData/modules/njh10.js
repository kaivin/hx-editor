
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh10.js', // 该文件的文件名
        styleWebCode:'.websitetext11{border: 5px solid #bcd0f5;border-radius: 10px;padding: 10px 2%;}', // PC端样式
        styleWapCode:'.websitetext11{border:.08rem solid #bcd0f5;border-radius:.1333125rem;padding:.1333125rem 4%}', // 移动端样式
        htmlString:'<p class="websitetext11">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}