
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'number', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb34.js', // 该文件的文件名
        styleWebCode:'.smalltit034{text-align:center;font-size: 20px!important;margin-top: 30px !important;margin-bottom: 25px !important;} .smalltit034 strong{color:#ff461f!important;padding:0px 38px 9px 38px;position:relative;clear:both;display:inline-block;} .smalltit034 strong:after, .smalltit034 strong:before{content:"";position:absolute;left:50%;height:1px;background:#f25a29;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:120px;} .smalltit034 strong:after{bottom:1px;} .smalltit034 strong:before{bottom:-2px;} .smalltit034 strong span{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);background:#fff;color:#ff461f;display:block;text-align:center;line-height:1;font-weight:bold;position:absolute;z-index:3;bottom:-8px;padding:0px 5px;}', // PC端样式
        styleWapCode:'.smalltit034{text-align:center;}.smalltit034 strong{color:#ff461f!important;padding:0rem 0.50667rem 0.12rem 0.50667rem;position:relative;clear:both;display:inline-block;}.smalltit034 strong:after, .smalltit034 strong:before{content:"";position:absolute;left:50%;height:1px;background:#f25a29;transform:translateX(-50%);width:2.36rem;}.smalltit034 strong:after{bottom:1px;}.smalltit034 strong:before{bottom:-2px;}.smalltit034 strong span{left:50%;transform:translateX(-50%);background:#fff;color:#ff461f;display:block;box-sizing:border-box;text-align:center;line-height:1;font-weight:bold;position:absolute;z-index:3;bottom:-0.16rem;padding:0rem 0.06667rem;font-size:0.32rem;}', // 移动端样式
        htmlString:'<p class="smalltit034"><strong><span>1</span>标题标题标题标题标题标题</strong></p>'
    };
}