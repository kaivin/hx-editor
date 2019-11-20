
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb095.js', // 该文件的文件名
        styleWebCode:'.smalltit095{position:relative;z-index:1;}.smalltit095 strong{display:inline-block;border-radius:30px;padding:8px 20px;line-height:30px;position:relative;background:#3876da;color:#fff;font-size:18px;}', // PC端样式
        styleWapCode:'.smalltit095{margin:0.2rem 0rem 0.13333rem !important;padding:0.53333rem 0rem 0rem;position:relative;z-index:1;}.smalltit095:before{content:"";width:100%;height:0.13333rem;background:#e7f3ff;border-top:1px solid #3876da;display:block;position:absolute;left:0;top:0;}.smalltit095 strong{display:inline-block;background:#e7f3ff;border-radius:50px;padding:0.06667rem 0.2rem;line-height:0.53333rem;box-shadow:0 -0.06667rem 0 #3876da;position:relative;color:#3876da;}.smalltit095 strong:after, .smalltit095 strong:before{content:"";width:0.13333rem;height:0.46667rem;background:#e7f3ff;display:block;position:absolute;top:-0.46667rem;z-index:-1;}.smalltit095 strong:before{left:0.4rem;border-left:1px solid #3876da;}.smalltit095 strong:after{right:0.4rem;border-right:1px solid #3876da;}', // 移动端样式
        htmlString:'<p class="smalltit095"><strong>标题标题标题</strong></p>'
    };
}