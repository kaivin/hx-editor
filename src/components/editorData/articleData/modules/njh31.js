
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh31.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special53{background:#e9f6ff;border:.0266875rem solid #97c7f7;margin:.8rem 0 0 0;padding: .4rem .2rem;text-align:center;position:relative;z-index:1}', // 移动端样式
        htmlString:'<p class="special53">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}