
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh38.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special61{background: #f0f7fe;background-size:100% 100%;border-top:.05333125rem solid #97c7f7;border-bottom:.05333125rem solid #97c7f7;padding:.2rem .4rem}.special61 p{margin:0}', // 移动端样式
        htmlString:'<div class="special61"><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}