
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb68.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.smalltit068{text-align:center;position:relative;z-index:1}.smalltit068 strong{background:#ffc773;background:-webkit-linear-gradient(top, #ffc773,#f8a01c);background:-o-linear-gradient(top, #ffc773,#f8a01c);background:linear-gradient(to bottom, #ffc773,#f8a01c);display:inline-block;color:#fff;border-radius:50px;padding:.06667rem .26667rem;font-size:.4rem;line-height:.6rem}.smalltit068:before{content:"";width:90%;height:.08rem;background:#ffc773;background:-webkit-linear-gradient(top, #ffc773,#f8a01c);background:-o-linear-gradient(top, #ffc773,#f8a01c);background:linear-gradient(to bottom, #ffc773,#f8a01c);position:absolute;left:5%;top:50%;z-index:-1;margin-top:-.04rem}', // 移动端样式
        htmlString:'<p class="smalltit068"><strong>标题标题标题</strong></p>'
    };
}