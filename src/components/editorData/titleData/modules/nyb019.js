
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色,黄色,棕色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb19.js', // 该文件的文件名
        styleWebCode:'.smalltit019{text-align:center;position:relative;z-index:3;margin-bottom:25px!important;font-size: 20px!important;margin-top:30px!important;} .smalltit019 strong{border:1px solid #ffd200;display:inline-block;color:#fff!important;padding: 5px 15px;background:#4c2204;position:relative;} .smalltit019 strong:after{content:"";z-index:-1;border:1px solid #ffd200;position:absolute;left:5px;bottom:-5px;top:5px;right:-5px;background:#ee1c27;} @media (max-width:1440px) {.smalltit019{margin-bottom:20px!important;font-size:18px!important;} .smalltit019 strong{padding: 8px 15px;}} @media (max-width:1280px) {.smalltit019 strong{padding: 9px 15px;}}', // PC端样式
        styleWapCode:'.smalltit019{text-align:center;position:relative;z-index:3;}.smalltit019 strong{border:1px solid #ffd200;display:inline-block;margin:0px;color:#fff!important;padding:0rem 0.2rem;background:#4c2204;position:relative;font-weight:normal;}.smalltit019 strong:after{content:"";z-index:-1;border:1px solid #ffd200;position:absolute;left:0.06667rem;bottom:-0.06667rem;top:0.06667rem;right:-0.06667rem;background:#ee1c27;}', // 移动端样式
        htmlString:'<p class="smalltit019"><strong>标题标题标题标题标题标题</strong></p>'
    };
}