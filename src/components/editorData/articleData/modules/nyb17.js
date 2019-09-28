
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb17.js', // 该文件的文件名
        styleWebCode:'.smalltxt017 {position:relative;box-shadow:0px 0px 10px rgba(166, 209, 247, 0.5);border-radius:10px;padding:35px 15px 15px 15px !important;margin-bottom:20px!important;}.smalltxt017:before {content:"";left:25px;top:15px;right:10px;height:10px;background:url(../images/insidestyle/small011.png) repeat left top;display:block;position:absolute;background-size:32px 10px;}', // PC端样式
        styleWapCode:'.smalltxt017{position:relative; box-shadow:0px 0px 0.13333rem rgba(166, 209, 247, 0.5); border-radius:0.13333rem; padding:0.53333rem 0.26667rem 0.26667rem 0.26667rem !important; margin-bottom:0.26667rem;}.smalltxt017:before{content:""; left:0.2rem; top:0.26667rem; right:0.13333rem; height:0.13333rem; background:url(../images/insidestyle/small011.png) repeat left top; display:block; position:absolute; background-size:0.42667rem 0.13333rem;}', // 移动端样式
        htmlString:'<p class="smalltxt017">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}