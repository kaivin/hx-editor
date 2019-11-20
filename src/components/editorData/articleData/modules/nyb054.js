export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb054.js', // 该文件的文件名
        styleWebCode:'.smalltxt054{clear:both;border:2px solid #e0f2ff;padding:25px 15px 15px 15px;position:relative;max-width:800px;margin-left:auto;margin-right:auto;}.smalltxt054:before{content:"";width:100%;height:15px;background:url(../images/insidestyle/small037.png) no-repeat;background-size:100%;display:block;position:absolute;left:0;top:-15px;}.smalltxt054:after{content:"";height:1px;background:#e0f2ff;position:absolute;left:15px;right:15px;top:15px;}', // PC端样式
        styleWapCode:'.smalltxt054{clear:both;border:0.02667rem solid #e0f2ff;padding:0.33333rem 0.2rem 0.2rem 0.2rem;position:relative;margin:0.73333rem 0rem 0.53333rem 0rem !important;}.smalltxt054:before{content:"";width:100%;height:0.2rem;background:url(../images/insidestyle/small037.png) no-repeat;background-size:100%;display:block;position:absolute;left:0;top:-0.2rem;}.smalltxt054:after{content:"";height:1px;background:#e0f2ff;position:absolute;left:0.2rem;right:0.2rem;top:0.2rem;}', // 移动端样式
        htmlString:'<div class="smalltxt054"><p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p></div>'
    };
}