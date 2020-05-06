
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色,黄色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'number', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb29.js', // 该文件的文件名
        styleWebCode:'.smalltit029{padding: 5px 0px 5px;font-size: 20px!important;margin-top:30px !important;margin-bottom:25px !important;} .smalltit029 strong{display:inline-block;position:relative;background:#b55553;padding: 6px 15px 6px 60px;border-radius:5px;color:#fff!important;text-shadow:2px 2px 0px rgba(0, 0, 0, 0.29);} .smalltit029 strong span{position:absolute;top:-5px;bottom:-5px;background:#ffdbaa;color:#7b0900;font-style:normal;left:7px;width:40px;z-index:5;border-radius:5px;line-height: 58px;font-size:24px;text-align:center;} @media (max-width:1600px) {.smalltit029 strong span{line-height: 54px;}} @media (max-width:1440px) {.smalltit029 strong{padding: 9px 15px 9px 60px;} .smalltit029 strong span{line-height:56px;}} @media (max-width:1280px) {.smalltit029 strong span{line-height:52px;}}', // PC端样式
        styleWapCode:'.smalltit029 strong{display:inline-block;position:relative;background:#b55553;padding:0rem 0.2rem 0rem 0.86667rem;border-radius:0.13333rem;color:#fff!important;font-weight:normal;}.smalltit029 strong span{position:absolute;top:-0.06667rem;bottom:-0.06667rem;background:#ffdbaa;color:#7b0900;font-style:normal;left:0.09333rem;width:0.64rem;z-index:5;border-radius:0.06667rem;line-height:0.84rem;font-size:0.38667rem;text-align:center;font-weight:bold;}', // 移动端样式
        htmlString:'<p class="smalltit029"><strong><span>1</span>标题标题标题标题标题标题</strong></p>'
    };
}