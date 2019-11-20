export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb064.js', // 该文件的文件名
        styleWebCode:'.smalltxt064{color:#4168bf;border:1px dashed #97c7f7;padding:15px 15px 20px 15px;position:relative;max-width:800px;margin-left:auto;margin-right:auto;}.smalltxt064:before{content:"";width:128px;height:16px;background:url(../images/insidestyle/small040.png) no-repeat #fff;background-size:100%;display:block;position:absolute;right:15px;bottom:-8px;}', // PC端样式
        styleWapCode:'.smalltxt064{color:#4168bf;border:1px dashed #97c7f7;padding:0.2rem 0.2rem 0.26667rem 0.2rem;position:relative;margin:0.53333rem 0rem 0.6rem 0rem !important;}.smalltxt064:before{content:"";width:1.33333rem;height:0.16rem;background:url(../images/insidestyle/small040.png) no-repeat #fff;background-size:100%;display:block;position:absolute;right:0.2rem;bottom:-0.08rem;}', // 移动端样式
        htmlString:'<p class="smalltxt064">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}