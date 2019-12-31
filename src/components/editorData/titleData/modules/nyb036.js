
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'number', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb36.js', // 该文件的文件名
        styleWebCode:'.smalltit036{clear:both;font-size: 20px!important;margin-top: 30px !important;margin-bottom: 25px !important;} .smalltit036 strong{display:inline-block;position:relative;color:#de5252;} .smalltit036 strong span{font-style:normal;border-radius:50%;text-align:center;margin-right:10px;background:#de5252;color:#fff;width: 40px;height: 40px;display:inline-block;line-height: 40px;} @media (max-width:1440px) {.smalltit036{font-size:18px!important;} .smalltit036 strong span{width:35px;height:35px; line-height:35px;}}', // PC端样式
        styleWapCode:'.smalltit036{clear:both;}.smalltit036 strong{display:inline-block;position:relative;border-radius:0.29333rem;padding:0rem 0.2rem 0rem 0rem;color:#de5252;}.smalltit036 strong span{font-style:normal;border-radius:50%;text-align:center;margin-right:0.13333rem;background:#ff461f;color:#fff;width:0.57333rem;height:0.57333rem;display:inline-block;line-height:0.57333rem;}', // 移动端样式
        htmlString:'<p class="smalltit036"><strong><span>1</span>标题标题标题标题标题标题</strong></p>'
    };
}