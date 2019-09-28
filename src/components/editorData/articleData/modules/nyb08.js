
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb08.js', // 该文件的文件名
        styleWebCode:'.smalltxt008 {position:relative;border-color:#99c4d0;border-style:solid;border-width:5px 1px;padding:10px 15px !important;margin-bottom:20px!important;}', // PC端样式
        styleWapCode:'.smalltxt008{position:relative; border-color:#99c4d0; border-style:solid; border-width:0.10667rem 1px; padding:0.26667rem !important; margin-bottom:0.26667rem;}', // 移动端样式
        htmlString:'<p class="smalltxt008">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}