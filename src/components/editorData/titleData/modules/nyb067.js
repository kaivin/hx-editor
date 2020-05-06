
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb67.js', // 该文件的文件名
        styleWebCode:'.smalltit067{text-align:center;}.smalltit067 strong{background:#ffc773;background:-o-linear-gradient(#ffc773, #f8a01c);background:-webkit-gradient(linear, left top, left bottom, from(#ffc773), to(#f8a01c));background:linear-gradient(#ffc773, #f8a01c);color:#fff!important;padding:7px 20px;border-radius:30px;position:relative;display:inline-block;line-height:30px;font-size:18px;}.smalltit067 strong:after, .smalltit067 strong:before{content:"";width:40px;height:15px;background:url(../images/insidestyle/small024.png) no-repeat;display:block;background-size:65px;position:absolute;top:50%;margin-top:-7px;}.smalltit067 strong:before{background-position:left center;left:-50px;}.smalltit067 strong:after{background-position:right center;right:-50px;}', // PC端样式
        styleWapCode:'.smalltit067{text-align:center;}.smalltit067 strong{background:#4772bb;background:-webkit-linear-gradient(#ffc773, #f8a01c);background:-o-linear-gradient(#ffc773, #f8a01c);background:-moz-linear-gradient(#ffc773, #f8a01c);background:linear-gradient(#ffc773, #f8a01c);display:inline-block;color:#fff!important;padding:0.06667rem 0.33333rem;border-radius:50px;position:relative;display:inline-block;line-height:0.6rem;font-size:0.4rem;}.smalltit067 strong:after, .smalltit067 strong:before{content:"";width:0.66667rem;height:0.2rem;background:url(../images/insidestyle/small024.png) no-repeat;display:block;background-size:1.10667rem;position:absolute;top:50%;margin-top:-0.09333rem;}.smalltit067 strong:before{background-position:left center;left:-0.93333rem;}.smalltit067 strong:after{background-position:right center;right:-0.93333rem;}', // 移动端样式
        htmlString:'<p class="smalltit067"><strong>标题标题标题</strong></p>'
    };
}