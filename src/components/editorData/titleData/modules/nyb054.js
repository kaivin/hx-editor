
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'粉色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb54.js', // 该文件的文件名
        styleWebCode:'.smalltit054{text-align:center;position:relative;z-index:1;}.smalltit054 strong{background:#ffc0cb;background:-o-linear-gradient(right, #ffc0cb, #ff8fa2);background:-webkit-gradient(linear, left top, right top, from(#ffc0cb), to(#ff8fa2));background:-o-linear-gradient(left, #ffc0cb, #ff8fa2);background:linear-gradient(to right, #ffc0cb, #ff8fa2);display:inline-block;color:#fff;border-radius:50px;padding:8px 20px;line-height:30px;font-size:18px;}.smalltit054:before{content:"";width:80%;height:2px;background:-webkit-linear-gradient(left, transparent, #ffc0cb, transparent);background:-o-linear-gradient(right, transparent, #ffc0cb, transparent);background:-moz-linear-gradient(right, transparent, #ffc0cb, transparent);background:linear-gradient(to right, transparent, #ffc0cb, transparent);position:absolute;left:5%;top:50%;z-index:-1;margin-top:-1px;}', // PC端样式
        styleWapCode:'.smalltit054{text-align:center;position:relative;z-index:1;}.smalltit054 strong{background:#ffc0cb;background:-webkit-linear-gradient(left, #ffc0cb, #ff8fa2);background:-o-linear-gradient(right, #ffc0cb, #ff8fa2);background:-moz-linear-gradient(right, #ffc0cb, #ff8fa2);background:linear-gradient(to right, #ffc0cb, #ff8fa2);display:inline-block;color:#fff;border-radius:50px;padding:0.06667rem 0.26667rem;font-size:0.4rem;line-height:0.6rem;}.smalltit054:before{content:"";width:90%;height:0.08rem;background:-webkit-linear-gradient(left, transparent, #ffc0cb, transparent);background:-o-linear-gradient(right, transparent, #ffc0cb, transparent);background:-moz-linear-gradient(right, transparent, #ffc0cb, transparent);background:linear-gradient(to right, transparent, #ffc0cb, transparent);position:absolute;left:5%;top:50%;z-index:-1;margin-top:-0.04rem;}', // 移动端样式
        htmlString:'<p class="smalltit054"><strong>标题标题标题</strong></p>'
    };
}