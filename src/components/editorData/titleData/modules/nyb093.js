
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb093.js', // 该文件的文件名
        styleWebCode:'.smalltit093{clear:both;display:block;margin-bottom:40px !important;position:relative;text-align:center;}.smalltit093 strong{clear:both;position:relative;display:inline-block;line-height:30px;padding:10px 20px;background:#5885d0;color:#fff!important;font-size:18px;}.smalltit093 strong:after, .smalltit093 strong:before{content:"";width:5px;height:30px;background:#5885d0;display:block;position:absolute;bottom:0;}.smalltit093 strong:before{right:-10px;}.smalltit093 strong:after{left:-10px;}.smalltit093 i{width:20px;height:25px;background:url(../images/insidestyle/small029.gif) no-repeat;background-size:100%;display:block;position:absolute;left:50%;bottom:-35px;margin-left:-10px;}', // PC端样式
        styleWapCode:'.smalltit093{width:fit-content;background:#5885d0;color:#fff;padding:0 .32rem;display:block;margin:0.4rem auto 0.93319rem auto !important;position:relative;}.smalltit093 strong:after, .smalltit093 strong:before, .smalltit093:after, .smalltit093:before{content:"";width:.09333125rem;height:.6rem;background:#5885d0;display:block;position:absolute;bottom:0;}.smalltit093:before{left:-.1733125rem;}.smalltit093 strong:after, .smalltit093:after{width:.04rem;height:.36rem;left:-.2933125rem;}.smalltit093 strong:before{right:-.1733125rem;}.smalltit093 strong:after{left:auto;right:-.2933125rem;}.smalltit093 strong{clear:both;display:inline-block;line-height:0.8rem;color:#fff!important;}.smalltit093 i{width:.2933125rem;height:.3733125rem;background:url(../images/insidestyle/small029.gif) no-repeat;background-size:100%;display:block;position:absolute;left:50%;bottom:-.6rem;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);}', // 移动端样式
        htmlString:'<p class="smalltit093"><strong>标题标题标题标题</strong><i></i></p>'
    };
}