
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb38.js', // 该文件的文件名
        styleWebCode:'.smalltit038{clear:both;text-align:center !important;}.smalltit038 span{display:inline-block;border-radius:32px;padding:5px 20px;background:#b52832;color:#fff;position:relative;font-size:18px;font-weight:bold;}.smalltit038 span::before, .smalltit038 span::after{content:"";background:url(../images/insidestyle/small020.png) no-repeat center top;width:35px;background-size:35px;height:16px;display:inline-block;vertical-align:middle;position:absolute;top:50%;margin-top:-8px;}.smalltit038 span::before{left:-34px;}.smalltit038 span::after{right:-34px;transform:scale(-1);margin-top:-8px;}', // PC端样式
        styleWapCode:'.smalltit038{clear:both;text-align:center !important;}.smalltit038 span{display:inline-block;border-radius:0.42667rem;padding:0.04rem 0.2rem;background:#b52832;color:#fff;position:relative;}.smalltit038 span::before, .smalltit038 span::after{content:"";background:url(../images/insidestyle/small020.png) no-repeat center top;width:0.46667rem;background-size:0.46667rem;height:0.21333rem;display:inline-block;vertical-align:middle;position:absolute;top:50%;margin-top:-0.10667rem;}.smalltit038 span::before{left:-0.45333rem;}.smalltit038 span::after{right:-0.45333rem;transform:scale(-1);margin-top:-0.10667rem;}', // 移动端样式
        htmlString:'<p class="smalltit038"><span>标题标题标题标题标题标题</span></p>'
    };
}