export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb015.js', // 该文件的文件名
        styleWebCode:'.smalltxt015{position:relative;padding:15px !important;background-size:100%;background:-webkit-linear-gradient(top, #633434, #7b0000);color:#fff !important;max-width:800px;margin-left:auto;margin-right:auto;}.smalltxt015:before{content:"";position:absolute;left:5px;right:5px;top:5px;bottom:5px;border:1px solid #fff;}', // PC端样式
        styleWapCode:'.smalltxt015{position:relative;padding:0.26667rem 0.33333rem;background:-webkit-linear-gradient(top, #ad7dbd, #581e67);color:#fff;margin:0.53333rem 0rem 0.53333rem 0rem;}.smalltxt015:before{content:"";position:absolute;left:0.06667rem;right:0.06667rem;top:0.06667rem;bottom:0.06667rem;border:1px solid #fff;}', // 移动端样式
        htmlString:'<p class="smalltxt015">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}