
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'蓝色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'dynamic', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb26.js', // 该文件的文件名
        styleWebCode:'.smalltit026{text-align:center;}.smalltit026 strong{display:inline-block;padding:0px 15px;position:relative;font-weight:normal;}.smalltit026 strong:after{content:"";position:absolute;background:url(../images/insidestyle/small013.gif) no-repeat center center;width:41px;height:10px;top:-10px;left:50%;margin-left:-21px;background-size:100%;}', // PC端样式
        styleWapCode:'.smalltit026{text-align:center;}.smalltit026 strong{display:inline-block;padding:0rem 0.2rem;position:relative;font-weight:normal;}.smalltit026 strong:after{content:"";position:absolute;background:url(../images/insidestyle/small013.gif) no-repeat center center;width:0.54667rem;height:0.13333rem;top:-0.13333rem;left:50%;margin-left:-0.28rem;background-size:100%;}', // 移动端样式
        htmlString:'<p class="smalltit026"><strong>标题标题标题标题标题标题</strong></p>'
    };
}