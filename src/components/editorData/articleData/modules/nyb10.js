
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'灰色,黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        fileName:'nyb10.js', // 该文件的文件名
        styleWebCode:'.smalltxt010{position:relative; z-index:3; padding:25px 20px 20px 20px !important; margin-bottom:20px;}.smalltxt010:after, .smalltxt010:before{content:""; position:absolute; background:url(../images/insidestyle/small004.png) no-repeat center center #fff; width:90px; height:84px; z-index:-1; background-size:90px;}.smalltxt010:after{right:0px; bottom:0px;}.smalltxt010:before{left:0px; top:0px; transform:rotate(180deg);}', // PC端样式
        styleWapCode:'.smalltxt010{position:relative; z-index:3; padding:0.26667rem !important; margin-bottom:0.26667rem;}.smalltxt010:after, .smalltxt010:before{content:""; position:absolute; background:url(../images/insidestyle/small004.png) no-repeat center center #fff; width:1.06667rem; height:0.86667rem; z-index:-1; background-size:100%;}.smalltxt010:after{right:0rem; bottom:0rem;}.smalltxt010:before{left:0rem; top:0rem; transform:rotate(180deg);}', // 移动端样式
        htmlString:'<p class="smalltxt010">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>'
    };
}