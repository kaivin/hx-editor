
export function getHtmlData (){
    return {
        type:"wap", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'青色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb61.js', // 该文件的文件名
        styleWebCode:'', // PC端样式
        styleWapCode:'.smalltit061{text-align:center;position:relative;z-index:1}.smalltit061 strong{background:#17c6c6;background:-webkit-linear-gradient(top, #36e5e5,#16c6c6);background:-o-linear-gradient(top, #36e5e5,#16c6c6);background:linear-gradient(to bottom, #36e5e5,#16c6c6);display:inline-block;color:#fff;border-radius:50px;padding:.06667rem .26667rem;font-size:.4rem;line-height:.6rem}.smalltit061:before{content:"";width:90%;height:.08rem;background:#17c6c6;background:-webkit-linear-gradient(top, #36e5e5,#16c6c6);background:-o-linear-gradient(top, #36e5e5,#16c6c6);background:linear-gradient(to bottom, #36e5e5,#16c6c6);position:absolute;left:5%;top:50%;z-index:-1;margin-top:-.04rem}', // 移动端样式
        htmlString:'<p class="smalltit061"><strong>标题标题标题</strong></p>'
    };
}