
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh13.js', // 该文件的文件名
        styleWebCode:'.websitetext14{background:#bcd0f5;border-radius: 10px;padding: 10px 2%;position: relative;z-index: 1;}.websitetext14:before{content:"";background:#fff;border: 1px solid #bcd0f5;border-radius: 10px;position:absolute;left: 5px;right: 5px;top: -10px;bottom: -10px;z-index:-1;}', // PC端样式
        styleWapCode:'.websitetext14{background:#fff;border:1px solid #bcd0f5;border-radius:.1333125rem;padding:.2rem .4rem;margin:.4rem 0 .6666875rem 0!important;position:relative;z-index: 1;}.websitetext14:before{content:"";background:#bcd0f5;border-radius:.1333125rem;position:absolute;left:.2rem;right:.2rem;top:-.2rem;bottom:-.2rem;z-index:-1}', // 移动端样式
        htmlString:'<p class="websitetext14">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}