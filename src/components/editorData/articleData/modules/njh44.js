
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'njh44.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.special68{border:1px solid #a7d5f8;padding:.2rem .4rem;position:relative}.special68:before{content:"";border:1px solid #a7d5f8;position:absolute;left: -1px;right:-1px;top:-.12rem;bottom:-1px;}.special68:after{content:"";width:.1333125rem;height:.1333125rem;background:#aadafe;border:1px solid #6da3dd;border-radius:50%;display:block;position:absolute;right:.1333125rem;bottom:.1333125rem}', // 移动端样式
        htmlString:'<p class="special68">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}