
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb37.js', // 该文件的文件名
        styleWebCode:'.smalltit037{clear:both;text-align:center !important;color:#a01f31 !important;background:none !important;margin-left:0px !important;padding-left:0px !important;font-weight:bold;font-size:18px;}.smalltit037::before, .smalltit037::after{content:"";display:inline-block;vertical-align:middle;}.smalltit037::before{background:url(../images/insidestyle/small018.png) no-repeat;width:62px;height:50px;background-size:100%;margin-right:-24px;margin-top:-6px;}.smalltit037::after{background:url(../images/insidestyle/small019.png) no-repeat;width:39px;height:50px;background-size:100%;margin-left:-10px;margin-top:-6px;}.smalltit037 a{color:#f00 !important;}', // PC端样式
        styleWapCode:'.smalltit037{clear:both;text-align:center !important;color:#a01f31 !important;background:none !important;margin-left:0px !important;padding-left:0px !important;font-weight:bold;}.smalltit037::before, .smalltit037::after{content:"";display:inline-block;vertical-align:middle;}.smalltit037::before{background:url(../images/insidestyle/small018.png) no-repeat;width:0.82667rem;height:0.66667rem;background-size:100%;margin-right:-0.32rem;margin-top:-0.08rem;}.smalltit037::after{background:url(../images/insidestyle/small019.png) no-repeat;width:0.52rem;height:0.66667rem;background-size:100%;margin-left:-0.13333rem;margin-top:-0.08rem;}.smalltit037 a{color:#f00 !important;}', // 移动端样式
        htmlString:'<p class="smalltit037">标题标题标题标题标题标题</p>'
    };
}