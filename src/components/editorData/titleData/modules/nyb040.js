
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb40.js', // 该文件的文件名
        styleWebCode:'.smalltit040{display:block;text-align:center;font-size: 20px!important;margin-top: 30px !important;margin-bottom: 25px !important;} .smalltit040 strong{position:relative;line-height:1.5;color:#fff!important;border-radius:4px;padding:10px 20px;display:inline-block;background:#b72630;} .smalltit040 strong:after{content:"";position:absolute;top:4px;left:4px;bottom:4px;right:4px;border:1px dashed #fff;border-radius:4px;box-sizing:border-box;} @media (max-width:1440px) {.smalltit040 strong {font-size:18px!important;}}', // PC端样式
        styleWapCode:'.smalltit040{display:block;background:none;padding:0rem;text-align:center;}.smalltit040 strong{position:relative;font-size:0.4rem;line-height:1.5;color:#fff!important;background-color:#b72630;border-radius:4px;padding:0.13333rem 0.26667rem;display:inline-block;}.smalltit040 strong:after{content:"";position:absolute;top:4px;left:4px;bottom:4px;right:4px;border:1px dashed #fff;border-radius:4px;box-sizing:border-box;}', // 移动端样式
        htmlString:'<p class="smalltit040"><strong>标题标题标题标题标题标题</strong></p>'
    };
}