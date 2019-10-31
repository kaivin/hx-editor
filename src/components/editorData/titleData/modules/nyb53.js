
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'粉色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb53.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.smalltit053{text-align:center}.smalltit053 strong{background:pink;background:-webkit-linear-gradient(top, pink,#ff8fa2);background:-o-linear-gradient(top, pink,#ff8fa2);background:linear-gradient(to bottom, pink,#ff8fa2);display:inline-block;color:#fff;padding:.06667rem .33333rem;border-radius:50px;position:relative;display:inline-block;line-height:.6rem;font-size:.4rem}.smalltit053 strong:after,.smalltit053 strong:before{content:"";width:.66667rem;height:.2rem;background:url(../assets/images/insidestyle/small022.png) no-repeat;display:block;background-size:1.10667rem;position:absolute;top:50%;margin-top:-.09333rem}.smalltit053 strong:before{background-position:left center;left:-.93333rem}.smalltit053 strong:after{background-position:right center;right:-.93333rem}', // 移动端样式
        htmlString:'<p class="smalltit053"><strong>标题标题标题</strong></p>'
    };
}