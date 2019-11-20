export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb048.js', // 该文件的文件名
        styleWebCode:'.smalltxt048{clear:both;display:block;padding:20px;box-shadow:0 0 5px rgba(182, 188, 194, 0.48);position:relative;max-width:800px;margin-left:auto;margin-right:auto;}.smalltxt048:after{content:"";border:2px solid #c9e7ff;position:absolute;top:10px;bottom:10px;left:10px;right:10px;}.smalltxt048:before{content:"";width:100px;height:10px;display:block;position:absolute;top:0;border:0px;border-left:10px solid #97c7f7;border-right:10px solid #c9e7ff;left:50%;margin-left:-50px;}', // PC端样式
        styleWapCode:'.smalltxt048{clear:both;display:block;padding:0.26667rem;box-shadow:0 0 0.06667rem rgba(182, 188, 194, 0.48);position:relative;margin:0.53333rem 0rem 0.53333rem 0rem !important;}.smalltxt048:after{content:"";border:2px solid #c9e7ff;position:absolute;top:0.13333rem;bottom:0.13333rem;left:0.13333rem;right:0.13333rem;}.smalltxt048:before{content:"";width:1.33333rem;height:0.13333rem;display:block;position:absolute;top:0;border:0px;border-left:0.13333rem solid #97c7f7;border-right:0.13333rem solid #c9e7ff;left:50%;margin-left:-0.66667rem;}', // 移动端样式
        htmlString:'<div class="smalltxt048"><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}