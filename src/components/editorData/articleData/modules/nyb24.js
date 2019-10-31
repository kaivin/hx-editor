export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb24.js', // 该文件的文件名
        styleWebCode:'.smalltxt024{background: #ffe5ab;border-radius: 10px;padding: 12px 15px;margin: 30px 15px!important;position:relative;}.smalltxt024:before{content:"";border: 1px solid #ffe5ab;border-radius: 10px;position:absolute;left: 10px;top: -10px;right: 10px;bottom: -10px;}', // PC端样式
        styleWapCode:' .smalltxt024{color:#3a4f9f!important;background:#ffe5ab;border-radius:.13333125rem;padding:.2rem .4rem;margin:.4rem 0 .6666875rem 0!important;position:relative}.smalltxt024:before{content:"";border:1px solid #ffe5ab;border-radius:.13333125rem;position:absolute;left:.2rem;top:-.2rem;right:.2rem;bottom:-.2rem}', // 移动端样式
        htmlString:'<p class="smalltxt024">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}