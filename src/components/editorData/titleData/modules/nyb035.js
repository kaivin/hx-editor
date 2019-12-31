
export function getHtmlData (){
    return {
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'红色', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'left', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'number', // icon(图标)|number(数字)|other(其他)
        fileName:'nyb35.js', // 该文件的文件名
        styleWebCode:'.smalltit035{clear:both;font-size: 20px!important;margin-top: 30px !important;margin-bottom: 25px !important;} .smalltit035 strong{display:inline-block;position:relative;border-radius:32px;padding: 6px 15px;background:#de5252;color:#fff;} .smalltit035 strong span{font-style:normal;border-radius:50%;text-align:center;padding-right:7px;} @media (max-width:1440px) {.smalltit035{font-size:18px!important;} .smalltit035 strong{padding: 9px 15px;}}', // PC端样式
        styleWapCode:'.smalltit035{clear:both;}.smalltit035 strong{display:inline-block;position:relative;border-radius:0.42667rem;padding:0.04rem 0.2rem;background:#de5252;color:#fff;}.smalltit035 strong span{font-style:normal;border-radius:50%;text-align:center;padding-right:0.09333rem;}', // 移动端样式
        htmlString:'<p class="smalltit035"><strong><span>1</span>标题标题标题标题标题标题</strong></p>'
    };
}