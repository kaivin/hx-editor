
export function getHtmlData (){
    return{
        type:"", // web(只用于PC端)|wap(只用于移动端)|(PC和移动端通用该值为空)|
        color:'', // 多个颜色用逗号分隔 目前取值项：红色,橙色,蓝色,绿色,棕色,黄色,紫色,粉色,黑色,青色,灰色
        effect:'static', // dynamic(动态)|static(静态)
        align:'center', // left(左对齐)|center(居中对齐)|right(右对齐)        
        style:'other', // icon(图标)|number(数字)|other(其他)
        class:'smalltit038',// 用来给js使用添加页面内样式使用
        fileName:'nyb38.js', // 该文件的文件名
        styleWebCode:'.smalltit038{clear:both;text-align:center !important;font-size: 20px!important;margin-top: 30px !important;margin-bottom: 25px !important;}.smalltit038 span{display:inline-block;border-radius:32px;padding: 6px 20px;background:rgb(1,102,155)!important;color:#fff;position:relative;font-weight:bold;}.smalltit038 span::before,.smalltit038 span::after{content:"";background:rgb(1,102,155)!important;width:35px;height:2px;display:inline-block;vertical-align:middle;position:absolute;top:50%;margin-top:-1px;}.smalltit038 span::before{left:-34px;}.smalltit038 span::after{right:-34px;}@media (max-width:1440px){.smalltit038{font-size:18px!important;}.smalltit038 span{padding: 9px 20px;}}', // PC端样式
        styleWapCode:'.smalltit038{clear:both;text-align:center !important;}.smalltit038 span{display:inline-block;border-radius:0.42667rem;padding:0.04rem 0.2rem;background:rgb(1,102,155)!important;color:#fff;position:relative;}.smalltit038 span::before,.smalltit038 span::after{content:"";background:rgb(1,102,155)!important;width:0.46667rem;background-size:0.46667rem;height:2px;display:inline-block;vertical-align:middle;position:absolute;top:50%;margin-top:-1px;}.smalltit038 span::before{left:-0.45333rem;}.smalltit038 span::after{right:-0.45333rem;}', // 移动端样式
        htmlString:'<p class="smalltit038"><span>标题标题标题标题标题标题</span></p>'
    };
}