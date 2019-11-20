export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb050.js', // 该文件的文件名
        styleWebCode:'.smalltxt050{position:relative;padding:10px 15px;max-width:800px;margin-left:auto;margin-right:auto;}.smalltxt050:before{content:"";background:#c7e5ff;position:absolute;left:0;right:0;top:0;bottom:0;transform:rotate(-2deg);-ms-transform:rotate(-2deg);-moz-transform:rotate(-2deg);-webkit-transform:rotate(-2deg);-o-transform:rotate(-2deg);z-index:1;}.smalltxt050:after{content:"";background:#fff;border:2px solid #4a77ce;position:absolute;left:0;right:0;top:0;bottom:0;z-index:2;}.smalltxt050 p{clear:both;padding:10px 0px;position:relative;z-index:3;margin:0px;}', // PC端样式
        styleWapCode:'.smalltxt050{position:relative;padding:0.13333rem 0.2rem;margin:0.66667rem 0rem !important;}.smalltxt050:before{content:"";background:#c7e5ff;position:absolute;left:0;right:0;top:0;bottom:0;transform:rotate(-2deg);-ms-transform:rotate(-2deg);-moz-transform:rotate(-2deg);-webkit-transform:rotate(-2deg);-o-transform:rotate(-2deg);z-index:1;}.smalltxt050:after{content:"";background:#fff;border:2px solid #4a77ce;position:absolute;left:0;right:0;top:0;bottom:0;z-index:2;}.smalltxt050 p{clear:both;padding:0.13333rem 0rem;position:relative;z-index:3;margin:0px;}', // 移动端样式
        htmlString:'<div class="smalltxt050"><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}