
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh12.js', // 该文件的文件名
        styleWebCode:'.websitetext13{color: #3a4f9f !important;padding:15px;background:#e5eefe;border-radius:15px;position:relative;z-index: 1;}.websitetext13::before{content:"";border: 1px dashed #bcd0f5;border-radius:15px;position:absolute;left:-5px;right:-5px;top:-5px;bottom:-5px;z-index: -1;}', // PC端样式
        styleWapCode:'.websitetext13{padding:.2rem .4rem;background:#e5eefe;border-radius:.1333125rem;position:relative}.websitetext13::before{content:"";border:1px dashed #bcd0f5;border-radius:.1333125rem;position:absolute;left:-.1333125rem;right:-.1333125rem;top:-.1333125rem;bottom:-.1333125rem;z-index:-1}', // 移动端样式
        htmlString:'<p class="websitetext13">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}